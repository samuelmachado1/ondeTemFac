import { useEffect, useState } from "react"
import { View, Alert, Text } from "react-native"
import MapView, { Callout, Marker } from "react-native-maps"
import * as Location from "expo-location"
import { router } from "expo-router"

import { api } from "@/services/api"
import { fontFamily, colors } from "@/styles/theme"

import { Projects } from "@/components/projects"
import { ProjectProps } from "@/components/project"
import { Segments, SegmentsProps } from "@/components/segments"

type ProjectsDataProps = ProjectProps & {
  latitude: number
  longitude: number
}

export default function Home() {
  const [segments, setSegments] = useState<SegmentsProps>([])
  const [segment, setSegment] = useState("")
  const [projects, setProjects] = useState<ProjectsDataProps[]>([])
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  const currentLocation = {
    latitude: location ? location?.coords.latitude : -15.7942,
    longitude: location ? location?.coords.longitude : -47.8822,
  }

  async function fetchSegments() {
    try {
      const { data } = await api.get("/segments")
      setSegments(data)
      setSegment(data[0].id)
    } catch (error) {
      console.log(error)
      Alert.alert("Segmentos", "Não foi possível carregar os segmentos culturais.")
    }
  }

  async function fetchProjects() {
    try {
      if (!segment) {
        return
      }

      const { data } = await api.get("/projects/segment/" + segment)
      setProjects(data)
    } catch (error) {
      console.log(error)
      Alert.alert("Projetos", "Não foi possível carregar os projetos.")
    }
  }

  async function getCurrentLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync()

      if (granted) {
        const location = await Location.getCurrentPositionAsync()
        setLocation(location)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSegments()
    getCurrentLocation()
  }, [])

  useEffect(() => {
    fetchProjects()
  }, [segment])

  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Segments
        data={segments}
        onSelect={setSegment}
        selected={segment}
      />

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require("@/assets/location.png")}
        />

        {projects.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={require("@/assets/pin.png")}
          >
            <Callout onPress={() => router.navigate(`/project/${item.id}`)}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.gray[600],
                    fontFamily: fontFamily.medium,
                  }}
                >
                  {item.name}
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    color: colors.gray[600],
                    fontFamily: fontFamily.regular,
                  }}
                >
                  {item.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Projects data={projects} />
    </View>
  )
}
