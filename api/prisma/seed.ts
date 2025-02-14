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
  await prisma.category.createMany({
    data: [
      { id: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d", name: "Música" },
      { id: "52e81585-f71a-44cd-8bd0-49771e45da44", name: "Literatura" },
      {
        id: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Formações/Oficinas",
      },
      { id: "826910d4-187d-4c15-88f4-382b7e056739", name: "Cinema" },
      { id: "abce52cf-b33b-4b3c-8972-eb72c66c83e4", name: "Outros" },
    ],
  });

  await prisma.market.createMany({
    data: [
      // MÚSICA
      {
        id: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Festival de blues",
        description: "Festival de blues de São Sebastião",
        latitude: -15.9055184,
        longitude: -47.7616695,
        coupons: 10,
        address: "Praça do Reggae - Vila Nova - São Sebastião/DF",
        phone: "(61) 94567-1212",
        cover: festivalBluesImage,
      },
      {
        id: "012576ea-4441-4b8a-89e5-d5f32104c7c9",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Reggae na Praça",
        description: "Festival de Reggae",
        latitude: -15.9055186,
        longitude: -47.7616695,
        coupons: 10,
        address: "Praça do Reggae - Vila Nova - São Sebastião/DF",
        phone: "(61) 98239-1310",
        cover: reggaeNaPracaImage,
      },
      {
        id: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Festival COMA",
        description:
          "Celebração da música, cultura e criatividade brasileira, que busca unir pessoas, culturas e ideias em uma comunhão inspiradora.",
        latitude: -15.813447188556285,
        longitude: -47.838287975555076,
        coupons: 10,
        address: "CCBB - Brasília",
        phone: "(61) 3456-7890",
        cover: festivalCOMAImage,
      },
      {
        id: "4197b830-aa9c-40d4-a22e-c05043588a77",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Latinidades",
        description:
          "Uma grande celebração da potência das mulheres negras! Multilinguagens",
        latitude: -23.56011117635681,
        longitude: -46.65636680690605,
        coupons: 10,
        address: "Parque da Cidade -  Brasília",
        phone: "(61) 98765-4321",
        cover:
          "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300",
      },
      {
        id: "4209c72f-9d14-410c-91af-c24d08f177cc",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Sarau VA",
        description: "Uma noite repleta de música e poesia",
        latitude: -15.805565851480075,
        longitude: -48.13548964856591,
        coupons: 10,
        address: "QNP 19 - Ceilândia/DF",
        phone: "(61) 2345-6789",
        cover: sarauVAImage,
      },
      {
        id: "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Verde Vida",
        description:
          "Restaurante vegano com pratos saudáveis e saborosos. Comida natural em um ambiente acolhedor.",
        latitude: -23.563839021677836,
        longitude: -46.65801352185607,
        coupons: 10,
        address: "Alameda Jaú - Jardim Paulista",
        phone: "(15) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      // LITERATURA
      {
        id: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Loja Nova",
        description:
          "Roupas e acessórios modernos para o dia a dia. Estilo casual com ótimos preços.",
        latitude: -23.564580184943406,
        longitude: -46.66202724389377,
        coupons: 10,
        address: "Rua José Maria Lisboa - Jardim Paulista",
        phone: "(16) 3456-7890",
        cover:
          "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=300",
      },
      {
        id: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Tech Plus",
        description:
          "Loja de eletrônicos com produtos de última geração. Gadgets e acessórios para todos.",
        latitude: -23.56183474903135,
        longitude: -46.66355095952655,
        coupons: 10,
        address: "Alameda Franca - Cerqueira César",
        phone: "(17) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300",
      },
      {
        id: "77a5d5eb-bcfa-4457-916d-a5b6fe7aa183",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Casa Luxo",
        description:
          "Decoração sofisticada para casa e escritório. Produtos exclusivos para ambientes elegantes.",
        latitude: -23.55870738391179,
        longitude: -46.66172705741049,
        coupons: 10,
        address: "Alameda Santos - Jardim Paulista",
        phone: "(18) 2345-6789",
        cover:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300",
      },
      {
        id: "78806cca-cfb0-45bc-8dc3-c57a42f0da01",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "BookMart",
        description:
          "Livraria especializada em best-sellers e clássicos. Espaço aconchegante para leitura.",
        latitude: -23.556376883488902,
        longitude: -46.65941413229616,
        coupons: 10,
        address: "Rua Luís Coelho - Consolação",
        phone: "(19) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=300",
      },
      {
        id: "78ced7b1-436b-42ca-9c66-747f2b671321",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Green Market",
        description:
          "Produtos orgânicos e saudáveis para o seu dia a dia. Alimentos frescos e sustentáveis.",
        latitude: -23.55473446617852,
        longitude: -46.65859874077045,
        coupons: 10,
        address: "Rua Matias Aires - Consolação",
        phone: "(11) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400&h=300",
      },
      // FORMAÇÕES/OFICINAS
      {
        id: "7be85f5b-533f-4974-8c9e-75cae740041c",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Frida Lab",
        description: "Casa de Cultura/Residência Artística",
        latitude: -15.9077586,
        longitude: -47.7638068,
        coupons: 10,
        address: "Rua 10 Lote 15 - São José - São Sebastião/DF",
        phone: "(61) 99821-3688",
        cover: fridaLabImage,
      },
      {
        id: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Casa Paulo Freire",
        description:
          "Inspirada na filosofia do notável e inesquecível educador Paulo Freire, a Casa de Paulo Freire é mais que uma escola de alfabetização de jovens e adultos",
        latitude: -15.904827,
        longitude: -47.78138,
        coupons: 10,
        address: "Quadra 201 Casa 07 - Residencial Oeste - São Sebastião/DF",
        phone: "(61) 98275-2193",
        cover: casaPauloFreireImage,
      },
      {
        id: "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Comuna Panteras Negras - MST",
        description:
          "Formações e oficinas do Movimento dos Trabalhadores Rurais Sem Terra",
        latitude: -15.6903448,
        longitude: -47.7468545,
        coupons: 10,
        address: "Assentamento Pequeno Willian - Planaltina/DF",
        phone: "(61) 2345-6789",
        cover: pequenoWilliamImage,
      },
      {
        id: "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Instituto Metamofose",
        description:
          "Oficinas de artes plásticas e muralismo. Espaço de formação e cultura.",
        latitude: -15.897683383705846,
        longitude: -47.77353724263203,
        coupons: 10,
        address: "Rua 30A - Setor Tradicional - São Sebastião/DF",
        phone: "(61) 9876-5432",
        cover: institutoMetamorfoseImage,
      },
      {
        id: "b3a4dab2-1b83-4015-ba95-22f5770c6108",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "ZEstalagem Real",
        description:
          "Hotel boutique com design clássico e atendimento de excelência. Uma estadia luxuosa e confortável.",
        latitude: -23.56210372033115,
        longitude: -46.65926304595067,
        coupons: 10,
        address: "Alameda Jaú - Jardim Paulista",
        phone: "(16) 3456-7890",
        cover:
          "https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=400&h=300",
      },
      // CINEMA
      {
        id: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "CineClube Olaria",
        description: "Cineclube do MTST São Sebastião.",
        latitude: -15.9226512,
        longitude: -47.7727767,
        coupons: 10,
        address: "Núcleo Rural Morro da Cruz - São Sebastião - DF",
        phone: "(61) 9876-5432",
        cover: cineClubeImage,
      },
      {
        id: "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "Cine de expressão",
        description: "Festival de Cinema da Ceilândia",
        latitude: -15.812486,
        longitude: -48.1055363,
        coupons: 10,
        address: "Praça do cidadão - Ceilândia - DF",
        phone: "(61) 2345-6789",
        cover: cineExpressaoImage,
      },
      {
        id: "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "Festival de curtas do Cine Brasília",
        description:
          "Cinema de bairro com atmosfera aconchegante e opções de filmes clássicos e lançamentos.",
        latitude: -15.8141473,
        longitude: -47.902056,
        coupons: 10,
        address: "EQS 106/107 - Asa Sul - Brasília/DF",
        phone: "(61) 9876-5432",
        cover: cineBrasiliaImage,
      },
      // OUTROS
      {
        id: "def71683-e89f-4c3b-a652-868a02f54ae9",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Grão Dourado",
        description:
          "Famosa por seus croissants e pães de fermentação natural.",
        latitude: -23.54000232292889,
        longitude: -46.64680389012777,
        coupons: 10,
        address: "Av. Duque de Caxias  - Santa Ifigênia",
        phone: "(11) 5432-1098",
        cover:
          "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      {
        id: "e4949574-a579-4b07-a005-3fc4b7339752",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Pão & Cia",
        description:
          "Padaria artesanal com pães frescos e quitutes caseiros todos os dias.",
        latitude: -23.523537811033677,
        longitude: -46.62669283245777,
        coupons: 10,
        address: "Rua Guaporé - Luz ",
        phone: "(11) 8765-4321",
        cover:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300",
      },
      {
        id: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Doce Massa",
        description:
          "Especializada em doces e salgados, com opções de café da manhã completo.",
        latitude: -23.529972517386824,
        longitude: -46.62928337478692,
        coupons: 10,
        address: "Rua Alfredo Maia - Luz",
        phone: "(11) 1234-5678",
        cover:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300",
      },
      {
        id: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Padaria da cidade",
        description:
          "Padaria de bairro com pães rústicos e tradicionais assados na hora.",
        latitude: -23.534594559751564,
        longitude: -46.63463225944563,
        coupons: 10,
        address: "Praça da Luz - Bom Retiro",
        phone: "(11) 9876-5432",
        cover:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300",
      },
    ],
  });

  await prisma.rules.createMany({
    data: [
      {
        marketId: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        description: "Disponível até 31/12/2025",
      },
      {
        marketId: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "4197b830-aa9c-40d4-a22e-c05043588a77",
        description: "Disponível até 20/01/2025",
      },
      {
        marketId: "4209c72f-9d14-410c-91af-c24d08f177cc",
        description: "Disponível até 31/12/2025",
      },
      {
        marketId: "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        description: "Disponível até 20/01/2025",
      },
      {
        marketId: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "77a5d5eb-bcfa-4457-916d-a5b6fe7aa183",
        description: "Disponível até 10/01/2025",
      },
      {
        marketId: "78806cca-cfb0-45bc-8dc3-c57a42f0da01",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "78ced7b1-436b-42ca-9c66-747f2b671321",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "7be85f5b-533f-4974-8c9e-75cae740041c",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        description: "Disponível até 20/01/2025",
      },
      {
        marketId: "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        description: "Disponível até 07/01/2025",
      },
      {
        marketId: "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "b3a4dab2-1b83-4015-ba95-22f5770c6108",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        description: "Disponível até 20/01/2025",
      },
      {
        marketId: "def71683-e89f-4c3b-a652-868a02f54ae9",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "e4949574-a579-4b07-a005-3fc4b7339752",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        description: "Disponível até 25/02/2025",
      },
      {
        marketId: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        description: "Disponível até 01/02/2025",
      },
      {
        marketId: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "4197b830-aa9c-40d4-a22e-c05043588a77",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "4209c72f-9d14-410c-91af-c24d08f177cc",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "77a5d5eb-bcfa-4457-916d-a5b6fe7aa183",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "78806cca-cfb0-45bc-8dc3-c57a42f0da01",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "78ced7b1-436b-42ca-9c66-747f2b671321",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "7be85f5b-533f-4974-8c9e-75cae740041c",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "8cf0433e-68de-4c2a-9fff-c0c2941ec521",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "b2c3014d-64bd-4c01-95e9-7f408e12ff6f",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "b3a4dab2-1b83-4015-ba95-22f5770c6108",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "c5271f4e-6058-4eda-8b08-0e7fb0b73a0d",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "d21b8cad-8d01-4ffd-8117-a34d613cdcf5",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "def71683-e89f-4c3b-a652-868a02f54ae9",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "e4949574-a579-4b07-a005-3fc4b7339752",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "ea097b60-d0fb-41aa-ad44-a7ed850c9ecd",
        description: "Válido apenas para consumo no local",
      },
      {
        marketId: "ebfecf67-fe4d-4137-90f0-b7083fd58da1",
        description: "Válido apenas para consumo no local",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
