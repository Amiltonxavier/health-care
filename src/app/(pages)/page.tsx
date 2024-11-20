import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button"


import Image from "next/image";
import { useState } from "react";



function Home() {

 //fkmbffmkfvmfvmkfvfmk const [open, setOpen] = useState(false);

  return (
    <>
      <div className="h-screen lg:grid w-full grid-cols-2 overflow-hidden">
        <section className="h-full mx-auto w-full pt-14 pb-12 px-36">
          <div className="flex flex-col justify-between gap-12 h-full w-full overflow-y-auto">
            <Image alt="logo" src="/Logo.svg" width={180} quality={1000} height={110} />
            <div className="space-y-12">
              <header className="space-y-2">
                <h1 className="text-3xl  tracking-normal font-bold text-white">Olá, ....</h1>
                <p className="text-lg text-zinc-300">Comece com os compromissos.</p>
              </header>
              <form action="" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullname" className="text-zinc-200 tracking-normal">Nome Completo</Label>
                  <Input type="text" placeholder="Nome Completo" className="h-11 text-white text-base border-zinc-700 focus-within:ring-emerald-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-200 tracking-normal">Seu endereço de email</Label>
                  <Input type="email" placeholder="Email" className="h-11 text-white text-base border-zinc-700" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-200 tracking-normal">Número de telefone</Label>
                  <Input type="email" placeholder="+244 900 000 000" className="h-11 text-white text-base border-zinc-700" />
                </div>
                <Button variant="secondary" size={"lg"} className="bg-emerald-500 w-full">Começar</Button>
              </form>
            </div>
            <footer className="mt-auto">
              <p className="text-zinc-300">@carepulse copyright</p>
            </footer>
          </div>
        </section>
        <aside className="relative w-full h-screen">
          <Image
            src="/Illustration.png"
            className="w-full object-fill bg-cover h-full bg-no-repeat translate-x-4"
            alt="illustration"
            width={1000} quality={100} height={1000} />

        </aside>
      </div>
    </>
  );
}

export default Home
