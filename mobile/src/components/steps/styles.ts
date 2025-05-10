import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.gray[50],
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[500],
    marginBottom: 16,
  },
  stepsContainer: {
    gap: 24,
  },
});
