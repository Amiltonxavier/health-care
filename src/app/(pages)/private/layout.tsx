import Image from "next/image";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-3 mx-auto w-full max-w-[1900px] bg-deep-dark">
            <header className="flex justify-between gap-4 bg-[#0D0F10] p-4 rounded-lg">
                <Image src="/Logo.svg" alt="Logo" width={100} height={100} />
                <span className="flex items-center gap-2">
                    <span className="flex items-center size-6 text-xs justify-center rounded-full bg-zinc-300">MP</span>
                    <p className="text-white text-xs font-semibold">Admin</p>
                </span>
            </header>
            <main className="pt-10">{children}</main>
        </div>
    );
}