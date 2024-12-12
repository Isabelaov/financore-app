import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { FormStyles, TextStyles } from '../assets/styles';

type InputProps = TextInputProps & {
  placeholder: string;
  error?: string;
  secureTextEntry?: boolean;
};

export const Input: React.FC<InputProps> = ({
  placeholder,
  error,
  secureTextEntry = false,
  value,
  ...rest
}) => {
  return (
    <View>
      {error && <Text style={TextStyles.error}>{error}</Text>}

      <TextInput
        style={FormStyles.input}
        placeholder={placeholder}
        placeholderTextColor="#6d6d6d"
        secureTextEntry={secureTextEntry}
        value={value}
        {...rest}
      />
    </View>
  );
};
