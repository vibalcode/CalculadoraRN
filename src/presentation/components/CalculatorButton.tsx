import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../config/theme/app-theme';

interface CalculatorButtonProps {
  label: string;
  backgroundColor?: string;
  blackText?: boolean;
  dobleWidth?: boolean;
}

const CalculatorButton = ({ 
  label, 
  backgroundColor, 
  blackText = false,
  dobleWidth = false,
 }: CalculatorButtonProps) => {
  return (
    <Pressable style={{
      ...globalStyles.buttonCalculator,
      width: dobleWidth ? 170 : 80,
      backgroundColor: backgroundColor || 'red',
      }}>
      <Text style={{
        color: blackText ? 'black' : 'white',
        fontWeight: '400',
        fontSize: 35,
      }}>{label}</Text>
    </Pressable>
  );
};

export default CalculatorButton;