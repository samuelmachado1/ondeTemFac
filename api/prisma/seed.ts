import { prisma } from "@/database/prisma";
import {
  casaPauloFreireImage,
  cineBrasiliaImage,
  cineClubeImage,
  cineExpressaoImage,
  fridaLabImage,
  pequenoWilliamImage,
  reggaeNaPracaImage,
  institutoMetamorfoseImage,
  festivalBluesImage,
  festivalCOMAImage,
  sarauVAImage,
} from "@/utils/urlOfImages";

async function seed() {
  await prisma.segment.createMany({
    data: [
      { id: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d", name: "Música" },
      { id: "52e81585-f71a-44cd-8bd0-49771e45da44", name: "Teatro" },
      { id: "57d6e5ff-35f6-4d21-a521-84f23d511d25", name: "Dança" },
      { id: "826910d4-187d-4c15-88f4-382b7e056739", name: "Cinema" },
      { id: "abce52cf-b33b-4b3c-8972-eb72c66c83e4", name: "Artes Visuais" },
      { id: "9bc52cf-c33b-5b4c-9973-fc82d77d94f5", name: "Literatura" },
      { id: "7cd63df-d44c-6c5d-1184-gd93e88e15g6", name: "Formação Cultural" },
    ],
  });

  await prisma.project.createMany({
    data: [
      // MÚSICA
      {
        id: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        segmentId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Festival de Blues de São Sebastião",
        proposer: "Associação Cultural Blues do Cerrado",
        description:
          "Festival anual de blues que reúne artistas locais e nacionais para celebrar o gênero. O evento promove oficinas, jam sessions e shows, fortalecendo a cena musical da região.",
        shortDescription: "Festival de blues com artistas locais e nacionais",
        latitude: -15.9055184,
        longitude: -47.7616695,
        address: "Praça do Reggae - Vila Nova - São Sebastião/DF",
        startDate: new Date("2025-06-15"),
        endDate: new Date("2025-06-17"),
        cover: festivalBluesImage,
      },
      {
        id: "012576ea-4441-4b8a-89e5-d5f32104c7c9",
        segmentId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Reggae na Praça",
        proposer: "Coletivo Raízes do Reggae",
        description:
          "Evento mensal que leva música reggae para praças públicas, promovendo cultura de paz, conscientização e integração comunitária através da música.",
        shortDescription: "Festival mensal de Reggae em praça pública",
        latitude: -15.9055186,
        longitude: -47.7616695,
        address: "Praça do Reggae - Vila Nova - São Sebastião/DF",
        startDate: new Date("2025-05-10"),
        endDate: new Date("2025-05-10"),
        cover: reggaeNaPracaImage,
      },
      {
        id: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        segmentId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Festival COMA - Comunhão das Artes",
        proposer: "Produtora Cultural COMA",
        description:
          "Celebração da música, cultura e criatividade brasileira, que busca unir pessoas, culturas e ideias em uma comunhão inspiradora. O festival conta com múltiplos palcos e diversas expressões artísticas.",
        shortDescription: "Festival de música e cultura brasileira no CCBB",
        latitude: -15.813447188556285,
        longitude: -47.838287975555076,
        address: "CCBB - Eixo Monumental - Brasília/DF",
        startDate: new Date("2025-09-01"),
        endDate: new Date("2025-09-03"),
        cover: festivalCOMAImage,
      },
      {
        id: "4209c72f-9d14-410c-91af-c24d08f177cc",
        segmentId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Sarau VA - Vozes da Ceilândia",
        proposer: "Movimento Cultural VA",
        description:
          "Sarau periódico que promove a cultura da palavra falada, música e poesia na Ceilândia, valorizando artistas locais e democratizando o acesso à cultura.",
        shortDescription: "Sarau de música e poesia na Ceilândia",
        latitude: -15.805565851480075,
        longitude: -48.13548964856591,
        address: "QNP 19 - Ceilândia/DF",
        startDate: new Date("2025-04-20"),
        endDate: new Date("2025-04-20"),
        cover: sarauVAImage,
      },

      // FORMAÇÃO CULTURAL
      {
        id: "7be85f5b-533f-4974-8c9e-75cae740041c",
        segmentId: "7cd63df-d44c-6c5d-1184-gd93e88e15g6",
        name: "Frida Lab - Residência Artística",
        proposer: "Frida Lab Cultura e Arte",
        description:
          "Casa de cultura que oferece residência artística, oficinas de artes visuais, música e literatura. Espaço de formação, experimentação e trocas culturais.",
        shortDescription: "Casa de Cultura e Residência Artística",
        latitude: -15.9077586,
        longitude: -47.7638068,
        address: "Rua 10 Lote 15 - São José - São Sebastião/DF",
        startDate: new Date("2025-03-01"),
        endDate: new Date("2025-12-31"),
        cover: fridaLabImage,
      },
      {
        id: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        segmentId: "7cd63df-d44c-6c5d-1184-gd93e88e15g6",
        name: "Casa Paulo Freire - Alfabetização e Cultura",
        proposer: "Instituto Paulo Freire DF",
        description:
          "Inspirada na filosofia do educador Paulo Freire, oferece alfabetização de jovens e adultos, oficinas culturais e formação em educação popular. Um espaço de transformação social através da educação e da cultura.",
        shortDescription: "Alfabetização de jovens e adultos",
        latitude: -15.904827,
        longitude: -47.78138,
        address: "Quadra 201 Casa 07 - Residencial Oeste - São Sebastião/DF",
        startDate: new Date("2025-02-01"),
        endDate: new Date("2025-12-20"),
        cover: casaPauloFreireImage,
      },
      {
        id: "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        segmentId: "7cd63df-d44c-6c5d-1184-gd93e88e15g6",
        name: "Comuna Panteras Negras - MST",
        proposer: "Movimento dos Trabalhadores Rurais Sem Terra",
        description:
          "Projeto de formação política e cultural desenvolvido no Assentamento Pequeno William. Oferece oficinas de agroecologia, arte, música e teatro, fortalecendo a identidade e organização popular.",
        shortDescription: "Formações culturais no MST",
        latitude: -15.6903448,
        longitude: -47.7468545,
        address: "Assentamento Pequeno William - Planaltina/DF",
        startDate: new Date("2025-04-01"),
        endDate: new Date("2025-11-30"),
        cover: pequenoWilliamImage,
      },
      {
        id: "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        segmentId: "7cd63df-d44c-6c5d-1184-gd93e88e15g6",
        name: "Instituto Metamorfose - Arte e Muralismo",
        proposer: "Instituto Metamorfose",
        description:
          "Oficinas de artes plásticas, muralismo e grafite. Espaço de formação artística que transforma a paisagem urbana e promove inclusão social através da arte.",
        shortDescription: "Oficinas de artes plásticas e muralismo",
        latitude: -15.897683383705846,
        longitude: -47.77353724263203,
        address: "Rua 30A - Setor Tradicional - São Sebastião/DF",
        startDate: new Date("2025-03-15"),
        endDate: new Date("2025-10-15"),
        cover: institutoMetamorfoseImage,
      },

      // CINEMA
      {
        id: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        segmentId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "CineClube Olaria",
        proposer: "MTST São Sebastião",
        description:
          "Cineclube comunitário que promove exibições gratuitas de filmes nacionais e debates sobre cinema, cultura e sociedade. Democratiza o acesso à sétima arte nas periferias.",
        shortDescription: "Cineclube do MTST São Sebastião",
        latitude: -15.9226512,
        longitude: -47.7727767,
        address: "Núcleo Rural Morro da Cruz - São Sebastião/DF",
        startDate: new Date("2025-05-05"),
        endDate: new Date("2025-12-15"),
        cover: cineClubeImage,
      },
      {
        id: "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        segmentId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "Festival Cine de Expressão",
        proposer: "Coletivo Cine Ceilândia",
        description:
          "Festival de cinema que celebra a produção audiovisual da Ceilândia e das periferias do DF. Inclui mostras competitivas, oficinas e debates sobre cinema periférico.",
        shortDescription: "Festival de Cinema da Ceilândia",
        latitude: -15.812486,
        longitude: -48.1055363,
        address: "Praça do Cidadão - Ceilândia/DF",
        startDate: new Date("2025-08-10"),
        endDate: new Date("2025-08-15"),
        cover: cineExpressaoImage,
      },
      {
        id: "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        segmentId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "Festival de Curtas - Cine Brasília",
        proposer: "Associação Amigos do Cine Brasília",
        description:
          "Mostra de curtas-metragens nacionais e distritais no icônico Cine Brasília. Promove a diversidade da produção cinematográfica brasileira com debates e formação de público.",
        shortDescription: "Mostra de curtas no Cine Brasília",
        latitude: -15.8141473,
        longitude: -47.902056,
        address: "EQS 106/107 - Asa Sul - Brasília/DF",
        startDate: new Date("2025-07-20"),
        endDate: new Date("2025-07-25"),
        cover: cineBrasiliaImage,
      },
    ],
  });
}

seed()
  .then(() => {
    console.log("✅ Database seeded successfully!");
    prisma.$disconnect();
  })
  .catch((error) => {
    console.error("❌ Error seeding database:", error);
    prisma.$disconnect();
    process.exit(1);
  });
