import Image from "next/image";

const Greetings = () => {
  return (
    <Image
      className="h-auto w-full"
      src="/greetings-home.jpg"
      alt="Greetings"
      width={1200}
      height={410}
    />
  );
};

export default Greetings;
