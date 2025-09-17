import { StyleSheet } from 'react-native';

export const COLORS = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: '#FFFFFF',
  textSecondary: '#666666',
  textOperator: '#10aa5dff',
  background: '#000000',

  lightGrayButton: '#919191',
  mediumGrayButton: '#2D2D2F',
  darkGrayButton: '#171719',
  greenButton: '#16C603',
};

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentOperation: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textOperation: {
    color: COLORS.textPrimary,
    fontSize: 50,
    textAlign: 'right',
  },
  textOperator: {
    color: COLORS.textOperator,
    fontSize: 50,
    fontWeight: '300',
    textAlign: 'right',
  },
  textResult: {
    color: COLORS.textPrimary,
    fontSize: 30,
    textAlign: 'right',
    paddingVertical: 60,
  },
  buttonCalculator: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
