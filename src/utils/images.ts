import { CDN_BASE_URL } from "@/constants/settings";
import { ImageType } from "@/types/item";

export const getImageUrl = (id: number, mediaType: string, itemType: string) =>
    `${CDN_BASE_URL}/${mediaType}/${id}/${itemType}.webp`;

export const getItemImageStats = async (item: {id: number, itemType: string}) => {
    const currentSizes = await Promise.allSettled(Object.values(ImageType).map(async (type) => {
        const imageUrl = getImageUrl(item.id, item.itemType, type);
        const response = await fetch(imageUrl, {mode: 'cors', method: 'HEAD'});
        const size = parseInt(response.headers.get('content-length') as string); // size in bytes
        return size;
    }));

    const originalItemImages = await fetch(`/api/itemImages?id=${item.id}&media=${item.itemType === 'movie'? 'movie':'tv'}`);
    const itemImages = await originalItemImages.json();
    const originalImageUrls = [itemImages.posterUrl, itemImages.backdropUrl, itemImages.widePosterUrl, itemImages.logoUrl];
    const totalSizeBytes = currentSizes.reduce((acc, size) => {
        if (size.status === 'fulfilled') {
            return acc + size.value;
        }
        return acc;
    }, 0);
    const totalOriginalSizes = await Promise.allSettled(originalImageUrls.map(async (imageUrl) => {
        const response = await fetch(imageUrl, {mode: 'cors', method: 'HEAD'});
        const size = parseInt(response.headers.get('content-length') as string); // size in bytes
        return size;
    }));
    const totalOriginalSizeBytes = totalOriginalSizes.reduce((acc, size) => {
        if (size.status === 'fulfilled') {
            return acc + size.value;
        }
        return acc;
    }, 0);
    return {totalSize: totalSizeBytes/1000, totalOriginalSize: totalOriginalSizeBytes/1000};
}
