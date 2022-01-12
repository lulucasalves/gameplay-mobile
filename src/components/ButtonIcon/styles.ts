import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    alignItems: 'center'
  },
  iconWrap: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: theme.colors.line
  },
  icon: {
    width: 24,
    height: 18
  },
  title: {
    flex: 1,
    fontSize: 15,
    color: theme.colors.heading,
    textAlign: 'center',
    fontFamily: theme.fonts.text500
  }
})
