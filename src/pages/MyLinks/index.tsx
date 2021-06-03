import React, { useState, useCallback } from 'react'

import { IUrlData } from '../../interfaces/Url'
import { StatusBarView, Menu, ListItem, ModalLink } from '../../components'
import { colors } from '../../styles/colors'

import { Container, Title, LinksList } from './styles'

interface ILink {
  id: string
  longUrl: string
  shortUrl: string
}

const data: ILink[] = [
  {
    id: '1',
    longUrl: 'https://www.google.com.br',
    shortUrl: 'google.com',
  },
  {
    id: '2',
    longUrl: 'https://alemon-ice.github.io',
    shortUrl: 'bit.ly/alemon-ice',
  }
]

const MyLinks: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<IUrlData | null>(null)

  const onChangeItem = useCallback((item: IUrlData) => {
    setSelectedItem(item)
  }, [])

  const onCloseModal = useCallback(() => {
    setSelectedItem(null)
  }, [])

  return (
    <Container>
      <StatusBarView
        barStyle="light-content"
        backgroundColor={colors.secondary}
      />

      <Menu />

      <Title>Meus Links</Title>

      <LinksList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <ListItem data={item as ILink} onPress={onChangeItem} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      {
        !!selectedItem && (
          <ModalLink
          isVisible={!!selectedItem}
          onClose={onCloseModal}
          urls={selectedItem}
        />
          )
        }
    </Container>
  )
}

export default MyLinks