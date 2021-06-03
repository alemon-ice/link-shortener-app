import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Home, MyLinks } from './pages'
import { colors } from './styles/colors'

const Drawer = createDrawerNavigator()

const Routes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeBackgroundColor: colors.primary,
        activeTintColor: colors.white,
        labelStyle: {
          fontSize: 19,
        },
        style: {
          marginTop: 16,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Encurtar Link',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'cube' : 'cube-outline'}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name="MyLinks"
        component={MyLinks}
        options={{
          title: 'Meus Links',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              color={color}
              size={size}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default Routes