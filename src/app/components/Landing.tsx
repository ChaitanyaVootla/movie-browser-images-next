'use client'

import { ImageType, ItemType } from "@/types/item";
import { getImageUrl, getItemImageStats } from "@/utils/images";
import Image from "next/image";
import { useEffect, useState } from "react";
import ConversionStats from "./ConversionStats";
import { DEFAULTS_DIMENSIONS } from "@/constants/image";

export default function Landing() {
    const sampleItems = [
        {
            id: 82856,
            itemType: ItemType.SERIES,
            name: 'The Mandalorian'
        },
        {
            id: 71912,
            itemType: ItemType.SERIES,
            name: 'The Witcher'
        },
        {
            id: 94997,
            itemType: ItemType.SERIES,
            name: 'House of the Dragon'
        },
        {
            id: 108978,
            itemType: ItemType.SERIES,
            name: 'Reacher'
        },
        {
            id: 66732,
            itemType: ItemType.SERIES,
            name: 'Stranger Things'
        },
        {
            id: 110492,
            itemType: ItemType.SERIES,
            name: 'Peacemaker'
        },
        {
            id: 698687,
            itemType: ItemType.Movie,
            name: 'Transformers One'
        },
        {
            id: 438631,
            itemType: ItemType.Movie,
            name: 'Dune'
        },
        {
            id: 100088,
            itemType: ItemType.SERIES,
            name: 'The Last of Us'
        },
        {
            id: 786892,
            itemType: ItemType.Movie,
            name: 'Furiosa'
        },
        {
            id: 222766,
            itemType: ItemType.SERIES,
            name: 'The Day of the Jackal'
        },
        {
            id: 93405,
            itemType: ItemType.SERIES,
            name: 'Squid Game'
        },
    ]
    const [currentItem, setCurrentItem] = useState(sampleItems[0]);
    const [currentItemStats, setCurrentItemStats] = useState({totalSize: 0, totalOriginalSize: 0});

    useEffect(() => {
        const handleItemUpdate = async () => {
            const currentImageStats = await getItemImageStats(currentItem);
            setCurrentItemStats(currentImageStats);
        }
        handleItemUpdate();
    }, [currentItem]);
    // const currentImageUrl = getImageUrl(currentItem.id, currentItem.itemType, "poster");

    return (
        <>
        <div className="w-full h-full flex justify-between max-md:flex-wrap gap-10 mt-10">
            <div className="h-full flex flex-col pb-20 w-[50vw]">
                <div className="pb-[20%]">
                    <h2 className="text-3xl max-w-[80%]">
                        Modern Image Formats for all Movies and Series from TMDB Served Through a super fast CDN.
                    </h2>
                    <a href="https://themoviebrowser.com" target="_blank"
                        className="text-neutral-200 flex just items-center mt-2 text-xs w-fit">
                        By
                        <span className="underline underline-offset-2 flex ml-1">
                            TheMovieBrowser.com
                            <Image src="/link_arrow.svg" alt="external github link" width={15} height={15} className="invert"></Image>
                        </span>
                    </a>

                    <p className="mt-20 text-sm text-neutral-200">
                        Access any image through a simple developer friendly URL,
                        no API calls required !
                    </p>
                    <pre className="mt-2 bg-neutral-900 text-white rounded-md w-fit px-6 py-3 text-sm border-[1px]
                        border-neutral-800 text-wrap">
                        https://d2qifmj8erqnak.cloudfront.net/
                        <span className="text-purple-500"> (movie | series) </span>/
                        <span className="text-blue-500"> (TMDB id) </span>/
                        <span className="text-yellow-400"> (poster | backdrop | widePoster | logo) </span>
                        .webp
                    </pre>

                    <div className="mt-10 flex gap-6 items-center">
                        <a href="https://github.com/chaitanyavootla/movie-browser-images" target="_blank">
                            <button className="bg-neutral-200 px-4 py-2 rounded-lg flex items-center gap-2 text-black
                                text-xl border-[1px] border-neutral-700">
                                <Image src="/github.svg" alt="github icon" width={25} height={25}></Image>
                                    GitHub
                                <Image src="/link_arrow.svg" alt="external github link" width={25} height={25}></Image>
                            </button>
                        </a>
                        <a href="https://themoviebrowser.com" target="_blank">
                            <button className="bg-neutral-900 px-4 py-2 rounded-lg flex items-center gap-4 text-neutral-200
                                text-xl border-[1px] border-neutral-700">
                                <Image src="/popcorn.png" alt="popcorn" width={25} height={25}></Image>
                                TheMovieBrowser
                                <Image src="/link_arrow.svg" alt="external link" width={25} height={25} className="invert"></Image>
                            </button>
                        </a>
                    </div>
                </div>

                <div>
                    <p className="mt-10 text-sm text-neutral-200">Support for 4 common image types</p>
                    <div className="flex gap-2 flex-wrap items-center">
                        {Object.values(ImageType).map((type: string) => (
                            <div key={type} className={`bg-neutral-900 text-white px-4 py-1 rounded-md mt-2
                                border-[1px] border-neutral-700 uppercase text-sm flex flex-col justify-center gap-1 items-center`}
                            >
                                {type}
                                <span className="text-xs text-neutral-400">
                                    {DEFAULTS_DIMENSIONS[type as ImageType].width} x {DEFAULTS_DIMENSIONS[type as ImageType].height}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-10 text-sm text-neutral-200">Support for 2 more image types coming soon</p>
                    <div className="flex gap-2 flex-wrap items-center">
                        <div className={`bg-neutral-900 text-neutral-400 px-4 py-1 rounded-md mt-2
                            border-[1px] border-neutral-700 uppercase text-sm`}
                        >
                            LOGO light
                        </div>
                        <div className={`bg-neutral-900 text-neutral-400 px-4 py-1 rounded-md mt-2
                            border-[1px] border-neutral-700 uppercase text-sm`}
                        >
                            LOGO dark
                        </div>
                    </div>

                    <p className="mt-10 text-sm text-neutral-200">Support for modern image formats</p>
                    <div className="flex gap-2 flex-wrap items-center">
                        <div className={`bg-neutral-900 text-white px-4 py-1 rounded-md mt-2
                            border-[1px] border-neutral-700`}
                        >
                            WEBP
                        </div>
                        <div className={`bg-neutral-900 text-neutral-400 px-4 py-1 rounded-md mt-2
                            border-[1px] border-neutral-700`}
                        >
                            AVIF <span className="text-xs">Coming Soon</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-10 w-[35vw] h-full justify-center">
                <div className="flex gap-10 justify-start w-full">
                    <div className="flex flex-col gap-1 w-[100%]">
                        <div className="uppercase text-xs text-neutral-400">Logo</div>
                        <div className="w-full h-full flex justify-center items-center">
                            <Image
                                src={getImageUrl(currentItem.id, currentItem.itemType, ImageType.LOGO)}
                                alt="sample-logo-image"
                                unoptimized
                                width={800}
                                height={700}
                                className="object-contain p-6"
                            ></Image>
                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-1 w-[100%]">
                        <div className="uppercase text-xs text-neutral-400">wide poster</div>
                        <Image
                            src={getImageUrl(currentItem.id, currentItem.itemType, ImageType.WIDE_POSTER)}
                            alt="sample-wideposter-image"
                            unoptimized
                            width={800}
                            height={700}
                            className="object-contain border-[1px] border-neutral-800 rounded-lg"
                        ></Image>
                    </div>
                </div>
                <div className="flex gap-10 justify-start h-full w-full">
                    <div className="flex flex-col gap-1 h-full w-[38%]">
                        <div className="uppercase text-xs text-neutral-400">Poster</div>
                        <Image
                            src={getImageUrl(currentItem.id, currentItem.itemType, ImageType.POSTER)}
                            alt="sample-poster-image"
                            unoptimized
                            width={342}
                            height={500}
                            className="object-contain border-[1px] border-neutral-800 rounded-lg"
                        ></Image>
                    </div>
                    <div className="flex flex-col gap-4 h-full w-full flex-grow">
                        <div className="flex flex-col gap-1 justify-between">
                            <div className="uppercase text-xs text-neutral-400">backdrop</div>
                            <Image
                                src={getImageUrl(currentItem.id, currentItem.itemType, ImageType.BACKDROP)}
                                alt="sample-backdrop-image"
                                unoptimized
                                width={800}
                                height={500}
                                className="object-contain border-[1px] border-neutral-800 rounded-lg"
                            ></Image>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex gap-2 flex-wrap items-center">
                        <ConversionStats currentItemStats={currentItemStats} />
                    </div>
                </div>

                <div>
                    <p className="text-sm text-neutral-200">Checkout some samples</p>
                    <div className="flex gap-2 flex-wrap text-sm">
                        {sampleItems.map((item) => (
                            <button key={item.id} className={`bg-neutral-900 text-white px-4 py-1 rounded-md mt-2
                                border-[1px] border-neutral-700
                                ${currentItem.id === item.id ? 'bg-neutral-700 !border-neutral-400' : ''}`}
                                onClick={() => setCurrentItem(item)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                    {/* <pre className="mt-4 bg-neutral-900 text-white rounded-md w-fit px-3 py-2 border-[1px] border-neutral-800">
                        {currentImageUrl}
                    </pre> */}
                </div>
            </div>
        </div>
                    
        <div className="w-full flex justify-center items-center">
            <div className="flex gap-2 justify-center items-center py-2 px-20 w-fit border-y-[1px]
                border-neutral-700 text-sm bg-gradient-to-r from-transparent via-neutral-800 to-transparent">
                <div>
                    This is a Open-Source project powering the images in
                    <a href="https://TheMovieBrowser.com" target="_blank"
                        className="ml-1 underline underline-offset-2">
                        TheMovieBrowser.com
                    </a>
                </div>
                <div>
                    If you would like to use this and need more image formats or sizes, please
                    open an issue on the GitHub repository
                    <a href="https://github.com/chaitanyavootla/movie-browser-images" target="_blank"
                        className="ml-1 underline underline-offset-2">
                        movie-browser-images
                    </a>
                </div>
            </div>
        </div>
    </>
    );
}
