export default function InfoBar () {
    return (
        <div className="py-2 text-sm bg-gradient-to-r from-transparent via-neutral-800 to-transparent border-t-[1px]
            border-neutral-700">
            <div className="md:flex gap-2 justify-center items-center">
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
            <div className="flex justify-center items-center mt-2">
                    Created By
                    <a href="https://vootlachaitanya.com" className="ml-1 underline underline-offset-2"
                        target="_blank">
                    Chaitanya Vootla
                </a>
            </div>
        </div>
    );
}
