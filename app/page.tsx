import Card from "@components/Card";

export default function Home() {
  return (
    <section className="grid w-full max-w-[33.75rem] place-items-center">
      <h1 className="mb-4 text-base font-bold text-clr-gray-500 md:mb-8 md:text-2xl">
        Password Generator
      </h1>
      <Card className="grid w-full gap-4 md:gap-6" />
    </section>
  );
}
