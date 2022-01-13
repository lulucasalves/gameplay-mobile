import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  FlatList,
  View
} from 'react-native';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { COLLECTION_APPOINTMENTS } from '../../configs/discordAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { Load } from '../../components/Load';
import { ModalViewSignOut } from '../../components/ModalViewSignOut';
import { ModalSignOut } from '../ModalSignOut';

export function Home() {
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])
  const navigation = useNavigation();
  const [modal, setModal] = useState(false)

  function handleCloseModal() {
    setModal(false)
  }

  function handleOpenModal() {
    setModal(true)
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    setTimeout(() => {
      navigation.navigate('AppointmentsDetails', { guildSelected });
    }, 100);

  }

  function handleAppointmentCreate() {
    setTimeout(() => {
      navigation.navigate('AppointmentsCreate');
    }, 100);
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage)
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile handleOpenModal={handleOpenModal} />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>
        <CategorySelect
          categorySelect={category}
          setCategory={handleCategorySelect}
        />

        {loading ? <Load /> :
          <>
            <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />
            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointmentDetails(item)}
                />
              )}
              contentContainerStyle={{ paddingBottom: 69 }}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <ListDivider />}
            />
          </>}
      </View>

      <ModalViewSignOut visible={modal} closeModal={handleCloseModal}>
        <ModalSignOut handleCloseModal={handleCloseModal} />
      </ModalViewSignOut>
    </Background>
  );
}