import React from 'react'
import { Feather } from '@expo/vector-icons'

import { IUrlData } from '../../interfaces/Url'
import { colors } from '../../styles/colors'

import { Container, LinkContent, Item } from './styles'

interface IProps {
  data: IUrlData,
  onPress(data: IUrlData): void
}

const ListItem: React.FC<IProps> = ({ data, onPress }) => {
  return (
    <Container>
      <LinkContent activeOpacity={0.9} onPress={() => onPress(data)}>
        <Feather
          name="link"
          color={colors.white}
          size={24}
        />
        <Item>{data.shortUrl}</Item>
      </LinkContent>
    </Container>
  )
}

export default ListItem