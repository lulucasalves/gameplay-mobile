import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { Textarea } from '../../components/Textarea';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ModalView } from '../../components/ModalView';
import { Modal } from '../Modal';
import { GuildProps } from '../../components/Guild';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { COLLECTION_APPOINTMENTS } from '../../configs/discordAuth';

export function AppointmentsCreate() {
  const navigation = useNavigation();

  const [category, setCategory] = useState('1')
  const [modal, setModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  function handleOpenModal() {
    setModal(true)
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect)
    setModal(false)
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  function handleCloseModal() {
    setModal(false)
  }

  async function handleSave() {
    const dataApresentation = day.length > 1 &&
      month.length > 1 &&
      hour.length > 1 &&
      minute.length > 1 &&
      description.length > 1 &&
      guild &&
      parseInt(month) < 13 &&
      parseInt(month) > 0 &&
      parseInt(hour) > 0 &&
      parseInt(hour) < 25 &&
      parseInt(minute) > 0 &&
      parseInt(minute) < 60 &&
      parseInt(day) > 0 &&
      parseInt(day) < 32

    if (
      dataApresentation
    ) {
      const newAppointment = {
        id: uuid.v4(),
        guild,
        category,
        date: `${day}/${month} às ${hour}:${minute}h`,
        description
      };

      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const appointments = storage ? JSON.parse(storage) : [];

      await AsyncStorage.setItem(
        COLLECTION_APPOINTMENTS,
        JSON.stringify([...appointments, newAppointment])
      );

      navigation.navigate('Home');
    } else {
      Alert.alert('Informações inválidas, por favor preencha todos os campos')
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header
            title="Agendar partida"
          />

          <Text style={[
            styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
          >
            Categoria
          </Text>

          <CategorySelect
            setCategory={handleCategorySelect}
            categorySelect={category}
          />

          <View style={styles.form}>
            <TouchableOpacity onPress={handleOpenModal}>
              <View style={styles.select}>
                {
                  guild.icon
                    ? <GuildIcon guildId={guild.id} iconId={guild.icon} />
                    : <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {
                      guild.name
                        ? guild.name
                        : 'Selecione um servidor'
                    }
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setDay}
                  />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMonth}
                  />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setHour}
                  />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMinute}
                  />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>

              <Text style={styles.caracteresLimit}>
                Max 100 caracteres
              </Text>
            </View>

            <Textarea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />

            <View style={styles.footer}>
              <ButtonIcon
                title="Agendar"
                onPress={handleSave}
              />
            </View>
          </View>
        </ScrollView>
      </Background>

      <ModalView visible={modal} closeModal={handleCloseModal}>
        <Modal handleGuildSelect={handleGuildSelect} />
      </ModalView>

    </KeyboardAvoidingView>
  );
}