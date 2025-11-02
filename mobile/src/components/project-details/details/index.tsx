import { View, Text } from "react-native"
import { IconMapPin, IconCalendar, IconUser } from "@tabler/icons-react-native"

import { Info } from "@/components/project-details/info"
import { s } from "./styles"

export type PropsDetails = {
  name: string
  proposer: string
  description: string
  address: string
  startDate: string
  endDate: string
  segment: {
    name: string
  }
}

type Props = {
  data: PropsDetails
}

export function Details({ data }: Props) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  return (
    <View style={s.container}>
      <Text style={s.name}>{data.name}</Text>
      <Text style={s.description}>{data.description}</Text>

      <View style={s.group}>
        <Text style={s.title}>Informações</Text>

        <Info icon={IconUser} description={`Proponente: ${data.proposer}`} />
        <Info icon={IconMapPin} description={data.address} />
        <Info
          icon={IconCalendar}
          description={`${formatDate(data.startDate)} - ${formatDate(data.endDate)}`}
        />
      </View>
    </View>
  )
}
