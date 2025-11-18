import { FlatList } from "react-native"

import { s } from "./styles"
import { Segment } from "../segment"

export type SegmentsProps = {
  id: string
  name: string
}[]

type Props = {
  data: SegmentsProps
  selected: string
  onSelect: (id: string) => void
}

export function Segments({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Segment
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={s.content}
      style={s.container}
    />
  )
}
