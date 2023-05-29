import { ScrollView } from 'react-native';

import { Card } from 'components/molecules/Card';
import { Header } from 'components/molecules/Header';

import * as S from './styles';

export const Home = () => (
  <S.Wrapper>
    <Header />

    <ScrollView showsVerticalScrollIndicator={false}>
      <S.WrapperCards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.WrapperCards>
    </ScrollView>
  </S.Wrapper>
);
