import { Button } from "@headlessui/react";

const SearchButton = ({ handleOnClick }: { handleOnClick: () => void }) => {
  return (
    <Button
      onClick={handleOnClick}
      className="w-24 h-10 rounded-md bg-white py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-yellow-300 data-[open]:bg-yellow-300 data-[focus]:outline-1 data-[focus]:outline-yellow"
    >
      Search
    </Button>
  );
};

export default SearchButton;
