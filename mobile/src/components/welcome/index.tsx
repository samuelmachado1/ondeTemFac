import { Image, Text, View } from "react-native"

import { s } from "./styles"

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={s.logo} />

      <Text style={s.title}>Onde tem Fac?</Text>

      <Text style={s.subtitle}>
        Encontre uma atividade cultural {"\n"}
        próximo a você.
      </Text>
    </View>
  )
}
