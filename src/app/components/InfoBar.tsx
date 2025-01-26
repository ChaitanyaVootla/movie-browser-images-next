export default function InfoBar () {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center py-2 px-20 w-fit border-b-[1px]
                border-neutral-700 text-sm bg-gradient-to-r from-transparent via-neutral-800 to-transparent">
                <div>
                    This is a Open-Source project powering the images in
                    <a href="https://TheMovieBrowser.com" target="_blank"
                        className="ml-1 underline underline-offset-2">
                        TheMovieBrowser.com
                    </a>
                </div>
                <div>
                    if you would like to use this and need more image formats or sizes, please
                    open an issue on the GitHub repository
                    <a href="https://github.com/chaitanyavootla/movie-browser-images" target="_blank"
                        className="ml-1 underline underline-offset-2">
                        movie-browser-images
                    </a>
                </div>
            </div>
        </div>
    );
}
