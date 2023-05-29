import { type DrawerContentComponentProps } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { PencilSimple, SignOut } from 'phosphor-react-native';

import { useAuth } from 'hooks/useAuth';

import DefaultPhoto from 'assets/png/userPhotoDefault.png';

import * as S from './styles';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { user, signOut } = useAuth();

  return (
    <S.Wrapper>
      <S.WrapperUserInfo>
        <S.WrapperPhoto activeOpacity={0.7}>
          <S.Photo source={DefaultPhoto} />

          <S.EditButton>
            <PencilSimple size={16} weight="fill" />
          </S.EditButton>
        </S.WrapperPhoto>

        <S.UserInfo>
          <S.Name>Nome do Usuário</S.Name>
          <S.Email>{user.email}</S.Email>
        </S.UserInfo>
      </S.WrapperUserInfo>

      <DrawerContentScrollView
        contentContainerStyle={{ paddingTop: 10 }}
        style={{ backgroundColor: '#f9f9f9' }}
        {...props}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <S.WrapperLogout
        activeOpacity={0.7}
        style={{ borderTopWidth: 1, borderTopColor: '#717277' }}
        onPress={signOut}
      >
        <SignOut />
        <S.LogoutText>Sair</S.LogoutText>
      </S.WrapperLogout>
    </S.Wrapper>
  );
};
