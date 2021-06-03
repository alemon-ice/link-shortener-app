import React, { useState, useCallback } from 'react'
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'

import { generateShortURL } from '../../services/bitly.service'
import { addNewURL } from '../../services/storage.service'
import { IUrlData } from '../../interfaces/Url'
import { StatusBarView, Menu, ModalLink } from '../../components'
import { colors } from '../../styles/colors'

import {
  LogoWrapper,
  Logo,
  ContentWrapper,
  Title,
  Subtitle,
  InputWrapper,
  BoxIcon,
  Input,
  Button,
  ButtonText,
  LoadingText,
} from './styles'

const emptyUrl = {
  longUrl: '',
  shortUrl: '',
}

const Home: React.FC = () => {
  const [url, setUrl] = useState<IUrlData>(emptyUrl)
  const [isLoading, setIsLoading] = useState(false)
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const onCloseModal = useCallback(() => {
    setUrl(emptyUrl)
    setModalIsVisible(false)
  }, [])

  async function handleShortLink() {
    try {
      setIsLoading(true)

      const responseData = await generateShortURL(url.longUrl)
      const payload = {
        ...url,
        shortUrl: responseData.link,
      }
      setUrl(payload)
      await addNewURL(payload)

      setModalIsVisible(true)
    } catch (err) {
      console.error(`Erro ao gerar link encurtado: ${err}`)
      alert('Ops... parece que algo deu errado...')
      
      setUrl(emptyUrl)
      Keyboard.dismiss()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <StatusBarView
          barStyle="light-content"
          backgroundColor={colors.primary}
        />

        <Menu />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >
          <LogoWrapper>
            <Logo
              source={require('../../assets/Logo.png')}
              resizeMode="contain"
            />
          </LogoWrapper>

          <ContentWrapper>
            <Title>SujeitoLink</Title>
            <Subtitle>Cole seu link para encurtar</Subtitle>

            <InputWrapper>
              <BoxIcon>
                <Feather name="link" size={20} color={colors.white} />
              </BoxIcon>
              <Input
                placeholder="Cole seu link aqui..."
                placeholderTextColor={colors.white}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                onChangeText={value => setUrl({ ...url, longUrl: value })}
                value={url.longUrl}
              />
            </InputWrapper>

            {
              isLoading ? (
                <LoadingText>gerando link...</LoadingText>
              ) : (
                <Button onPress={handleShortLink}>
                  <ButtonText>Gerar Link</ButtonText>
                </Button>
              )
            }
          </ContentWrapper>
        </KeyboardAvoidingView>

        <ModalLink
          isVisible={modalIsVisible}
          onClose={onCloseModal}
          urls={url}
        />
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default Home