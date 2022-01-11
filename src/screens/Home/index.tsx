import React, { useEffect, useState } from 'react';

import {
  FlatList,
  Text,
  View
} from 'react-native';
import { Appointment } from '../../components/Appointment';
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
  }]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
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
          />
        )}
        contentContainerStyle={{ paddingBottom: 69 }}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </View>


  );
}