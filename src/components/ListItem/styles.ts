import styled from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'

import { colors } from '../../styles/colors'

export const Container = styled.View``

export const LinkContent = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.whiteOpacity};
  margin: 7px 10px;
  padding: 12px;
  border-radius: 7px;
`

export const Item = styled.Text`
  color: ${colors.white};
  padding: 0 20px 0 10px;
  font-size: 18px;
`

interface IButtonDeleteProps extends TouchableOpacityProps {
  isLoading: boolean
}

export const ButtonDelete = styled.TouchableOpacity<IButtonDeleteProps>`
  width: 15%;
  background-color: ${props => props.isLoading ? colors.redOpacity : colors.red};
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  margin: 7px 10px 7px 0;
`
