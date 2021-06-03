import React from 'react'
import {
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Share,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import Clipboard from 'expo-clipboard'

import { IUrlData } from '../../interfaces/Url'
import { colors } from '../../styles/colors'

import {
  Container,
  Content,
  Header,
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortUrl,
} from './styles'

interface IProps {
  urls: IUrlData
  isVisible: boolean
  onClose(): void
}

const ModalLink: React.FC<IProps> = ({ isVisible, onClose, urls }) => {
  function copyLink() {
    const a = Clipboard.setString(urls.shortUrl)
  }

  async function shareLink() {
    try {
      await Share.share({
        message: `Link: ${urls.shortUrl}`
      })
    } catch (err) {
      console.error(`Erro ao compartilhar Link: ${err}`)
    }
  }

  return (
  <Modal visible={isVisible} animationType="slide" transparent>
    <Container>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }} />
      </TouchableWithoutFeedback>

      <Content>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather
              name="x"
              size={30}
              color={colors.blueDark}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={shareLink}>
            <Feather
              name="share"
              size={30}
              color={colors.blueDark}
            />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>{urls.longUrl}</LongUrl>

          <ShortLinkArea
            activeOpacity={1}
            onPress={copyLink}
          >
            <ShortUrl numberOfLines={1}>{urls.shortUrl}</ShortUrl>
            <TouchableOpacity>
              <Feather
                name="copy"
                size={25}
                color={colors.white}
              />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Content>
    </Container>
  </Modal>
)
}

export default ModalLink