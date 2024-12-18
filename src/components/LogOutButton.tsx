import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { CustomIcon } from './Icon';

type IconButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
  disabled?: boolean;
};

export const LogoutButton: React.FC<IconButtonProps> = ({
  isLoading = false,
  disabled = false,
  ...rest
}) => {
  return (
    <>
      <TouchableOpacity disabled={disabled || isLoading} {...rest}>
        <CustomIcon family="MaterialIcons" name="logout" />
      </TouchableOpacity>
    </>
  );
};
