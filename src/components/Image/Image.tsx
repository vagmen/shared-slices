import * as React from "react";
import { useUrmanComponents } from "../UrmanProvider/UrmanProvider";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  sizes?: string;
  blurDataURL?: string;
  placeholder?: "blur" | "empty";
}

const Image = (props: ImageProps) => {
  const { fill, sizes, blurDataURL, placeholder, style, ...rest } = props;
  const { ImageComponent: ContextImageComponent } = useUrmanComponents();

  if (ContextImageComponent) {
    return <ContextImageComponent {...props} />;
  }

  return <img {...rest} style={{ ...style, objectFit: "cover" }} />;
};

export default Image;
