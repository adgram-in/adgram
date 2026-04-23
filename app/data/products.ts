export interface Product {
  id: number;
  title: string;
  image: string;
  link: string;
  tag?: string;
  categories?: string[];
  rating: number;
  price: number;
  originalPrice: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Portable Neck Fan",
    image: "https://m.media-amazon.com/images/I/51BfoAo2ZVL._SX679_.jpg",
    link: "https://amzn.to/4sBE9z4",
    rating: 4.3,
    price: 899,
    originalPrice: 1999,
    categories: ["Tech Gadgets", "Viral Products"]
  },
  {
    id: 2,
    title: "Portable Belt Fan",
    image: "https://m.media-amazon.com/images/I/61bSVvwXiBL._SX679_.jpg",
    link: "https://amzn.to/4th4mV2",
    rating: 4.1,
    price: 4628,
    originalPrice: 8882,
    categories: ["Tech Gadgets", "Viral Products"]
  },
  {
    id: 3,
    title: "Folding Stool",
    image: "https://m.media-amazon.com/images/I/51+8-S8D-iL._SX679_.jpg",
    link: "https://amzn.to/4cChmxs",
    rating: 4.5,
    price: 499,
    originalPrice: 999,
    categories: ["Home Essentials", "Viral Products"]
  },
  {
    id: 4,
    title: "Electric Cooker",
    image: "https://m.media-amazon.com/images/I/51Gvn44rkFS._SX679_.jpg",
    link: "https://amzn.to/4vz6OaM",
    rating: 4.2,
    price: 449,
    originalPrice: 899,
    categories: ["Tech Gadgets", "Kitchen Finds", "Home Essentials", "Viral Products"]
  },
  {
    id: 5,
    title: "Drain Mesh",
    image: "https://m.media-amazon.com/images/I/717CqCr1GHL._SX679_.jpg",
    link: "https://amzn.to/3OHbTxe",
    rating: 4.4,
    price: 299,
    originalPrice: 999,
    categories: ["Viral Products", "Kitchen Finds", "Home Essentials"]
  },
  {
    id: 6,
    title: "Baby Nail Trimmer",
    image: "https://m.media-amazon.com/images/I/71VwYL4NQEL._SX679_.jpg",
    link: "https://amzn.to/4dS8ohK",
    rating: 4.6,
    price: 284,
    originalPrice: 999,
    categories: ["Tech Gadgets", "Home Essentials", "Viral Products"]
  },
  {
    id: 7,
    title: "HD Earwax Remover",
    image: "https://m.media-amazon.com/images/I/71mgS5byMAL._SX679_.jpg",
    link: "https://amzn.to/4mKvdX0",
    tag: "Deep Clean 🧼",
    rating: 4.0,
    price: 998,
    originalPrice: 2499,
    categories: ["Tech Gadgets", "Viral Products"]
  },
  {
    id: 8,
    title: "Blackhead/Whitehead Remover",
    image: "https://m.media-amazon.com/images/I/41kUilb3FYL._SX522_.jpg",
    link: "https://amzn.to/4tZOlCC",
    tag: "Skin Care 🧴",
    rating: 4.7,
    price: 299,
    originalPrice: 899,
    categories: ["Skin Care", "Viral Products"]
  },
  {
    id: 9,
    title: "Nose/Ear Hair Trimmer",
    image: "https://m.media-amazon.com/images/I/71QKFjmrThL._SX679_.jpg",
    link: "https://amzn.to/4tq6xW8",
    tag: "Deep Clean 🧼",
    rating: 4.3,
    price: 698,
    originalPrice: 1499,
    categories: ["Tech Gadgets", "Skin Care", "Home Essentials", "Kitchen Finds", "Viral Products"]
  },
  {
    id: 10,
    title: "Electric Scrubber",
    image: "https://m.media-amazon.com/images/I/61umY5qs8gL._SX569_.jpg",
    link: "https://amzn.to/4cFEWJn",
    tag: "⚡ Must Have",
    rating: 4.8,
    price: 555,
    originalPrice: 1290,
    categories: ["Tech Gadgets", "Viral Products", "Home Essentials"]
  },
  {
    id: 11,
    title: "Mini Electric Chopper",
    image: "https://m.media-amazon.com/images/I/71z4h5dOKmL._SX569_.jpg",
    link: "https://amzn.to/3QWrPMH",
    tag: "💡 Smart Pick",
    rating: 4.2,
    price: 899,
    originalPrice: 1499,
    categories: ["Tech Gadgets", "Viral Products", "Kitchen Finds"]
  },
  {
    id: 12,
    title: "Mini Packet Sealer",
    image: "https://m.media-amazon.com/images/I/51msQGb1FGL._SX569_.jpg",
    link: "https://amzn.to/48L6iwE",
    tag: "💡 Smart Pick",
    rating: 4.5,
    price: 239,
    originalPrice: 399,
    categories: ["Tech Gadgets", "Viral Products", "Kitchen Finds"]
  }
];