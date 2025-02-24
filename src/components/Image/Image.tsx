import * as React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  sizes?: string;
  blurDataURL?: string;
  placeholder?: "blur" | "empty";
}

export const Image = (props: ImageProps) => {
  const { fill, sizes, blurDataURL, placeholder, style, ...rest } = props;
  return <img {...rest} style={{ ...style, objectFit: "cover" }} />;
};
