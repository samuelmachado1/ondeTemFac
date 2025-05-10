import { View, ImageBackground, ScrollView, Image, StyleSheet, Dimensions } from "react-native"
import { router } from "expo-router"

import { Steps } from "@/components/steps"
import { Button } from "@/components/button"
import { Welcome } from "@/components/welcome"
import { colors } from "@/styles/theme"

const { width } = Dimensions.get('window')

export default function Index() {
  // Imagens ilustrativas da pasta assets
  // Substitua por imagens apropriadas para a galeria
  const images = [
    require("@/assets/ilustraEvento.png"),   // Exemplo, substitua se necessário
    require("@/assets/lambe.jpeg"), // Exemplo usando uma imagem do contexto
    require("@/assets/cinema.png"), // Exemplo, substitua se necessário
  ]

  return (
    <ImageBackground
      source={require("@/assets/background.png")} // Mantenha ou substitua por uma imagem de fundo adequada
      style={styles.backgroundImage}
    >
      {/* Overlay semitransparente em vez de gradiente */}
      <View style={styles.overlay}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Welcome />

          {/* Galeria de imagens ilustrativas */}
          <View style={styles.galleryContainer}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={image}
                style={styles.galleryImage}
                resizeMode="cover"
              />
            ))}
          </View>

          <Steps />

          <Button onPress={() => router.navigate("/home")} style={styles.button}>
            <Button.Title>Vamos lá!</Button.Title>
          </Button>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.65)', // Overlay branco semitransparente
  },
  scrollContent: {
    flexGrow: 1,
    padding: 40,
    gap: 30,
  },
  galleryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  galleryImage: {
    width: (width - 100) / 3,
    height: 120,
    borderRadius: 10,
    backgroundColor: colors.gray[200], // Cor de fallback caso a imagem não carregue
  },
  button: {
    marginTop: 10,
  }
})
