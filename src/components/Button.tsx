import React from 'react';
import { TouchableOpacityProps, TouchableOpacity, Text } from 'react-native';
import { TextStyles, ButtonStyles } from '../assets/styles';
import { Loading } from './Loading';

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
        <Loading />
      ) : (
        <Text style={TextStyles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
