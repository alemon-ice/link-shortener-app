import styled from 'styled-components/native'

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
