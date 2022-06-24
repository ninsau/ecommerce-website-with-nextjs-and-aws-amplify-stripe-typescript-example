import Image from "next/image";
import { ImageType } from "../lib/types";
import { HOME_IMAGE_URL } from "../lib";

export const LogoComponent = ({ height, width }: any) => {
  return (
    <Image
      src={`https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/c_scale,w_${width},h_${height}/v1653917514/fosuaa/fosuaa_icon.webp`}
      alt="logo"
      height={height}
      width={width}
    />
  );
};

export const HeroImageComponent = () => {
  return (
    // <Image
    //   src="https://images.unsplash.com/photo-1577193120905-21e0c301d5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    //   alt="logo"
    //   height={838}
    //   width={720}
    //   layout='responsive'
    //   sizes="10vw"
    //   blurDataURL={
    //     "https://images.unsplash.com/photo-1577193120905-21e0c301d5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    //   }
    //   placeholder="blur"
    // />
    <img
      src={HOME_IMAGE_URL}
      alt="home image"
      className="w-full h-full object-center object-cover"
      loading="lazy"
    />
  );
};

export const CollectionsImageComponent = ({ src, alt }: ImageType) => {
  return <Image src={src} alt={alt} height={256} width={389} />;
};

export const FeaturedImageComponent = ({ src, alt }: ImageType) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={280}
      width={280}
      blurDataURL={src}
      placeholder="blur"
    />
  );
};

export const DecorativeImageComponent = () => {
  return (
    <Image
      src={HOME_IMAGE_URL}
      alt="decoorative background image"
      height={896}
      width={1216}
      blurDataURL={HOME_IMAGE_URL}
      placeholder="blur"
    />
  );
};

export const FlagImageComponent = () => {
  return (
    <Image
      src="https://res.cloudinary.com/fosuaa-whole-green-foods/image/upload/c_scale,h_15,w_20/v1654025327/fosuaa/usa_fflag.webp"
      alt="decoorative background image"
      height={15}
      width={20}
    />
  );
};

export const CategoryImageComponent = ({ src, alt }: ImageType) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={576}
      width={384}
      blurDataURL={src}
      placeholder="blur"
    />
  );
};

export const ProductImageComponent = ({ src, alt }: ImageType) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={592}
      width={592}
      quality={100}
      blurDataURL={src}
      placeholder="blur"
    />
  );
};

export const CartProductImageComponent = ({ src, alt }: ImageType) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={94}
      width={94}
      blurDataURL={src}
      placeholder="blur"
    />
  );
};

export const AccountProductComponent = ({ src, alt }: ImageType) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={180}
      width={180}
      blurDataURL={src}
      placeholder="blur"
    />
  );
};
