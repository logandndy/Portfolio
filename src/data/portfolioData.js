import iconfigma from "../img/iconfigma.svg";
import iconsketch from "../img/iconsketch.svg";
import iconadobexd from "../img/iconadobexd.svg";
import Portfolioimg from "../img/Portfolioimg.png";
import iconreact from "../img/icons8-react.svg";
import Sitecaroimg from "../img/carole-site.png";
import iconwebflow from "../img/icons8-webflow.svg";

export const portfolioData = [
  {
    id: 1,
    name: "Portfolio",
    languages: ["React", "sass", "adobe XD"],
    languagesIcons: [iconadobexd, iconreact],
    source:
      "https://www.figma.com/file/zW5I4LdfPIz2ehDtrmrWSY/Portfolio?type=design&node-id=0%3A1&mode=design&t=UIHaitanM5Sc3fIT-1",
    source1: "https://github.com/logandndy/Portofolio",
    info: "Ce projet a été réalisé en utilisant React et Sass, ce qui a été une première expérience significative pour moi dans le développement web. Le choix de React a été motivé par sa flexibilité et sa capacité à créer des applications web interactives et performantes. Sass, quant à lui, a été utilisé pour le style, permettant une gestion plus efficace et une personnalisation des styles CSS. Ce portfolio a été conçu comme une plateforme pour présenter mes compétences et mes projets, et il a été un pas de plus dans ma croissance dans le design UX/UI et le développement web.",
    picture: Portfolioimg,
  },
  {
    id: 2,
    name: "CaroleSuzzoni.fr",
    languages: ["Webflow", "figma"],
    languagesIcons: [iconfigma, iconwebflow],
    source:
      "https://www.figma.com/file/2cIcifo2P7uqQDAJt7wIwc/SITE-Carole?type=design&node-id=0%3A1&mode=design&t=FRxz7qrBG5mNNivE-1",
    info: "Ce site Web, élaboré et mis en œuvre en utilisant le logiciel no-code Webflow, marque une première expérience significative dans mon parcours d'apprentissage et d'initiation au développement web sans code. Ce choix s'est justifié par la réputation de Webflow, reconnu pour sa facilité d'utilisation et sa proximité avec le langage de développement CSS.",
    picture: Sitecaroimg,
  },
];
