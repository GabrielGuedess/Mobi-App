import { useTheme } from 'styled-components/native';

import { Check } from 'phosphor-react-native';

import * as S from './styles';
import { type CheckboxProps } from './types';

export const Checkbox = ({ checked = false, ...props }: CheckboxProps) => {
  const { colors } = useTheme();

  return (
    <S.Wrapper activeOpacity={0.7} {...props}>
      {checked && <Check size={20} color={colors.white} />}
    </S.Wrapper>
  );
};
