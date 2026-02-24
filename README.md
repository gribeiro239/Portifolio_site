# Portfólio — modelo moderno

Portfólio em uma página, inspirado em layout moderno, com tema escuro e animações leves.

## Estrutura

- **index.html** — seções: Header, Hero, Techs, Sobre, Projetos, Habilidades, Contato
- **style.css** — variáveis de cor e tipografia (Plus Jakarta Sans), bolhas no fundo, responsivo
- **script.js** — menu mobile, stacks expansíveis nos projetos, animações ao scroll

## Como usar

1. Abra `index.html` no navegador (duplo clique ou arraste para o Chrome/Edge).
2. Ou use um servidor local, por exemplo:
   - `npx serve .` (na pasta do projeto)
   - extensão “Live Server” no VS Code

## Personalizar

- **Nome e cargo:** em `index.html`, altere “Seu Nome”, “Desenvolvedor Full Stack & Data Analytics” e o texto da seção Sobre Mim.
- **Currículo:** no botão “Baixar Currículo”, troque `href="#contato"` por o link do seu PDF (ex.: `href="CV.pdf"` ou URL do drive).
- **Cores:** no topo de `style.css`, em `:root`, altere `--bg`, `--accent`, `--text` etc.
- **Projetos e habilidades:** edite os blocos `.project-card` e `.skill-item` em `index.html`.
- **Links:** atualize os `href` de GitHub e LinkedIn na seção Contato.

## Deploy

Você pode publicar em [Vercel](https://vercel.com), [Netlify](https://netlify.com) ou GitHub Pages: faça upload da pasta (ou conecte o repositório) e aponte para a raiz do projeto.
