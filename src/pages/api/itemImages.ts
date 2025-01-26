import { IMAGE_SIZE_DEFAULTS, IMAGES_CONST } from '@/constants/image';
import type { NextApiRequest, NextApiResponse } from 'next'
 
type itemImageResult = {
    name?: string,
    title?: string,
    posterUrl: string | null,
    backdropUrl: string | null,
    logoUrl: string | null,
    widePosterUrl: string | null,
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<itemImageResult>
) {
    const results = await fetch(`https://api.themoviedb.org/3/${req.query.media
        }/${req.query.id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=images`);
    const data = await results.json();
    const logoPath = data.images?.logos.find(({ iso_639_1 }: { iso_639_1: string }) => iso_639_1 === 'en')?.file_path;
    const widePosterPath = data.images?.backdrops.find(({ iso_639_1 }: { iso_639_1: string }) => iso_639_1 === 'en')?.file_path;
    const response = {
        name: data.name,
        title: data.title,
        posterUrl: data.poster_path ? `${IMAGES_CONST.secure_base_url}${IMAGE_SIZE_DEFAULTS.poster}${data.poster_path}`
            .replace('.svg', '.png') : null,
        backdropUrl: data.poster_path ? `${IMAGES_CONST.secure_base_url}${IMAGE_SIZE_DEFAULTS.backdrop}${data.backdrop_path}`
            .replace('.svg', '.png') : null,
        logoUrl: logoPath ? `${IMAGES_CONST.secure_base_url}${IMAGE_SIZE_DEFAULTS.logo}${logoPath}`
            .replace('.svg', '.png') : null,
        widePosterUrl: widePosterPath ? `${IMAGES_CONST.secure_base_url}${IMAGES_CONST.poster_sizes.w500}${widePosterPath}`
            .replace('.svg', '.png') : null,
    }

    res.status(200).json(response);
}
