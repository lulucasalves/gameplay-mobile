import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  Alert,
  FlatList,
  Share,
  Platform
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Fontisto } from '@expo/vector-icons'
import Banner from '../../assets/banner.png'
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { ListHeader } from '../../components/ListHeader';
import { Member, MemberProps } from '../../components/Member';
import { SigninButton } from '../../components/SigninButton';
import { ListDivider } from '../../components/ListDivider';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';
import { Load } from '../../components/Load';
import * as Linking from 'expo-linking';

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

export function AppointmentsDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute()
  const { guildSelected } = route.params as Params

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);
    } catch {
      Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?');
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    console.log(widget)
    if (widget.instant_invite) {
      const message = Platform.OS === 'ios'
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

      Share.share({
        message,
        url: widget.instant_invite
      });
    }
  }

  function handleOpenGuild() {
    if (widget.instant_invite) {
      Linking.openURL(widget.instant_invite);
    }
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title='Detalhes'
        action={guildSelected.guild.owner &&
          <BorderlessButton onPress={handleShareInvitation}>
            <Fontisto
              name='share'
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        source={Banner}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title} >{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? <Load /> :
        <>
          {widget.members &&
            <ListHeader
              title="Jogadores"
              subtitle={`Total ${widget.members.length}`}
            />
          }

          <FlatList
            style={styles.members}
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
          />
        </>}

      {
        guildSelected.guild.owner &&
        <View style={styles.footer}>
          <SigninButton onPress={handleOpenGuild} title="Entrar na partida" />
        </View>
      }


    </Background>
  );
}