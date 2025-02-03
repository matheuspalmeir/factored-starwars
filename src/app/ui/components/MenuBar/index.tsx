"use client";
import React, { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../SearchBar";

const navigation = {
  home: { name: "Home", href: "/" },
  films: { name: "Films", href: "/films" },
  characters: { name: "Characters", href: "/characters" },
};

export default function MenuBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black">
      {/** Desktop Menu */}
      <nav
        aria-label="Navigation menu for the main sections of the site"
        className="mx-auto flex max-w-6xl items-center justify-between p-3 lg:px-4"
      >
        <div className="flex lg:flex-1">
          <Link
            href={navigation.home.href}
            key={navigation.home.name}
            className="-m-1 p-1"
          >
            <span className="sr-only">Starwars Films & Characters</span>
            <Image
              className="h-14 w-auto"
              src="/star-wars-logo.png"
              width={100}
              height={100}
              alt="Starwars Films & Characters Logo"
            />
          </Link>
        </div>
        {/** Mobile Menu Expand Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/** Desktop Menu Itens */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href={navigation.home.href}
            key={navigation.home.name}
            className="text-sm/6 font-semibold text-white"
          >
            Home
          </Link>
          <Link
            href={navigation.films.href}
            key={navigation.films.name}
            className="text-sm/6 font-semibold text-white"
          >
            Films
          </Link>
          <Link
            href={navigation.characters.href}
            key={navigation.characters.name}
            className="text-sm/6 font-semibold text-white"
          >
            Characters
          </Link>
        </PopoverGroup>
        <div className="hidden md:ml-12 lg:flex lg:flex-1 lg:justify-end">
          <SearchBar placeholder="Search for a StarWars film or character" />
        </div>
      </nav>
      {/** Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only text-white">
                Starwars Films & Characters
              </span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only text-white">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/films"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                >
                  Films
                </a>
                <a
                  href="/characters"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
                >
                  Characters
                </a>
              </div>
              <div className="py-6">
                <SearchBar placeholder="Search for a StarWars film or character" />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
