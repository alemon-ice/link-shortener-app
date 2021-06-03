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

