import { Button } from "@headlessui/react";

const SearchButton = ({
  label,
  handleOnClick,
}: {
  label: string;
  handleOnClick: () => void;
}) => {
  return (
    <Button
      onClick={handleOnClick}
      className="w-40 h-10 mx-2 rounded-md bg-white py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-yellow-300 data-[open]:bg-yellow-300 data-[focus]:outline-1 data-[focus]:outline-yellow"
    >
      {label}
    </Button>
  );
};

export default SearchButton;
