import iconfigma from "../img/iconfigma.svg";
import iconsketch from "../img/iconsketch.svg";
import iconadobexd from "../img/iconadobexd.svg";
import Portfolioimg from "../img/Portfolioimg.png";
import iconreact from "../img/icons8-react.svg";

export const portfolioData = [
  {
    id: 1,
    name: "Portfolio",
    languages: ["React", "sass", "adobe XD"],
    languagesIcons: [iconadobexd, iconreact],
    source: "https://www.github.com",
    info: "Ce projet a été réalisé en utilisant React et Sass, ce qui a été une première expérience significative pour moi dans le développement web. Le choix de React a été motivé par sa flexibilité et sa capacité à créer des applications web interactives et performantes. Sass, quant à lui, a été utilisé pour le style, permettant une gestion plus efficace et une personnalisation des styles CSS. Ce portfolio a été conçu comme une plateforme pour présenter mes compétences et mes projets, et il a été un pas de plus dans ma croissance dans le design UX/UI et le développement web.",
    picture: Portfolioimg,
  },
  {
    id: 2,
    name: "lorem.fr",
    languages: ["javascript", "css", "sketch"],
    languagesIcons: [iconsketch],
    source: "https://wwwgithub.com",
    info: "lorem",
    picture: "./media/unnamed.webp",
  },
];
