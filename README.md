# 📍 Onde Tem FAC

Aplicativo mobile para localização de eventos culturais e locais de interesse, com sistema de cupons. Projeto desenvolvido com React Native (Expo) e Node.js.

## 🏗️ Estrutura do Projeto

O projeto é dividido em duas partes principais:

- **`/api`** - Backend desenvolvido com Node.js, Express, Prisma e SQLite
- **`/mobile`** - Aplicativo mobile desenvolvido com React Native e Expo

---

## 🚀 Como Subir o Projeto em Localhost

### 📋 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **pnpm** - Gerenciador de pacotes
  ```bash
  npm install -g pnpm
  ```
- **Expo CLI** (opcional, mas recomendado)
  ```bash
  npm install -g expo-cli
  ```

---

## 🔧 Configuração da API (Backend)

### 1. Navegue até a pasta da API

```bash
cd api
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

O arquivo `.env` já está configurado com:

```properties
DATABASE_URL="file:./dev.db"
```

> ⚠️ **Nota**: O banco de dados SQLite será criado automaticamente na pasta `prisma/`.

### 4. Execute as migrações do banco de dados

```bash
pnpm prisma migrate dev
```

### 5. Popule o banco de dados com dados iniciais (seed)

```bash
pnpm prisma db seed
```

Este comando irá criar:
- Categorias (Música, Literatura, Formações/Oficinas, Cinema, Outros)
- Eventos culturais de exemplo
- Regras para cada evento

### 6. Inicie o servidor

```bash
pnpm start
```

O servidor estará rodando em: **http://localhost:3333**

### 🔍 Endpoints Disponíveis

- `GET /categories` - Lista todas as categorias
- `GET /markets/category/:categoryId` - Lista eventos por categoria
- `GET /markets/:id` - Detalhes de um evento específico
- `PATCH /coupons/:id` - Atualiza cupons de um evento

---

## 📱 Configuração do Mobile (React Native)

### 1. Navegue até a pasta do mobile

```bash
cd mobile
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure o endereço da API

Abra o arquivo `src/services/api.ts` e ajuste o `baseURL` para o IP da sua máquina na rede local:

```typescript
export const api = axios.create({
  baseURL: "http://SEU_IP_LOCAL:3333", // Ex: http://192.168.1.100:3333
  timeout: 700,
});
```

> 💡 **Como descobrir seu IP local:**
> - **macOS/Linux**: Execute `ifconfig | grep "inet "` no terminal
> - **Windows**: Execute `ipconfig` no prompt de comando

### 4. Inicie o Expo

```bash
pnpm start
```

ou para Android:

```bash
pnpm android
```

ou para iOS:

```bash
pnpm ios
```

### 📲 Testando no Dispositivo

1. Instale o aplicativo **Expo Go** no seu smartphone:
   - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Escaneie o QR Code que aparece no terminal

3. Certifique-se de que seu computador e smartphone estão na **mesma rede WiFi**

---

## 🗂️ Estrutura de Pastas

### API

```
api/
├── prisma/
│   ├── schema.prisma      # Schema do banco de dados
│   ├── seed.ts            # Dados iniciais
│   └── dev.db             # Banco SQLite (gerado automaticamente)
├── src/
│   ├── controllers/       # Controladores das rotas
│   ├── database/          # Configuração do Prisma
│   ├── middlewares/       # Middlewares (tratamento de erros)
│   ├── routes/            # Definição das rotas
│   ├── utils/             # Utilitários e helpers
│   └── server.ts          # Entrada da aplicação
└── package.json
```

### Mobile

```
mobile/
├── src/
│   ├── app/               # Telas (Expo Router)
│   ├── assets/            # Imagens e recursos
│   ├── components/        # Componentes reutilizáveis
│   ├── services/          # Serviços (API)
│   ├── styles/            # Estilos globais
│   └── utils/             # Utilitários
├── assets/                # Assets do Expo
└── app.json               # Configuração do Expo
```

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Prisma** - ORM
- **SQLite** - Banco de dados
- **TypeScript** - Superset JavaScript
- **Zod** - Validação de schemas

### Mobile
- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **Expo Router** - Navegação
- **Axios** - Cliente HTTP
- **React Native Maps** - Mapas
- **Bottom Sheet** - Componente de sheet
- **TypeScript** - Superset JavaScript

---

## 🐛 Troubleshooting

### Problema: API não conecta no mobile

**Solução**: Verifique se:
1. O servidor da API está rodando (`pnpm start` na pasta `api`)
2. O `baseURL` em `mobile/src/services/api.ts` está com o IP correto
3. Seu computador e smartphone estão na mesma rede WiFi
4. Não há firewall bloqueando a porta 3333

### Problema: Erro ao executar migrations

**Solução**: Delete o arquivo `dev.db` e a pasta `migrations`, depois execute:
```bash
pnpm prisma migrate dev
pnpm prisma db seed
```

### Problema: Expo não abre no dispositivo

**Solução**: 
1. Limpe o cache do Expo: `expo start -c`
2. Reinstale o Expo Go no dispositivo
3. Verifique se está na mesma rede WiFi

---

## 📝 Scripts Disponíveis

### API
```bash
pnpm start              # Inicia o servidor em modo watch
pnpm prisma migrate dev # Executa migrations
pnpm prisma db seed     # Popula o banco com dados iniciais
pnpm prisma studio      # Abre interface visual do banco
```

### Mobile
```bash
pnpm start              # Inicia o Expo
pnpm android            # Roda no emulador Android
pnpm ios                # Roda no emulador iOS
pnpm web                # Roda no navegador
```

---

## 👨‍💻 Autor Original

Projeto desenvolvido por Samuel Estrella ([@samuelmachado1](https://github.com/samuelmachado1))

---

## 📄 Licença

ISC

---

## 🎯 Próximos Passos

- [ ] Implementar autenticação de usuários
- [ ] Adicionar filtros de busca avançados
- [ ] Implementar sistema de favoritos
- [ ] Adicionar notificações push
- [ ] Integrar com mapas para rotas

---

**🎉 Pronto! Seu ambiente está configurado. Bom desenvolvimento!**
