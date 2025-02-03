"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type MovieCardProps = {
  href: string;
  alt: string;
  linkTo: string;
  classNames?: string;
  fallbackSrc?: string;
  variant?: "circle" | "card";
};

const Cover = ({
  href,
  alt,
  linkTo,
  classNames,
  fallbackSrc = "/fallback.png",
  variant = "card",
}: MovieCardProps) => {
  const [imageSrc, setImageSrc] = useState(href);
  return (
    <Link href={linkTo} key={href}>
      <div
        className={`relative overflow-hidden shadow-sm transition-transform duration-300 ease-in-out
        hover:scale-110 active:scale-95 cursor-pointer ${
          variant === "circle" ? "w-40 h-40 rounded-full" : "rounded-lg"
        }`}
      >
        <Image
          className={classNames || "h-120 w-full object-cover"}
          src={imageSrc}
          width={250}
          alt={alt}
          height={375}
          onError={() => setImageSrc(fallbackSrc)}
        />
      </div>
    </Link>
  );
};

export default Cover;
