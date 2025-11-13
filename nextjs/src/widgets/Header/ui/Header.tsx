import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white dark:bg-black shadow-sm py-4 px-6 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/car.png"
            alt="Логотип"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Автосервис Точка
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;