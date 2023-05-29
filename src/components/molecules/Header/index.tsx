import { useTheme } from 'styled-components/native';

import { DrawerActions, useNavigation } from '@react-navigation/native';
import { ChatText, List } from 'phosphor-react-native';

import * as S from './styles';

export const Header = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <S.Wrapper>
      <S.WrapperIcon
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <List size={24} color={colors.white} />
      </S.WrapperIcon>

      <S.Title>mobi</S.Title>

      <S.WrapperIcon>
        <ChatText size={24} color={colors.white} weight="fill" />
      </S.WrapperIcon>
    </S.Wrapper>
  );
};
