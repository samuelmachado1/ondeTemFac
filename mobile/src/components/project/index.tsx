import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Image,
} from "react-native"
import { IconMapPin } from "@tabler/icons-react-native"

import { s } from "./styles"
import { colors } from "@/styles/theme"

export type ProjectProps = {
  id: string
  name: string
  description: string
  cover: string
  address: string
}

type Props = TouchableOpacityProps & {
  data: ProjectProps
}

export function Project({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={s.container} {...rest}>
      <Image style={s.image} source={{ uri: data.cover }} />

      <View style={s.content}>
        <Text style={s.name}>{data.name}</Text>
        <Text style={s.description} numberOfLines={2}>
          {data.description}
        </Text>

        <View style={s.footer}>
          <IconMapPin size={16} color={colors.blue.base} />
          <Text style={s.tickets}>{data.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
