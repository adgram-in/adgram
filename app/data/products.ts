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
    link: "https://www.amazon.in/gp/product/B0GMG4WRRD?smid=A1J9OJEPKU4911&th=1&linkCode=ll2&tag=adgram00-21&linkId=5d997df549b8aed35e02f2bd12fa9fb8&ref_=as_li_ss_tl",
    rating: 4.3,
    price: 899,
    originalPrice: 1999,
    categories: ["Tech", "Viral"]
  },
  {
    id: 2,
    title: "Portable Belt Fan",
    image: "https://m.media-amazon.com/images/I/61bSVvwXiBL._SX679_.jpg",
    link: "https://www.amazon.in/gp/product/B0DW3PD87D?smid=AJQVZUJU1WNFV&th=1&linkCode=ll2&tag=adgram00-21&linkId=10f40056939b33ff807d327d08654cbd&ref_=as_li_ss_tl",
    rating: 4.1,
    price: 4628,
    originalPrice: 8882,
    categories: ["Tech", "Viral"]
  },
  {
    id: 3,
    title: "Folding Stool",
    image: "https://m.media-amazon.com/images/I/51+8-8D-iL._SX679_.jpg",
    link: "https://www.amazon.in/GCI-Outdoor-Portable-Foldable-Lightweight/dp/B0GW7YZBRF?content-id=amzn1.sym.7e2c8ac4-9f12-4bcd-9 497-a8ae54bc8764%3Aamzn1.sym.7e2c8ac4-9f12-4bcd-9 497-a8ae54bc8764&crid=49TLRJXCWFJY&cv_ct_cx=foldable%2Bpurse%2Bstool&keywords=foldable%2Bpurse%2Bstool&pd_rd_i=B0GW7YZBRF&pd_rd_r=0476c794-fcb0-4ef3-aea1-be881e53eb12&pd_rd_w=En68N&pd_rd_wg=MUyy9&pf_rd_p=7e2c8ac4-9f12-4bcd-9 497-a8ae54bc8764&pf_rd_r=2DJC4ASF3WCCS29TMEMK&qid=1776347458&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=foldable%2Bpurse%2Bsool%2Caps%2C719&sr=1-1-66673dcf-083f-43ba-b 782-d4a436cc5cfb-sponse&aref=eEEPGGOgd3&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=adgram00-21&linkId=97b5052d97d7d0f1d88ca88087bee12f&ref_=as_li_ss_tl",
    rating: 4.5,
    price: 499,
    originalPrice: 999,
    categories: ["Home", "Viral"]
  },
  {
    id: 4,
    title: "Electric Cooker",
    image: "https://m.media-amazon.com/images/I/51Gvn44rkFS._SX679_.jpg",
    link: "https://www.amazon.in/gp/product/B09DGJJ6YH?smid=A1GT002D88WNZP&psc=1&linkCode=ll2&tag=adgram00-21&linkId=7e27a5ba2fa173f5cda2ecc53b8bf700&ref_=as_li_ss_tl",
    rating: 4.2,
    price: 449,
    originalPrice: 899,
    categories: ["Tech", "Kitchen", "Home", "Viral"]
  },
  {
    id: 5,
    title: "Drain Mesh",
    image: "https://m.media-amazon.com/images/I/717CqCr1GHL._SX679_.jpg",
    link: "https://www.amazon.in/gp/product/B0G1N743SY?smid=A2VTT18Q9E39RI&th=1&linkCode=ll2&tag=adgram00-21&linkId=636a4027e8d8ea3b0fbd7824385910f3&ref_=as_li_ss_tl",
    rating: 4.4,
    price: 299,
    originalPrice: 999,
    categories: ["Viral", "Kitchen", "Home"]
  },
  {
    id: 6,
    title: "Baby Nail Trimmer",
    image: "https://m.media-amazon.com/images/I/71VwYL4NQEL._SX679_.jpg",
    link: "https://www.amazon.in/Electric-Multiple-Adjustment-Products-Multicolor/dp/B0G5P4NDGS?content-id=amzn1.sym.7e2c8ac4-9f12-4bcd-9 497-a8ae54bc8764%3Aamzn1.sym.7e2c8ac4-9f12-4bcd-9 497-a8ae54bc8764&crid=2BX0Q54H1S0OY&cv_ct_cx=electric%2Bbaby%2Bnail%2Btrimmer&keywords=electric%2Bbaby%2Bnail%2Btrimmer&pd_rd_i=B0G5P4NDGS&pd_rd_r=12be2079-e07d-47b7-b94d-48a9f8fd328a&pd_rd_w=n91hS&pd_rd_wg=ujHLf&pf_rd_p=7e2c8ac4-9f12-4bcd-9 497-a8ae54bc8764&pf_rd_r=67GQFXD3BSBZ40GMTDJV&qid=1776348091&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=electric%2Bbaby%2Bnai%2Caps%2C525&sr=1-1-66673dcf-083f-43ba-b 782-d4a436cc5cfb-sponse&aref=lBtLdxzwsr&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=adgram00-21&linkId=014b9113a3788847acf634a5b6114cb1&ref_=as_li_ss_tl",
    rating: 4.6,
    price: 284,
    originalPrice: 999,
    categories: ["Tech", "Home", "Viral"]
  },
  {
    id: 7,
    title: "HD Earwax Remover",
    image: "https://m.media-amazon.com/images/I/71mgS5byMAL._SX679_.jpg",
    link: "https://www.amazon.in/Earocam-Tool-Connection-Endoscope-White/dp/B0DFPL77LQ?pd_rd_w=DvwCb&content-id=amzn1.sym.7ccbe032-5929-4c88-ab39-4923842061df&pf_rd_p=7ccbe032-5929-4c88-ab39-4923842061df&pf_rd_r=VB8VRGRMA354Q2M8WQ7Q&pd_rd_wg=F6vGk&pd_rd_r=f7e86415-c7a6-4fce-9b50-ce4a5c9174d2&pd_rd_i=B0DZH7ZL1V&th=1&linkCode=ll2&tag=adgram00-21&linkId=6d4d9d44164315bf0bf90400d874c57e&ref_=as_li_ss_tl",
    tag: "Deep Clean 🧼",
    rating: 4.0,
    price: 998,
    originalPrice: 2499,
    categories: ["Tech", "Viral"]
  },
  {
    id: 8,
    title: "Blackhead/Whitehead Remover",
    image: "https://m.media-amazon.com/images/I/41kUilb3FYL._SX522_.jpg",
    link: "https://www.amazon.in/gp/product/B0GSCGDFK3?smid=A21DMM7ZMCBAMM&th=1&linkCode=ll2&tag=adgram00-21&linkId=9c08279e959930035caec97f86ae6b92&ref_=as_li_ss_tl",
    tag: "Skin Care 🧴",
    rating: 4.7,
    price: 299,
    originalPrice: 899,
    categories: ["Skin Care", "Viral"]
  },
  {
    id: 9,
    title: "Nose/Ear Hair Trimmer",
    image: "https://m.media-amazon.com/images/I/71QKFjmrThL._SX679_.jpg",
    link: "https://www.amazon.in/gp/product/B0CTQ7DKP5?smid=A1QQ2GFTZFBZZG&psc=1&linkCode=ll2&tag=adgram00-21&linkId=cedd3459428a438a30adf333f8323ff2&ref_=as_li_ss_tl",
    tag: "Deep Clean 🧼",
    rating: 4.3,
    price: 698,
    originalPrice: 1499,
    categories: ["Tech", "Skin Care", "Home", "Viral"]
  },
  {
    id: 10,
    title: "Electric Scrubber",
    image: "https://m.media-amazon.com/images/I/61umY5qs8gL._SX569_.jpg",
    link: "https://www.amazon.in/HETZON-SALES-Electric-Scrubber-Spin/dp/B0CLVQYJDB?crid=2LSV1U8D5WEO5&dib=eyJ2IjoiMSJ9.6IwxewI6C7F5vuZhu2d5b2rMcFZBfVuf0-11Ooi1yUUCCsf3kWweh5XWDHljD7V72ehatniFPAFH2prdSgbCe812l1BlQfXqo4aNYXWCld8UGqZ5Ov6uxQI_0P_6usR3xI7O4euojIew0JvjI8meyM0KHeoY6vwqYIzfvyO5JU-pBa7t2MOhozbHkk5AHFvX0dxQJf3uxH0i6BXFCTHSuzj_JyNhIUEQjP53z9h1ET8SEZtkWI8rBmM3FNR-6z7BPPMpwwEkWwHfwo0o8gBezAC_nXZiIHtzV3l5KBrbkc.nfYlBGZQH7Pp7Fs8jAAcryMuCSitQAYX2CqJLYcNrgs&dib_tag=se&keywords=Electric+Cleaning+Brush+5+in+1+Magic+Power+Scrubber&nsdOptOutParam=true&qid=1776942434&refinements=p_72%3A1318476031&rnid=1318475031&s=kitchen&sprefix=%2Ckitchen%2C12 75&sr=1-10&linkCode=ll2&tag=adgram00-21&linkId=677d1f2326836de1a8c29dfedfbe97db&ref_=as_li_ss_tl",
    tag: "⚡ Must Have",
    rating: 4.8,
    price: 555,
    originalPrice: 1290,
    categories: ["Tech", "Viral", "Home"]
  },
  {
    id: 11,
    title: "Mini Electric Chopper",
    image: "https://m.media-amazon.com/images/I/71z4h5dOKmL._SX569_.jpg",
    link: "https://www.amazon.in/gp/product/B09CKSYBLR?smid=A3CTHNKRKDG7ON&th=1&linkCode=ll2&tag=adgram00-21&linkId=214bffc2aae3639413b669411b8c6d77&ref_=as_li_ss_tl",
    tag: "💡 Smart Pick",
    rating: 4.2,
    price: 899,
    originalPrice: 1499,
    categories: ["Tech", "Viral", "Kitchen"]
  },
  {
    id: 12,
    title: "Mini Packet Sealer",
    image: "https://m.media-amazon.com/images/I/51msQGb1FGL._SX569_.jpg",
    link: "https://www.amazon.in/TEKCOOL-Portable-Sealing-Handheld-Warranty/dp/B0GFFBJZ2H?dib=eyJ2IjoiMSJ9.NrEEaD9gF5-QH3ddME1QqXW0-WjIQElKOexkZL84rP3y0xBH8AnxD8lKCdoNmP4o3F2EZFj1tjiCgjXp_kPDHMjiDlCwZ_hJWh6D8BJi2SbbiOzXv2U-GdNGUymCmvYwRbP8ZINZpYayq2nzd32rQhp-VLzLQUyktQgzQAZO6RQcGv1PsmcS9DpshKwHuW3GxKc6zoGu64DqfNYaTho9n-Rk0garAC_nWPDX9Pl649prd8i0iZ0QsLO66-3EHdxK07PFIuqKnTYFZ5EEZNgyVixCKI6HdiYSie_ypcAx4n4.m4NovobPKb8gsQvlLdryCVgBg_xIdZjx6dSypTzAqoE&dib_tag=se&keywords=mini%2Bpacket%2Bsealer&qid=1776942543&s=industrial&sr=1-1-sponse&aref=Ft5NjbgP1P&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=adgram00-21&linkId=40c149ecb6e4980649e32ca3134a7e4c&ref_=as_li_ss_tl",
    tag: "💡 Smart Pick",
    rating: 4.5,
    price: 239,
    originalPrice: 399,
    categories: ["Tech", "Viral", "Kitchen"]
  },
  {
    id: 13,
    title: "Kitchen Wall Rack",
    image: "https://m.media-amazon.com/images/I/61+R6rAPEEL._SX522_.jpg",
    link: "https://www.amazon.in/gp/product/B09RVJ54V5?smid=A1B09NHTAUCIPF&th=1&linkCode=ll2&tag=adgram00-21&linkId=8ac25258a38ca30a45f7a46c1dd59a46&ref_=as_li_ss_tl",
    tag: "💸 Under ₹399",
    rating: 4.3,
    price: 380.99,
    originalPrice: 1499,
    categories: ["all", "viral", "kitchen", "Home"]
  },
  {
    id: 14,
    title: "16 in 1 Masala Rack",
    image: "https://m.media-amazon.com/images/I/51hLT9m7W1L.jpg",
    link: "https://www.amazon.in/gp/product/B0CV9TDBTM?smid=A17A3R5FDEEXGV&psc=1&linkCode=ll2&tag=adgram00-21&linkId=2c50fa9bfb5438a43dcfc8c3fdca72c9&ref_=as_li_ss_tl",
    tag: "💡 Smart Pick",
    rating: 4.5,
    price: 449,
    originalPrice: 999,
    categories: ["all", "viral", "kitchen", "Home"]
  },
  {
    id: 15,
    title: "Premium Mirror Cabinet",
    image: "https://m.media-amazon.com/images/I/31J1e8vQebL._SY300_.jpg",
    link: "https://www.amazon.in/gp/product/B083RD1Q23?smid=AJ6SIZC8YQDZX&psc=1&linkCode=ll2&tag=adgram00-21&linkId=75be242e19575963a491980d151e3b85&ref_=as_li_ss_tl",
    tag: "⚡ Must Have",
    rating: 4.4,
    price: 999,
    originalPrice: 1899,
    categories: ["all", "viral", "Home"]
  }
];