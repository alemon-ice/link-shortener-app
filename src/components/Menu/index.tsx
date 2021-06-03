import React from 'react'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { colors } from '../../styles/colors'

import { Button } from './styles'

const Menu: React.FC = () => {
  const { dispatch } = useNavigation()
  
  function openDrawer() {
    dispatch(DrawerActions.openDrawer())
  }

  return (
    <Button onPress={openDrawer}>
      <Feather name="menu" size={30} color={colors.white} />
    </Button>
  )
}

export default Menu