import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  CollectionIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  InformationCircleIcon,
  RssIcon,
  UsersIcon,
} from "@heroicons/react/outline";

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

export const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: false },
  {
    name: "Inventory",
    href: "/inventory",
    icon: CollectionIcon,
    current: false,
  },
  {
    name: "Info Pages",
    href: "/info",
    icon: InformationCircleIcon,
    current: false,
  },
  { name: "Sale", href: "/sale", icon: BellIcon, current: false },
  { name: "Banner", href: "/banner", icon: RssIcon, current: false },
];

export const copyText = (info: any) => {
  navigator.clipboard.writeText(info);
};

export const share = (data: any) => {
  navigator.share(data);
};
