import React from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  View
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Fontisto } from '@expo/vector-icons'
import Banner from '../../assets/banner.png'
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { SigninButton } from '../../components/SigninButton';
import { ListDivider } from '../../components/ListDivider';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appointment';

type Params = {
  guildSelected: AppointmentProps
}

export function AppointmentsDetails() {
  const members = [{
    id: '1',
    username: 'lulucasalves',
    status: 'online',
    avatar: 'https://avatars.githubusercontent.com/u/72206769?v=4'
  }, {
    id: '2',
    username: 'lulucasalves',
    status: 'online',
    avatar: 'https://avatars.githubusercontent.com/u/72206769?v=4'
  }]

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          <BorderlessButton>
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
          <Text style={styles.title} >Lendários</Text>
          <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
        </View>
      </ImageBackground>

      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList
        style={styles.members}
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
      />

      <View style={styles.footer}>
        <SigninButton title="Entrar na partida" />
      </View>


    </Background>
  );
}