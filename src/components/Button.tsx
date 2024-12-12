import React from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import { baseColors } from '../assets/colors/baseColors';
import { TextStyles, ButtonStyles } from '../assets/styles';

type ButtonProps = TouchableOpacityProps & {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
  backgroundPrimary?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  isLoading = false,
  disabled = false,
  backgroundPrimary = true,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={
        backgroundPrimary
          ? ButtonStyles.primaryButton
          : ButtonStyles.secondaryButton
      }
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
