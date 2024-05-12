import { AppLinks } from "@/types/app-links";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Recettes",
    baseUrl: "https://www.allrecipes.com/search?q=pizza",
    type: "external",
  },
  {
    label: "Pizza Brésil",
    baseUrl: "https://www.facebook.com/pizzabresil/about",
    type: "external",
  },
  {
    label: "Formations",
    baseUrl: "https://www.youtube.com/@PizzaBresil",
    type: "external",
  },
];

const footerUsersLinks: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/mon-espace",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/connexion",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/connexion/inscription",
    type: "internal",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/connexion/mots-de-passe-perdu",
    type: "internal",
  },
];

const footerInformationLinks: AppLinks[] = [
  {
    label: "Histoire de la pizza",
    baseUrl:
      "https://fr.wikipedia.org/wiki/Histoire_de_la_pizza#:~:text=Une%20histoire%20souvent%20racont%C3%A9e%20veut,de%20l'Italie%2C%20comme%20sur",
    type: "external",
  },
  {
    label: "Confidentialité",
    baseUrl: "https://policies.google.com/privacy?hl=fr",
    type: "external",
  },
  {
    label: "À propos",
    baseUrl:
      "https://www.google.com/maps/place/Pizza+Br%C3%A9sil/@45.4297921,-73.6415511,15z/data=!4m6!3m5!1s0x4cc911f9a9651f53:0xf40734fd89bb8976!8m2!3d45.4297921!4d-73.6415511!16s%2Fg%2F11y4gzxfch?hl=en&entry=ttu",
    type: "external",
  },
  {
    label: "Contact",
    baseUrl:
      "https://www.google.com/search?q=pizzabresil+contact&rlz=1C1VDKB_frCA1069CA1069&oq=pizzabresil+contact&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBNIBCjExMDEwajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8",
    type: "external",
  },
];

export const footerSocialNetworksLinks: AppLinks[] = [
  {
    label: "YouTube",
    baseUrl: "https://www.youtube.com/@PizzaBresil",
    type: "external",
    icon: RiYoutubeFill,
  },
  {
    label: "FaceBook",
    baseUrl: "https://www.facebook.com/pizzabresil",
    type: "external",
    icon: RiFacebookBoxFill,
  },
  {
    label: "Instagram",
    baseUrl: "https://www.instagram.com/pizzabresil",
    type: "external",
    icon: RiInstagramFill,
  },
];

//TABLEAU CHE CONTIENE TUTTI I TABLEAU
export const footerLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateurs",
    links: footerUsersLinks,
  },
  {
    label: "Informations",
    links: footerInformationLinks,
  },
  {
    label: "Réseaux",
    links: footerSocialNetworksLinks,
  },
];
