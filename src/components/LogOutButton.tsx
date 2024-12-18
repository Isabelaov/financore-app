import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { CustomIcon } from './Icon';
import { Loading } from './Loading';
import { useAuth } from '../hooks';

export const LogoutButton: React.FC<TouchableOpacityProps> = ({
  disabled = false,
  ...rest
}) => {
  const { logout, loading } = useAuth();

  return (
    <TouchableOpacity disabled={disabled || loading} onPress={logout} {...rest}>
      {loading ? (
        <Loading />
      ) : (
        <CustomIcon family="MaterialIcons" name="logout" size={30} />
      )}
    </TouchableOpacity>
  );
};
