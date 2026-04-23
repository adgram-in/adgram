export interface Product {
  id: number;
  title: string;
  image: string;
  link: string;
  tag?: string;
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
  },
  {
    id: 7,
    title: "HD Earwax Remover",
    image: "https://m.media-amazon.com/images/I/71mgS5byMAL._SX679_.jpg",
    link: "https://amzn.to/4mKvdX0",
    tag: "Deep Clean 🧼",
    categories: ["Tech Gadgets", "Viral Products"]
  },
  {
    id: 8,
    title: "Blackhead/Whitehead Remover",
    image: "https://m.media-amazon.com/images/I/41kUilb3FYL._SX522_.jpg",
    link: "https://amzn.to/4tZOlCC",
    tag: "Skin Care 🧴",
    categories: ["Skin Care", "Viral Products"]
  },
  {
    id: 9,
    title: "Nose/Ear Hair Trimmer",
    image: "https://m.media-amazon.com/images/I/71QKFjmrThL._SX679_.jpg",
    link: "https://amzn.to/4tq6xW8",
    tag: "Deep Clean 🧼",
    categories: ["Tech Gadgets", "Skin Care", "Home Essentials", "Kitchen Finds", "Viral Products"]
  },
  {
    id: 10,
    title: "Electric Scrubber",
    image: "https://m.media-amazon.com/images/I/61umY5qs8gL._SX569_.jpg",
    link: "https://amzn.to/4cFEWJn",
    tag: "⚡ Must Have",
    categories: ["Tech Gadgets", "Viral Products", "Home Essentials"]
  },
  {
    id: 11,
    title: "Mini Electric Chopper",
    image: "https://m.media-amazon.com/images/I/71z4h5dOKmL._SX569_.jpg",
    link: "https://amzn.to/3QWrPMH",
    tag: "💡 Smart Pick",
    categories: ["Tech Gadgets", "Viral Products", "Kitchen Finds"]
  },
  {
    id: 12,
    title: "Mini Packet Sealer",
    image: "https://m.media-amazon.com/images/I/51msQGb1FGL._SX569_.jpg",
    link: "https://amzn.to/48L6iwE",
    tag: "💡 Smart Pick",
    categories: ["Tech Gadgets", "Viral Products", "Kitchen Finds"]
  }
];
