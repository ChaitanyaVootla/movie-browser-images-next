import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="px-10 py-4 flex justify-between items-center w-full border-b-[1px] border-neutral-800">
            <h1 className="text-2xl text-white flex gap-1 items-center font-extralight">
                <Image alt="popcorn" src="/popcorn.png" width={30} height={30} className="ml-3 mr-1 -mt-1"></Image>
                TMB Images
            </h1>
        </nav>
    );
}
