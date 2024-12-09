import React from 'react';
import {TouchableOpacityProps, TouchableOpacity} from 'react-native';
import {FormStyles} from '../assets/styles/Form.styles';

type ButtonProps = TouchableOpacityProps & {
  buttonText: any;
};

export const Button: React.FC<ButtonProps> = ({buttonText, ...rest}) => {
  return (
    <TouchableOpacity style={FormStyles.button} {...rest}>
      {buttonText}
    </TouchableOpacity>
  );
};
