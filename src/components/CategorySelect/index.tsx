import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import { Category } from '../Category';
import { styles } from './styles';

type Props = {
  categorySelect: string,
  setCategory: (categoryId: string) => void
}

export function CategorySelect({ categorySelect, setCategory }: Props) {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(val => {
          return (
            <Category
              key={val.id}
              title={val.title}
              icon={val.icon}
              checked={val.id === categorySelect}
              onPress={() => setCategory(val.id)}
            />
          )
        })
      }
    </ScrollView>
  );
}