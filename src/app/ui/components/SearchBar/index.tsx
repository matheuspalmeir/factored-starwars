"use client";
import { Field, Input } from "@headlessui/react";
import SearchButton from "../SearchButton";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className="flex flex-row justify-center items-end w-full bg-black">
      <Field className={"w-80 px-4"}>
        <Input
          placeholder={placeholder}
          className={
            "mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6 text-white bg-black border border-gray-200 shadow rounded-xl focus:outline-none focus:ring-1 focus:ring-white/10"
          }
        />
      </Field>
      <SearchButton
        label="Search Films"
        handleOnClick={() => {
          console.log("Films");
        }}
      />
      <SearchButton
        label="Search Characters"
        handleOnClick={() => {
          console.log("Characters");
        }}
      />
    </div>
  );
};

export default SearchBar;
