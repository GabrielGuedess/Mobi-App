import { type TextInputProps } from 'react-native';

export type InputProps = {
  icon?: React.ReactNode;
  isPassword?: boolean;
  isInvalid?: boolean;
  messageError?: string;
} & TextInputProps;
