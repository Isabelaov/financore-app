import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { FormStyles } from '../assets/styles/Form.styles';
import { TextStyles } from '../assets/styles/Text.styles';

type InputProps = TextInputProps & {
  placeholder: string;
  error?: string;
  onBlur?: (field: string) => void;
};

export const Input: React.FC<InputProps> = ({
  placeholder,
  error,
  onBlur,
  ...rest
}) => {
  return (
    <View>
      <TextInput
        style={FormStyles.input}
        placeholder={placeholder}
        placeholderTextColor="#6d6d6d"
        onBlur={() => onBlur && onBlur(placeholder)}
        {...rest}
      />
      {error && <Text style={TextStyles.error}>{error}</Text>}
    </View>
  );
};
