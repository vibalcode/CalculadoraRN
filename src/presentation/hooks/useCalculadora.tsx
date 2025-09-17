import React, { useEffect, useRef, useState } from 'react'

enum Operator {
  add = '+',
  substract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculadora = () => {
  const [formula, setFormula] = useState(''); // guarda la formula que se va formando
  const [currentNumber, setCurrentNumber] = useState('0'); // es el numero que se va formando
  const [lastNumber, setLastNumber] = useState(''); // se usa para tomar al numero después de presionar un operador
  const [result, setResult] = useState(''); // guarda el resultado de la operación
  const [operator, setOperator] = useState(''); // guarda el operador presionado

  const lastOperation = useRef<Operator | undefined>(undefined);
  
  // use effect para ir realizando las operaciones conforme se va formando la formula
  useEffect( () => {
    if (lastOperation.current === undefined) return;
    const num1 = Number(lastNumber);
    const num2 = Number(currentNumber);
    switch (lastOperation.current) {
      case Operator.add:
        setResult(`${num1 + num2}`);
        break;
      case Operator.substract:
        setResult(`${num1 - num2}`);
        break;
      case Operator.multiply:
        setResult(`${num1 * num2}`);
        break;
      case Operator.divide:
        setResult(`${num1 / num2}`);
        break;
    }
  }, [currentNumber]);

  const buildNumber = (numberString: string) => {
    // evaluar no más de 15 caracteres
    if (currentNumber.length >= 15) return;
    // No aceptar doble punto
    if (currentNumber.includes('.') && numberString === '.') return;

    if (currentNumber.startsWith('0') || currentNumber.startsWith('-0')) {
      // Punto decimal
      if (numberString === '.') {
        setCurrentNumber(currentNumber + numberString); //0. o -0.
      } else if (numberString === '0' && currentNumber.includes('.')) {
        setCurrentNumber(currentNumber + numberString); //0.0 o -0.0
      } else if (numberString !== '0' && !currentNumber.includes('.')) {
        setCurrentNumber(numberString); //123 o -123
      } else if (numberString === '0' && !currentNumber.includes('.')) {
        setCurrentNumber(currentNumber); //0 o -0
      } else {
        setCurrentNumber(currentNumber + numberString); //0.00 o -0.00
      } return;
    }
    setCurrentNumber(currentNumber + numberString);
  
  }

  const clear = () => {
    setCurrentNumber('0');
    setLastNumber('');
    setFormula('');
    setResult('0');
    setOperator('');
    lastOperation.current = undefined;
  }

  const operatorPressed = (operator: string) => {
    if (currentNumber.endsWith('.')) {
      setCurrentNumber(currentNumber.slice(0, -1));
    }
    setOperator(operator);
    setLastNumber(currentNumber);
    setCurrentNumber('');
    setFormula(`${currentNumber} ${operator}`);
    lastOperation.current = operator as Operator;
  }

  const changeSign = () => {
    if (currentNumber === '0') return;
    if (currentNumber.includes('-')) {
      setCurrentNumber(currentNumber.replace('-', ''));
    } else {
      setCurrentNumber('-' + currentNumber);
    }
  }

  const resultado = () => {
    if (lastNumber === '' || currentNumber === '') return;
    if (currentNumber.endsWith('.')) {
      setCurrentNumber(currentNumber.slice(0, -1));
    }
    setFormula(`${lastNumber} ${operator} ${currentNumber} =`);
    setCurrentNumber(result);
    setLastNumber('');
    setOperator('');
    setResult('');
    lastOperation.current = undefined;
  }

  return {
    buildNumber,
    currentNumber,
    lastNumber,
    clear,
    operatorPressed,
    operator,
    changeSign,
    result,
    resultado
  }
}
