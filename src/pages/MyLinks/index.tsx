import React, { useState, useCallback, useEffect } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'

import { getAllUrls } from '../../services/storage.service'
import { IUrlData } from '../../interfaces/Url'
import { StatusBarView, Menu, ListItem, ModalLink } from '../../components'
import { colors } from '../../styles/colors'

import {
  Container,
  Title,
  LinksList,
  EmptyList,
  Message,
  Button,
  ButtonText,
} from './styles'

const MyLinks: React.FC = () => {
  const isFocused = useIsFocused()
  const { goBack } = useNavigation()

  const [urlsList, setUrlsList] = useState<IUrlData[]>([])
  const [selectedItem, setSelectedItem] = useState<IUrlData | null>(null)

  const onChangeItem = useCallback((item: IUrlData) => {
    setSelectedItem(item)
  }, [])

  const onCloseModal = useCallback(() => {
    setSelectedItem(null)
  }, [])

  const changeList = useCallback((urls: IUrlData[]) => {
    setUrlsList(urls)
  }, [])

  useEffect(() => {
    (async () => {
      setUrlsList(await getAllUrls())
    })()
  }, [isFocused])

  return (
    <Container>
      <StatusBarView
        barStyle="light-content"
        backgroundColor={colors.secondary}
      />

      <Menu />

      <Title>Meus Links</Title>

      {
        urlsList.length > 0 ? (
          <LinksList
            data={urlsList}
            keyExtractor={(item: any) => item.longUrl}
            renderItem={({ item }) => (
              <ListItem
                data={item as IUrlData}
                onPress={onChangeItem}
                setList={changeList}
              />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <EmptyList>
            <Message>Você não possui nenhum link!</Message>
            <Button onPress={goBack}>
              <ButtonText>Gerar novo Link</ButtonText>
            </Button>
          </EmptyList>
        )
      }

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