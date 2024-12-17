import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { baseColors } from '../assets/colors/baseColors';
import { TextStyles } from '../assets/styles';

type AnchorProps = TouchableOpacityProps & {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
};

export const Anchor: React.FC<AnchorProps> = ({
  text,
  isLoading = false,
  disabled = false,
  ...props
}) => {
  return (
    <TouchableOpacity disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <ActivityIndicator color={baseColors.primary} />
      ) : (
        <Text style={TextStyles.anchorText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
