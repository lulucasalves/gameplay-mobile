import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  subtitle: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading
  },
  titleRed: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.primary
  },
  logoContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    marginTop: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  notYes: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading
  },
  button: {
    height: 56,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
})
