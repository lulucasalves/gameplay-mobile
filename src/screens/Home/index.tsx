import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('')

  const appointments = [{
    id: '1',
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao chellenger sem perder uma partida da md10',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    }
  }, {
    id: '2',
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao chellenger sem perder uma partida da md10',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    }
  }]

  const navigation = useNavigation();

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

  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>
        <CategorySelect
          categorySelect={category}
          setCategory={handleCategorySelect}
        />

        <ListHeader title="Partidas agendadas" subtitle='Total 6' />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={handleAppointmentDetails}
            />
          )}
          contentContainerStyle={{ paddingBottom: 69 }}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </Background>
  );
}