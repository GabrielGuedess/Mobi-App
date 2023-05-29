import { StatusBar } from 'expo-status-bar';

import { Main } from 'components/atoms/Main';

import * as S from './styles';

export const Home = () => (
  <S.Wrapper>
    <StatusBar style="light" translucent />
    <Main />
  </S.Wrapper>
);
