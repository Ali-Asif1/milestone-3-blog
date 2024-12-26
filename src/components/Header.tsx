import React from "react";
import Link from "next/link";
import Image from "next/image";
import menubar from "../../public/images/menubar.svg"

export const Header = () => {
  return (
    <section>
      <div className="flex justify-between py-4 sm:py-6">
        <div className="logo">
          <p className="text-3xl sm:text-5xl">Food Blog</p>
          <p className="text-xs sm:text-lg opacity-50">RECIPES & MORE</p>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/">Comments</Link>
        </div>
          <Image src={menubar} alt="menubar" className="block sm:hidden"/>
      </div>
    </section>
  );
};
