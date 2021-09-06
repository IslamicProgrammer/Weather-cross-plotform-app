import React, { FC } from "react"
import { StyleSheet, Text, View } from "react-native"

const Location: FC<{ city: string; country: string }> = ({
  country = "Tashkent",
  city = "Uzbekistan",
}) => {
  return (
    <View style={styles.location}>
      <Text style={styles.country}>{city}</Text>
      <Text style={styles.city}>{country}</Text>
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
  location: {
    paddingVertical: 80,
  },
  country: {
    fontSize: 40,
    color: "lightgreen",
    textAlign: "center",
  },
  city: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    color: "white",
  },
})
