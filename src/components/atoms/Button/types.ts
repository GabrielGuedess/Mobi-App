import { type RectButtonProps } from 'react-native-gesture-handler';

export type ButtonProps = {
  title: string;
  timer?: string;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  isLoading?: boolean;
} & RectButtonProps;
