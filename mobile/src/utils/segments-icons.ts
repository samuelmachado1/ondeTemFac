import {
  IconMovie,
  IconProps,
  IconBooks,
  IconMusic,
  IconMasksTheater,
  IconPalette,
  IconSchool,
  IconBallpen,
} from "@tabler/icons-react-native";

export const segmentsIcons: Record<string, React.ComponentType<IconProps>> = {
  "146b1a88-b3d3-4232-8b8f-c1f006f1e86d": IconMusic, // Música
  "52e81585-f71a-44cd-8bd0-49771e45da44": IconMasksTheater, // Teatro
  "57d6e5ff-35f6-4d21-a521-84f23d511d25": IconBallpen, // Dança
  "826910d4-187d-4c15-88f4-382b7e056739": IconMovie, // Cinema
  "abce52cf-b33b-4b3c-8972-eb72c66c83e4": IconPalette, // Artes Visuais
  "9bc52cf-c33b-5b4c-9973-fc82d77d94f5": IconBooks, // Literatura
  "7cd63df-d44c-6c5d-1184-gd93e88e15g6": IconSchool, // Formação Cultural
};
