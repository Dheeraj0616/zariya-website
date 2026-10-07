import Image from "next/image";

import { brand } from "@/config/brand";

type BrandLogoProps = {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export function BrandLogo({
  width = 160,
  height = 160,
  priority = false,
  className,
}: BrandLogoProps) {
  return (
    <Image
      src={brand.logo.src}
      alt={brand.logo.alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}