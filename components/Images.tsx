import Image from "next/image";
import { ImageType } from "../lib/types";

export const ImageComponent = ({ src, alt, height, width }: ImageType) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      blurDataURL={src}
      placeholder="blur"
    />
  );
};
