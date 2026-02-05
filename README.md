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
