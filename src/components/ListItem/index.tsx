import React, { useState, useCallback } from 'react'
import { Feather } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { removeURL } from '../../services/storage.service'
import { IUrlData } from '../../interfaces/Url'
import { colors } from '../../styles/colors'

import { Container, LinkContent, Item, ButtonDelete } from './styles'

interface IProps {
  data: IUrlData,
  onPress(data: IUrlData): void
  setList(urls: IUrlData[]): void
}

const ListItem: React.FC<IProps> = ({ data, onPress, setList }) => {
  const [isLoading, setIsLoading] = useState(false)

  const removeItem = useCallback(async () => {
    try {
      setIsLoading(true)

      const newList = await removeURL(data.longUrl)
      setList(newList)
    } catch (err) {
      console.error(`Erro ao excluir link encurtado: ${err}`)
      alert('Ops... parece que algo deu errado...')
    } finally {
      setIsLoading(false)
    }
  }, [])

  function handleMove() {
    return (
      <ButtonDelete
        onPress={removeItem}
        disabled={isLoading}
        isLoading={isLoading}
      >
        {
          isLoading ? (
            <Feather name="loader" color={colors.white} size={24} />
          ) : (
            <Feather name="trash" color={colors.white} size={24} />
        )}
      </ButtonDelete>
    )
  }

  return (
    <Container>
      <Swipeable renderRightActions={handleMove}>
        <LinkContent activeOpacity={0.9} onPress={() => onPress(data)}>
          <Feather
            name="link"
            color={colors.white}
            size={24}
          />
          <Item>{data.longUrl}</Item>
        </LinkContent>
      </Swipeable>
    </Container>
  )
}

export default ListItem