import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="px-36 py-5 flex justify-between items-center w-full border-b-[1px] border-neutral-800">
            <h1 className="text-3xl text-white flex gap-1 items-center font-extralight">
                <Image alt="popcorn" src="/popcorn.png" width={35} height={35} className="ml-3 mr-1 -mt-1"></Image>
                TMB Images
            </h1>
        </nav>
    );
}
