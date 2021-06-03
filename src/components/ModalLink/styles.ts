import styled from 'styled-components/native'

import { colors } from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  background-color: ${colors.white};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 0 15px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
`

export const LinkArea = styled.View`
  flex: 1;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 33px;
  font-weight: bold;
  color: ${colors.ciano};
`

export const LongUrl = styled.Text`
  font-size: 17px;
  color: ${colors.grey};
  margin-bottom: 30px;
`

export const ShortLinkArea = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background-color: ${colors.blueDark};
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

export const ShortUrl = styled.Text`
  width: 90%;
  color: ${colors.white};
  font-size: 16px;
`
