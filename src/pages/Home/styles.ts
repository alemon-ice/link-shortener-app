import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { colors } from '../../styles/colors'

export const LogoWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'ios' ? 35+'px' : 15+'px'};
`

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`

export const ContentWrapper = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 25+'%' : 15+'%'};
`

export const Title = styled.Text`
  font-size: 35px;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
`

export const Subtitle = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  text-align: center;
  padding-bottom: 10%;
`

export const InputWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-radius: 7px;
  margin: 15px 0;
  padding: 0 15px;
`

export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  width: 11%;
  height: 50px;
  background-color: ${colors.whiteOpacity};
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`

export const Input = styled.TextInput`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  padding: 10px;
  background-color: ${colors.whiteOpacity};
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  color: ${colors.white};
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  background-color: ${colors.white};
  margin: 0 15px;
  border-radius: 7px;
`

export const ButtonText = styled.Text`
  font-size: 18px;
`

export const LoadingText = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  text-align: center;
`
