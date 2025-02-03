"use client";
import { Field, Input } from "@headlessui/react";
import SearchButton from "../SearchButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  const { replace } = useRouter();

  function handleSearchFilms(name: string) {
    const params = new URLSearchParams(searchParams);
    name ? params.set("query", name) : params.delete("query");
    replace(`films?${params.toString()}`);
  }

  function handleSearchCharacters(name: string) {
    const params = new URLSearchParams(searchParams);
    name ? params.set("query", name) : params.delete("query");
    replace(`characters?${params.toString()}`);
  }

  function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const value = (event.target as HTMLInputElement).value;
    setInputValue(value);
  }

  return (
    <div className="flex flex-row justify-center items-end w-full bg-black">
      <Field className={"w-80 px-4"}>
        <Input
          onChange={(e) => handleOnChangeInput(e)}
          placeholder={placeholder}
          className={
            "mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 text-white bg-black border border-gray-200 shadow rounded-xl focus:outline-none focus:ring-1 focus:ring-white/10"
          }
        />
      </Field>
      <SearchButton
        label="Search Films"
        handleOnClick={() => handleSearchFilms(inputValue)}
      />
      <SearchButton
        label="Search Characters"
        handleOnClick={() => handleSearchCharacters(inputValue)}
      />
    </div>
  );
};

export default SearchBar;
