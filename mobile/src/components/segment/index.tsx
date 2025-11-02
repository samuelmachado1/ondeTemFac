import { Text, Pressable, PressableProps } from "react-native"

import { s } from "./styles"
import { colors } from "@/styles/theme"
import { segmentsIcons } from "@/utils/segments-icons"

type Props = PressableProps & {
  name: string
  iconId: string
  isSelected?: boolean
}

export function Segment({ name, iconId, isSelected = false, ...rest }: Props) {
  const Icon = segmentsIcons[iconId]

  return (
    <Pressable
      style={[s.container, isSelected && s.containerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
    </Pressable>
  )
}
