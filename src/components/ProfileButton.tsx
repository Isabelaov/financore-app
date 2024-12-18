import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { CustomIcon } from './Icon';

export const ProfileButton: React.FC<TouchableOpacityProps> = ({
  disabled = false,
  ...rest
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => console.log('hello')}
      {...rest}>
      <CustomIcon family="EvilIcons" name="user" size={45} />
    </TouchableOpacity>
  );
};
