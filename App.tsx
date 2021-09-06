import { AntDesign } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native"
import Info from "./app/components/Info"
import Location from "./app/components/Location"
import bac1 from "./assets/bac1.webp"
import bac2 from "./assets/bac2.webp"
import { client } from "./app/service/client"

export default function App() {
  const [value, setValue] = useState("")
  const [isDay, setIsDay] = useState(1)
  const [location, setLocation] = useState({
    city: "",
    country: "",
  })
  const [info, setInfo] = useState({
    celcies: "",
    text: "",
    uri: "",
  })

  const loadData = async () => {
    try {
      const { data } = await client.get("/", {
        params: {
          q: "Tashkent",
        },
      })
      setIsDay(data.current.is_day)
      setLocation({
        city: data?.location?.name,
        country: data?.location?.country,
      })
      setInfo({
        celcies: data?.current?.feelslike_c,
        text: data?.current?.condition?.text,
        uri: data?.current?.condition?.icon,
      })
    } catch (err: any) {
      alert("Invalid Country or Ciry")
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const onSubmit = async () => {
    if (value) {
      try {
        const { data } = await client.get("/", {
          params: {
            q: value,
          },
        })
        console.log("result", data)
        setIsDay(data.current.is_day)
        setLocation({
          city: data?.location?.name,
          country: data?.location?.country,
        })
        setInfo({
          celcies: data?.current?.feelslike_c,
          text: data?.current?.condition?.text,
          uri: data?.current?.condition?.icon,
        })
      } catch (err: any) {
        alert(err.message)
      }
    } else {
      alert("Pleases Fill input ")
    }
  }

  return (
    <ImageBackground source={isDay ? bac1 : bac2} style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#fcfcfc"
          value={value}
          placeholder="Location"
          onChangeText={text => setValue(text)}
        />
        <TouchableHighlight
          style={styles.inputSearch}
          onPress={onSubmit}
          activeOpacity={0.8}
        >
          <AntDesign name="search1" size={22} color="white" />
        </TouchableHighlight>
      </View>
      <Info uri={info.uri} celcies={info.celcies} text={info.text} />
      <Location city={location.city} country={location.country} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    alignItems: "center",
    paddingTop: 50,
  },
  inputBox: {
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#FE4851",
    width: "90%",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 18,
    marginTop: 30,
  },
  inputSearch: {
    position: "absolute",
    right: 30,
    bottom: 8,
  },
})
