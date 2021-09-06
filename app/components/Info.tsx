import { AntDesign, Feather } from "@expo/vector-icons"
import { Icon } from "@expo/vector-icons/build/createIconSet"
import React, { FC, useEffect, useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const Info: FC<{ celcies: string; text: string; uri: string }> = ({
  celcies,
  text,
  uri,
}) => {
  return text ? (
    <View style={styles.container}>
      {/* <Feather style={styles.image} name={name} color="yellow" size={100} /> */}
      <Image
        source={{
          uri: "https:" + uri,
        }}
        style={styles.image}
      />
      <Text style={styles.info}>{celcies} ℃</Text>
      <Text style={styles.desc}>{text}</Text>
    </View>
  ) : (
    <View style={[styles.container, { backgroundColor: "transparent" }]}>
      <Text style={[styles.info, { paddingVertical: 80 }]}>
        {celcies}Please Search
      </Text>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 200,
    backgroundColor: "tomato",
    borderRadius: 18,
    marginTop: 80,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  info: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  desc: {
    fontSize: 18,
    color: "lightgray",
    textAlign: "center",
    fontStyle: "italic",
  },
})
