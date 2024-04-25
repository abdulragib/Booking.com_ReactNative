import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const UserScreen = () => {
    const navigation=useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          title: "User Details",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#003580",
            height: 110,
            borderBottomColor: "transparent",
            shadowColor: "transparent",
          },
          headerBackTitle: "Back",
        });
      }, []);
  return (
    <View>
      <Text>UserScreen</Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({})