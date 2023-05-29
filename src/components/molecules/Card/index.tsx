import { useTheme } from 'styled-components/native';

import { Lock } from 'phosphor-react-native';

import * as S from './styles';

export const Card = () => {
  const { colors } = useTheme();

  return (
    <S.Wrapper>
      <S.WrapperViews>
        <Lock color={colors.yellow} size={32} weight="fill" />
        <S.TextViews>views: 22</S.TextViews>
      </S.WrapperViews>

      <S.WrapperTitle>
        <S.Title>Item Menu 01</S.Title>
      </S.WrapperTitle>
    </S.Wrapper>
  );
};
