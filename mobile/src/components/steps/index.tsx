import { View, Text } from "react-native"
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native"

import { s } from "./styles"
import { Step } from "../step"

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>

      <Step
        icon={IconMapPin}
        title="Encontre projetos do FAC"
        description="Veja locais perto de você estão executando projetos culturaiscom recursos do FAC"
      />

      <Step
        icon={IconQrcode}
        title="Saiba todos os detalhes"
        description="Quanto custou? Precisa de ingresso? Quais são as atrações? e muito mais"
      />

      <Step
        icon={IconTicket}
        title="Descubra o que acontece perto de você"
        description="Maior transparencia e visibilidade para os projetos culturais do DF"
      />
    </View>
  )
}
