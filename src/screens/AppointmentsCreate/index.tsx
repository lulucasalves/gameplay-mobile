import React, { useState } from 'react';
import {
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

export function AppointmentsCreate() {
  const [category, setCategory] = useState('1')
  const [modal, setModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

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

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <ScrollView>
          <Header
            title='Agendar partida'
          />
          <Text style={[
            styles.label,
            {
              marginLeft: 24,
              marginTop: 36,
              marginBottom: 18
            }
          ]}>Categoria</Text>

          <CategorySelect setCategory={handleCategorySelect} categorySelect={category} />

          <View style={styles.form}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleOpenModal}
            >
              <View style={styles.select}>
                {
                  guild.icon
                    ? <GuildIcon />
                    : <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : ' Selecione um servidor'}
                  </Text>
                </View>

                <Feather
                  name='chevron-right'
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
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>


                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label} >Descrição</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>
            <Textarea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <ButtonIcon title="Agendar" />
            </View>
          </View>


        </ScrollView>
      </Background>

      <ModalView visible={modal} closeModal={handleCloseModal}>
        <Modal handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView >
  );
}