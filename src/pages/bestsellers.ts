import badeeAlOud from "../assets/bestsellers/badee-al-oud.jpg";
import badeeAlOudSet from "../assets/bestsellers/badee-al-oud-set.jpg";
import reef33 from "../assets/bestsellers/reef-33.jpg";
import reef33Set from "../assets/bestsellers/reef-33-set.webp";
import clubDeNuit from "../assets/bestsellers/club-de-nuit.jpg";
import clubDeNuitSet from "../assets/bestsellers/club-de-nuit-set.jpg";
import angham from "../assets/bestsellers/angham.webp";
import anghamBottle from "../assets/bestsellers/angham-bottle.jpg";
import rebel from "../assets/bestsellers/9pm-rebel.webp";
import rebelSet from "../assets/bestsellers/9pm-rebel-set.webp";
import myHer from "../assets/bestsellers/my-her.jpg";
import myHerPeach from "../assets/bestsellers/my-her-peach.jpg";

export type Bestseller = {
  name: string;
  notes: string;
  price: string;
  image: string;
  hoverImage: string;
};

export const bestsellers: Bestseller[] = [
  {
    name: "Bade'e Al Oud",
    notes: "Lattafa",
    price: "40,000",
    image: badeeAlOud,
    hoverImage: badeeAlOudSet,
  },
  {
    name: "Reef 33",
    notes: "Reef",
    price: "70,000",
    image: reef33,
    hoverImage: reef33Set,
  },
  {
    name: "Club de Nuit Intense",
    notes: "Armaf",
    price: "55,000",
    image: clubDeNuit,
    hoverImage: clubDeNuitSet,
  },
  {
    name: "Angham",
    notes: "Lattafa",
    price: "42,000",
    image: angham,
    hoverImage: anghamBottle,
  },
  {
    name: "9pm Rebel",
    notes: "Afnan",
    price: "65,000",
    image: rebel,
    hoverImage: rebelSet,
  },
  {
    name: "My Her",
    notes: "Fragrance Deluxe",
    price: "20,000",
    image: myHer,
    hoverImage: myHerPeach,
  },
];

