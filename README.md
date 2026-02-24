# Portfólio — Guilherme Ribeiro

Site de portfólio profissional em uma única página, criado para apresentar perfil, projetos e formas de contato de forma objetiva e moderna.

## Finalidade do projeto

O site serve como **página pessoal e cartão de visitas profissional**. Nele são apresentados:

- **Quem sou** — nome, cargo (Full Stack Developer) e uma breve apresentação (Sobre Mim), com formação em Análise e Desenvolvimento de Sistemas e Pós em Full Stack.
- **O que faço** — projetos em destaque (aplicações web com React e dashboards/análise de dados com Power BI) com descrição e stacks utilizadas.
- **Com o que trabalho** — habilidades técnicas (JavaScript, React, React Native, Flutter, Python, SQL, Power BI, Git, etc.).
- **Como entrar em contato** — links para GitHub, LinkedIn e e-mail, além de botão para download do currículo em PDF.

A ideia é centralizar em um único endereço as informações relevantes para recrutadores, clientes e parceiros, com visual limpo, tema escuro e animações leves.

## O que foi feito

- **Página única (SPA-style)** com as seções: Header com navegação, Hero (início), Sobre Mim, Projetos em Destaque, Habilidades e Contato.
- **Design** com tema escuro, tipografia Plus Jakarta Sans, bolhas decorativas no fundo e layout responsivo (mobile-first).
- **Interatividade (JavaScript):**
  - Menu mobile (hambúrguer) que abre/fecha a navegação em telas pequenas.
  - Botões “Stacks” nos cards de projeto que expandem/recolhem as tecnologias usadas.
  - Animações ao rolar a página (elementos entram em cena ao surgir no viewport).
  - Ano atual preenchido automaticamente no rodapé.
- **Acessibilidade:** uso de `aria-label`, `aria-expanded` e navegação por âncoras para melhor uso com teclado e leitores de tela.

## Estrutura dos arquivos

| Arquivo      | Função |
|-------------|--------|
| `index.html` | Estrutura da página: Header, Hero, Sobre, Projetos, Habilidades, Contato e Footer. |
| `style.css`  | Estilos globais, variáveis de cor e tipografia, bolhas de fundo e responsividade. |
| `script.js`  | Menu mobile, stacks expansíveis nos projetos e animações no scroll. |

## Como usar

1. Abra `index.html` no navegador (duplo clique ou arraste para Chrome/Edge).
2. Ou use um servidor local, por exemplo:
   - `npx serve .` (na pasta do projeto)
   - extensão “Live Server” no VS Code

## Personalizar

- **Nome e cargo:** em `index.html`, altere o nome no Hero, o cargo e o texto da seção Sobre Mim.
- **Currículo:** no botão “Baixar Currículo”, mantenha o `href` apontando para o PDF (ex.: `curriculo/Curriculo_Guilherme_Ribeiro.pdf`).
- **Cores:** no topo de `style.css`, em `:root`, altere `--bg`, `--accent`, `--text` etc.
- **Projetos e habilidades:** edite os blocos `.project-card` e `.skill-tag` em `index.html`.
- **Links:** atualize os `href` de GitHub, LinkedIn e e-mail na seção Contato.

## Deploy

O site pode ser publicado em [Vercel](https://vercel.com), [Netlify](https://netlify.com) ou GitHub Pages: faça upload da pasta (ou conecte o repositório) e aponte a raiz do projeto como pasta de publicação.
