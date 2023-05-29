import Lottie from 'lottie-react-native';

import loadingCar from 'assets/lottie/car-loading.json';

import * as S from './styles';

export const Loading = () => (
  <S.Wrapper>
    <Lottie style={{ height: 200 }} source={loadingCar} autoPlay loop />
  </S.Wrapper>
);
