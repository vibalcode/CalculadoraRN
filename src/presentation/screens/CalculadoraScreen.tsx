import React from 'react'
import { View, Text } from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import { COLORS, globalStyles } from '../../config/theme/app-theme';

const buttonsOpt = [
  { text: 'C', color: COLORS.mediumGrayButton },
  { text: '+/-', color: COLORS.mediumGrayButton },
  { text: 'del', color: COLORS.mediumGrayButton },
  { text: '÷', color: COLORS.lightGrayButton },
  { text: '7', color: COLORS.darkGrayButton },
  { text: '8', color: COLORS.darkGrayButton },
  { text: '9', color: COLORS.darkGrayButton },
  { text: 'X', color: COLORS.lightGrayButton },
  { text: '4', color: COLORS.darkGrayButton },
  { text: '5', color: COLORS.darkGrayButton },
  { text: '6', color: COLORS.darkGrayButton },
  { text: '-', color: COLORS.lightGrayButton },
  { text: '1', color: COLORS.darkGrayButton },
  { text: '2', color: COLORS.darkGrayButton },
  { text: '3', color: COLORS.darkGrayButton },
  { text: '+', color: COLORS.lightGrayButton },
  { text: '0', color: COLORS.darkGrayButton },
  { text: '.', color: COLORS.darkGrayButton },
  { text: '=', color: COLORS.greenButton },
];

const buttonsBlackText = ['÷', 'X', '-', '+'];
export const CalculadoraScreen = () => {
  return (
    <View style={globalStyles.container}>
        <View style={globalStyles.contentOperation}>
          <Text style={globalStyles.textOperation}>2</Text>
          <Text style={globalStyles.textOperator}>+</Text>
          <Text style={globalStyles.textOperation}>2</Text>
        </View>
        <View>
          <Text style={globalStyles.textResult}>4</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          
        }}>
          {
            buttonsOpt.map((btn, i) => (
              <CalculatorButton 
                label={btn.text} 
                backgroundColor={btn.color}
                dobleWidth={ btn.text === '=' ? true : false }
                blackText={ buttonsBlackText.includes(btn.text) }
                key={i} /> 
              ))
          }
        </View>
      </View>
  )
}
