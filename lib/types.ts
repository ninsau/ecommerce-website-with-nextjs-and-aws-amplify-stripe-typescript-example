export type Meta = {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  url?: string | null;
};

export type ImageType = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
};


export type InfosType = {
  infos: Array<{
    id: string;
    title: string;
    content: string;
    page: string;
    header: string;
  }>;
};

export type ProductsType = {
  products: Array<{
    title: string;
    price: string;
    image: string;
    tags: string;
    availability: string;
    category: string;
    slug: string;
    description: string;
  }>;
  slug?: string;
};

export type ProductType = {
  title: string;
  price: string;
  image: string;
  tags: string;
  availability: string;
  category: string;
  slug: string;
  description: string;
};

export type NotificationsType = {
  content: string;
  color: string;
};

export type CartStateType = {
    open: boolean;
    setOpen: (val: boolean) => void;
  };