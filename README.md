# AWS Consulting Landing Page

Landing page moderna para agência de consultoria em computação em nuvem, focada em AWS.

## Características

- Design moderno estilo Apple com scroll infinito
- Animações suaves com Framer Motion
- Totalmente responsivo
- Seções destacando:
  - Consultores (André Rodrigues e Bolívar Dutra)
  - Certificações AWS
  - Habilidades e expertise
  - Projetos realizados
  - Clientes de destaque

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (ícones)

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:3000`

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deploy no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages através de GitHub Actions.

### Como habilitar:

1. Vá para **Settings** do repositório no GitHub
2. Clique em **Pages** no menu lateral
3. Em **Source**, selecione **GitHub Actions**
4. Faça um push para a branch `main` - o deploy será automático

O site estará disponível em: `https://arodrigues96.github.io/consulting/`

### Deploy Manual (alternativa):

Se preferir fazer deploy manual:

```bash
npm run build
```

Depois, vá em **Settings > Pages** e selecione a pasta `dist` como source.

## Estrutura do Projeto

```
consulting/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── sections/       # Seções da landing page
│   ├── hooks/          # Custom hooks
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globais
├── public/             # Arquivos estáticos
└── index.html          # HTML base
```

## Personalização

### Adicionar Fotos dos Consultores

Substitua os placeholders em `src/sections/Consultants.tsx`:
- Adicione as fotos na pasta `public/`
- Atualize os caminhos: `/andre-rodrigues.jpg` e `/bolivar-dutra.jpg`

## Licença

Proprietário - AWS Consulting
