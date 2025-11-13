import Script from "next/script";
import Link from "next/link";

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href={"/"} className="font-bold cursor-pointer">Главная</Link> - <span>Осаго</span>
        </div>


        <h1 className="text-2xl font-bold mb-6">Страхование</h1>

        <iframe
          src="https://b2c.pampadu.ru/index.html#2019aa02-6990-45fb-acc0-f41ac8f0e47d"
          style={{ width: '100%', border: 'none', height: '650px', minWidth: '320px', overflow: 'hidden' }}
          id="ppdwi"
          scrolling="no"
        />

        <Script
          src="https://b2c.pampadu.ru/ppdw.js"
          strategy="afterInteractive"
          id="pampadu-script"
        />
      </div>
    </div>
  );
}
