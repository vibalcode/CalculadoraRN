import React from 'react'
import { View, Text } from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import { COLORS, globalStyles } from '../../config/theme/app-theme';
import { useCalculadora } from '../hooks/useCalculadora';

const buttonsOpt = [
  { text: 'C', color: COLORS.mediumGrayButton },
  { text: '+/-', color: COLORS.mediumGrayButton },
  { text: 'del', color: COLORS.mediumGrayButton },
  { text: '÷', color: COLORS.lightGrayButton },
  { text: '7', color: COLORS.darkGrayButton },
  { text: '8', color: COLORS.darkGrayButton },
  { text: '9', color: COLORS.darkGrayButton },
  { text: 'x', color: COLORS.lightGrayButton },
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

const buttonsBlackText = ['÷', 'x', '-', '+'];
const optionsNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

export const CalculadoraScreen = () => {

  const {
    buildNumber,
    currentNumber,
    lastNumber,
    clear,
    operatorPressed,
    operator,
    changeSign,
    result,
    resultado} = useCalculadora();


  return (
    <View style={globalStyles.container}>
        <View style={globalStyles.contentOperation}>
          <Text 
            numberOfLines={1}
            adjustsFontSizeToFit
            style={{
              ...globalStyles.textOperation,
              paddingLeft: 20,
            }}>
            {
              (lastNumber !== '' && operator !== '') ? lastNumber : currentNumber
            } </Text>
          <Text style={globalStyles.textOperator}>{operator}</Text>
        </View>
        <View style={globalStyles.contentOperation}>
          <Text 
            numberOfLines={1}
            adjustsFontSizeToFit
            style={{
              ...globalStyles.textOperation,
              marginStart: 15,
              }}> {
                (lastNumber !== '' && operator !== '') ? currentNumber : ''
              } </Text>
        </View>
        <View>
          <Text style={globalStyles.textResult}>{result}</Text>
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
                key={i}
                onPress={() => {
                  if (optionsNumbers.includes(btn.text)) {
                    buildNumber(btn.text);
                  } else if (btn.text === 'C') {
                    clear();
                  } else if (buttonsBlackText.includes(btn.text)) {
                    operatorPressed(btn.text);
                  } else if (btn.text === '+/-') {
                    changeSign();
                  } else if (btn.text === '=') {
                    resultado();
                  }

                }} /> 
              ))
          }
        </View>
      </View>
  )
}
