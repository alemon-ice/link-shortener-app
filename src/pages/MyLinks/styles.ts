import { Platform } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
`

export const Title = styled.Text`
  margin-top: ${Platform.OS === 'ios' ? 35+'%' : 20+'%'};
  margin-left: 20px;
  font-size: 33px;
  font-weight: bold;
  color: ${colors.white};
`

export const LinksList = styled.FlatList``

export const EmptyList = styled.View`
  margin-top: 15%;
  align-items: center;
`

export const Message = styled.Text`
  font-size: 17px;
  color: ${colors.white};
  margin-bottom: 15px;
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  background-color: ${colors.white};
  border-radius: 7px;
  padding: 0 15px;
`

export const ButtonText = styled.Text`
  font-size: 18px;
`
