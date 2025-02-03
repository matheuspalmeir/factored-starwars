import Image from "next/image";
import Link from "next/link";

type MovieCardProps = {
  href: string;
  alt: string;
  linkTo: string;
  classNames?: string;
};

const Cover = ({ href, alt, linkTo, classNames }: MovieCardProps) => {
  return (
    <Link href={linkTo} key={href}>
      <div
        className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-transform duration-300 ease-in-out
    hover:scale-110 active:scale-95 cursor-pointer"
      >
        <Image
          className={classNames || "h-120 w-full object-cover"}
          src={href}
          width={250}
          alt={alt}
          height={375}
        />
      </div>
    </Link>
  );
};

export default Cover;
