import { CollectionsType, FooterType } from "./types";

export const BRAND_NAME: string = "Fosuaa Whole Green Foods";

export const BRAND_TAGLINE: string = "Eat, and Enjoy Healthy Whole Foods";

export const BRAND_DESCRIPTION: string =
  "100% Healthy, Organic, Whole Foods. We are committed to providing you with the best quality of food and products.";

export const BRAND_URL: string = "https://www.fosuaawholegreenfoods.com";

export const BRAND_BUTTON_TEXT: string = "Shop Now";

export const BRAND_IMAGE: string =
  "https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/v1653917523/fosuaa/fosuaa_logo.webp";

export const BRAND_FAVICON: string =
  "https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/c_scale,w_16/v1653917523/fosuaa/fosuaa_logo.webp";

export const HOME_IMAGE_URL: string =
  "https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/c_pad,w_720/v1656093366/fosuaa/photo-1596040033229-a9821ebd058d_dmxlrs.webp";

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export const navigation = {
  categories: [
    {
      name: "Fish",
      featured: [
        { name: "Mud Fish", href: "/product/mud-fish" },
        { name: "Koobi", href: "/product/koobi" },
        { name: "Emai", href: "/product/emai" },
      ],
      collection: [
        { name: "All", href: "/collections/fish" },
        { name: "Fresh", href: "/collections/fresh" },
        { name: "Smoked", href: "/collections/smoked" },
      ],
    },
    {
      name: "Spices",
      featured: [{ name: "Powdered Pepper", href: "#" }],
      collection: [
        { name: "All", href: "/collections/spices" },
        { name: "New", href: "/collections/new" },
        { name: "On Sale", href: "/collections/sale" },
      ],
    },
  ],
  pages: [
    { name: "Reviews", href: "/reviews" },
    { name: "Our Story", href: "/about-us" },
  ],
};

export const footerNavigation: FooterType = {
  products: [
    { name: "Mud Fish", href: "/product/mud-fish" },
    { name: "Koobi", href: "/product/koobi" },
    { name: "Emai", href: "/product/emai" },
    { name: "Red Pepper", href: "/product/red-pepper" },
    { name: "Gari", href: "/product/gari" },
  ],
  customerService: [
    { name: "Contact", href: "/contact" },
    { name: "Shipping", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Tracking", href: "/tracking" },
  ],
  company: [
    { name: "Who we are", href: "/about-us" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Return Policy", href: "/returns" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  bottomLinks: [
    { name: "Accessibility", href: "/accessibility" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export const currencies: Array<string> = [
  // "CAD",
  "USD",
  // "AUD",
  // "EUR",
  // "GBP"
];

export const collections: CollectionsType = [
  {
    name: "All",
    description: "Variaties to choose from",
    imageSrc:
      "https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/c_pad,w_389/v1656093820/fosuaa/photo-1606914469633-bd39206ea739_edaiit.webp",
    imageAlt: "all collection of whole foods",
    href: "/collections/all",
  },
  {
    name: "New Arrivals",
    description: "Fresh and restocked",
    imageSrc:
      "https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/c_pad,w_389/v1656094057/fosuaa/photo-1566824099147-bef027d3a333_r32xrt.webp",
    imageAlt: "fresh and restocked collection of whole foods",
    href: "/collections/new",
  },
  {
    name: "On Sale",
    description: "Check out our items on sale",
    imageSrc:
      "https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/c_pad,w_389/v1656094142/fosuaa/photo-1616225273962-05c320ca73d2_ccespp.webp",
    imageAlt: "collections on sale",
    href: "collections/sale",
  },
];

export const deliveryMethods = [
  { id: 1, title: "Standard", turnaround: "4–10 business days", price: 5 },
  { id: 2, title: "Express", turnaround: "2–5 business days", price: 16 },
];

export const copyText = (url: string) => {
  navigator.clipboard.writeText(
    `https://www.fosuaawholegreenfoods.com/product/${url}`
  );
};

export const share = (data: any) => {
  navigator.share(data);
};
