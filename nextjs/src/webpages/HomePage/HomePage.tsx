import Link from "next/link";

export default function HomePage() {
  const services = [
    { name: "Кузовные работы", phone: "+7 (999) 145-0031" },
    { name: "Подбор красок", phone: "+7 (902) 743-2234" },
    { name: "Покраска", phone: "+7 (905) 008-1855" },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ul className="mt-8 space-y-4 w-full max-w-md">
          {services.map((service, index) => (
            <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b pb-2">
              <span className="font-medium">{service.name}</span>
              <a
                href={`tel:${service.phone}`}
                className="text-blue-600 hover:underline"
              >
                {service.phone}
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="/insurance"
          className="mt-12 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
        >
          Осаго онлайн
        </Link>
      </main>
    </div>
  );
}
