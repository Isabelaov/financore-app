import React from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import { FormStyles } from '../assets/styles/Form.styles';
import { baseColors } from '../assets/colors/baseColors';
import { TextStyles } from '../assets/styles/Text.styles';

type ButtonProps = TouchableOpacityProps & {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  isLoading = false,
  disabled = false,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={FormStyles.button}
      disabled={disabled || isLoading}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator color={baseColors.primary} />
      ) : (
        <Text style={TextStyles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
