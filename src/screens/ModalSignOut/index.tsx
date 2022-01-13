import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { Auth } from '../../context/auth';
import { api } from '../../services/api';
import { theme } from '../../styles/theme';

import { styles } from './styles';

type Props = {
  handleCloseModal: () => void
}

export function ModalSignOut({ handleCloseModal }: Props) {
  const { signOut } = Auth()


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.subtitle} >Deseja Sair do</Text>
        <Text style={styles.title} >Game</Text>
        <Text style={styles.titleRed} >Play</Text>
        <Text style={styles.title} >?</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleCloseModal}
          activeOpacity={.7}
          style={[styles.button,
          {
            borderWidth: 1,
            borderColor: theme.colors.secondary40, marginRight: 4
          }]}
        >
          <Text style={styles.notYes} >Não</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={.7}
          onPress={signOut}
          style={[styles.button,
          {
            backgroundColor: theme.colors.primary, marginLeft: 4
          }]}
        >
          <Text style={styles.notYes}>Sim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}