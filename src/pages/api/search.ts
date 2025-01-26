import type { NextApiRequest, NextApiResponse } from 'next'
 
type searchResult = {
  name?: string,
  title?: string,
  id: number,
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<searchResult[]>
) {
    const results = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&query=${req.query.query}`);
    const data = await results.json();

    res.status(200).json(data.results.filter((result: Record<string, string>) => result.media_type === 'movie' || result.media_type === 'tv'));
}
