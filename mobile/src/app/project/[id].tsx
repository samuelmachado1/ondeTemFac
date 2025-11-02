import { useEffect, useState } from "react"
import { View, Alert, StatusBar, ScrollView } from "react-native"
import { router, useLocalSearchParams, Redirect } from "expo-router"

import { Loading } from "@/components/loading"
import { Cover } from "@/components/project-details/cover"
import { Details, PropsDetails } from "@/components/project-details/details"

import { api } from "@/services/api"

type DataProps = PropsDetails & {
  cover: string
}

export default function Project() {
  const [data, setData] = useState<DataProps>()
  const [isLoading, setIsLoading] = useState(true)

  const params = useLocalSearchParams<{ id: string }>()

  console.log(params.id)

  async function fetchProject() {
    try {
      const { data } = await api.get(`/projects/${params.id}`)
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível carregar os dados", [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ])
    }
  }

  useEffect(() => {
    fetchProject()
  }, [params.id])

  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return <Redirect href="/home" />
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={data.cover} />
        <Details data={data} />
      </ScrollView>
    </View>
  )
}
