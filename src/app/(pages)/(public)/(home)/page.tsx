import Image from "next/image";

function Home() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <section className="space-y-36">
        <Image alt="logo" src="/Logo.svg" width={100} quality={1000} height={100} />
        <div>
          <header className="space-y-2">
            <h1 className="text-4xl leading-7 tracking-normal font-bold">Olá, ....</h1>
            <p className="text-base">Get Started with Appointments.</p>
          </header>

        </div>
        <footer className="mt-auto">
          <p>@carepulse copyright</p>
        </footer>
      </section>
      <aside className="w-full">
        <Image 
        src="/Illustration.png" 
        className="w-full object-fill bg-cover h-full bg-no-repeat"
        alt="illustration" 
        width={1000} quality={100} height={1000} />
      </aside>
    </div>
  );
}

export default  Home
