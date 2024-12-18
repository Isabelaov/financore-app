import React from 'react';
import { ActivityIndicator } from 'react-native';
import { baseColors } from '../assets/colors/baseColors';

type LoadingProps = {
  color?: string;
  size?: 'large' | 'small';
};

export const Loading: React.FC<LoadingProps> = ({
  color = baseColors.primary,
  size = 'large',
}) => {
  return <ActivityIndicator size={size} color={color} />;
};
