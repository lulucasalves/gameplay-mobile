import React, { ReactNode } from 'react';
import {
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Background } from '../Background';
import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode,
  closeModal: () => void
}

export function ModalViewSignOut({ children, closeModal, ...rest }: Props) {

  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}