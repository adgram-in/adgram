export interface Product {
  id: number;
  title: string;
  image: string;
  link: string;
  categories?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    title: "Portable Neck Fan",
    image: "https://m.media-amazon.com/images/I/51BfoAo2ZVL._SX679_.jpg",
    link: "https://amzn.to/4sBE9z4",
    categories: ["Tech Gadgets", "Viral Products"]
  },
  {
    id: 2,
    title: "Portable Belt Fan",
    image: "https://m.media-amazon.com/images/I/61bSVvwXiBL._SX679_.jpg",
    link: "https://amzn.to/4th4mV2",
    categories: ["Tech Gadgets", "Viral Products"]
  },
  {
    id: 3,
    title: "Folding Stool",
    image: "https://m.media-amazon.com/images/I/51+8-S8D-iL._SX679_.jpg",
    link: "https://amzn.to/4cChmxs",
    categories: ["Home Essentials", "Viral Products"]
  },
  {
    id: 4,
    title: "Electric Cooker",
    image: "https://m.media-amazon.com/images/I/51Gvn44rkFS._SX679_.jpg",
    link: "https://amzn.to/4vz6OaM",
    categories: ["Tech Gadgets", "Kitchen Finds", "Home Essentials", "Viral Products"]
  },
  {
    id: 5,
    title: "Drain Mesh",
    image: "https://m.media-amazon.com/images/I/717CqCr1GHL._SX679_.jpg",
    link: "https://amzn.to/3OHbTxe",
    categories: ["Viral Products", "Kitchen Finds", "Home Essentials"]
  },
  {
    id: 6,
    title: "Baby Nail Trimmer",
    image: "https://m.media-amazon.com/images/I/71VwYL4NQEL._SX679_.jpg",
    link: "https://amzn.to/4dS8ohK",
    categories: ["Tech Gadgets", "Home Essentials", "Viral Products"]
  }
];