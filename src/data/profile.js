// src/data/profile.js
// Fonte única do conteúdo do portfólio. Os componentes leem daqui,
// então atualizar um projeto ou link é mexer em um lugar só.
// Tudo abaixo vem do seu currículo, GitHub e conversas anteriores.
// Onde não há dado real (demo, imagens), o valor é null: nada é inventado.

export const profile = {
  name: "Lucas Santana de Souza",
  displayName: "Lucas Santana",
  role: "Desenvolvedor Web Júnior",
  tagline:
    "Front-end com React, Next.js e TypeScript, com experiência prática em full stack.",
  location: "Praia Grande, SP",
  availability:
    "Em busca da primeira oportunidade como desenvolvedor front-end ou full stack júnior.",
  about: [
    "Sou formado em Análise e Desenvolvimento de Sistemas pela UNIMES e foco em front-end, com React, Next.js e TypeScript.",
    "Meu principal projeto é um sistema de checkout e painel administrativo para uma personal trainer, com assinaturas recorrentes via Stripe, banco PostgreSQL e painel com métricas de receita. Também tenho uma API em Java com Spring Boot e um assistente de games que usa a API do Gemini. Agora estou aprofundando React e Next.js em um curso completo.",
  ],
  links: {
    github: "https://github.com/Lucas-S-De-Souza",
    // Atualize aqui se você trocar a URL personalizada do LinkedIn.
    linkedin: "https://www.linkedin.com/in/lucas-santana-394a9b2a5",
    email: "mailto:lucassantana0503@gmail.com",
    whatsapp: "https://wa.me/5513996849496",
  },
};

export const projects = [
  {
    id: "personal-trainer-platform",
    featured: true,
    category: "Full stack",
    title: "Checkout e painel administrativo para personal trainer",
    status: "Em desenvolvimento",
    summary:
      "Landing page e checkout de assinaturas recorrentes desenvolvidos para uma personal trainer, com painel administrativo para acompanhar alunos e receita.",
    highlights: [
      "Assinaturas mensais e trimestrais via Stripe, com valores definidos no servidor.",
      "Cada cobrança é confirmada por webhook assinado.",
      "Painel com login, lista de alunos, status de assinatura e métricas de receita recorrente (MRR).",
      "Validação com Zod, proteção contra CSRF e limitação de requisições.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Stripe", "Resend"],
    repo: "https://github.com/Lucas-S-De-Souza/personal-trainer-platform",
    demo: null, // adicione o link quando houver deploy
    image: null, // adicione um print real em /public quando tiver
  },
  {
    id: "crud-fullstack-produtos",
    featured: false,
    category: "Full stack",
    title: "CRUD Full Stack de Produtos",
    status: "Em desenvolvimento",
    summary:
      "API REST para gerenciamento de estoque de produtos, com interface em React.",
    highlights: [
      "API em Java 17 com Spring Boot e persistência com Spring Data JPA.",
      "Validação de dados e documentação da API com Swagger.",
      "Interface em React consumindo a API com Axios.",
    ],
    stack: ["Java", "Spring Boot", "JPA", "H2", "Swagger", "React", "Vite"],
    repo: "https://github.com/Lucas-S-De-Souza/crud-fullstack-produtos",
    demo: null,
    image: null,
  },
  {
    id: "assistente-games",
    featured: false,
    category: "Front-end e IA",
    title: "Assistente de Games",
    status: "Projeto de evento",
    summary:
      "Aplicação web em que o usuário seleciona um jogo e faz perguntas, respondidas pela API do Gemini por meio de engenharia de prompt. Desenvolvido no evento NLW Agents (Rocketseat).",
    highlights: [],
    stack: ["JavaScript", "HTML", "CSS", "Gemini API"],
    repo: "https://github.com/Lucas-S-De-Souza/assistente-games",
    demo: "https://lucas-s-de-souza.github.io/assistente-games/",
    image: "/imagens/asst-games.png",
  },
];

// Exercícios e projetos de estudo (aparecem em uma área menor do portfólio).
export const studyProjects = [
  {
    id: "projeto-social",
    title: "Redes Sociais",
    summary:
      "Simulação de uma interface de smartphone no navegador, com telas que representam redes sociais.",
    stack: ["HTML", "CSS"], // se também usa JavaScript, acrescente aqui
    repo: "https://github.com/Lucas-S-De-Souza/projeto-social",
    demo: "https://lucas-s-de-souza.github.io/projeto-social/",
    image: "/imagens/pj-social.png",
  },
  {
    id: "projeto-site",
    title: "Projeto Site",
    summary:
      "Primeiro site, feito no curso de HTML e CSS do Curso em Vídeo, com foco em estrutura semântica e estilos.",
    stack: ["HTML", "CSS"],
    repo: "https://github.com/Lucas-S-De-Souza/projeto-site",
    demo: "https://lucas-s-de-souza.github.io/projeto-site/",
    image: "/imagens/pj-site.png",
  },
];

// Categorias e tecnologias reais. Sem porcentagens nem "níveis".
export const skills = [
  {
    group: "Front-end",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    group: "Back-end e banco de dados",
    items: ["Prisma", "PostgreSQL", "Java", "Spring Boot", "Oracle SQL"],
  },
  {
    group: "Integrações",
    items: ["Stripe", "Resend", "Gemini API"],
  },
  {
    group: "Ferramentas",
    items: ["Git", "GitHub"],
  },
  {
    group: "Conhecimento complementar",
    items: ["Kotlin", "C#", "Python"],
  },
];

// Liga cada tecnologia aos projetos em que ela aparece.
// Ex.: projectsUsing("React") -> projetos cuja "stack" inclui React.
export function projectsUsing(skill) {
  return projects.filter((project) => project.stack.includes(skill));
}