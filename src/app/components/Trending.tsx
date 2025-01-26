import Image from "next/image";

export default async function Trending() {
  const trendingResponse = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.TMDB_API_KEY}`);
  const trendingItems = (await trendingResponse.json()).results.filter((result: Record<string, string>) =>
    result.media_type === 'movie' || result.media_type === 'tv');

  return (
    <div>
      <h1 className="text-2xl py-4">Trending</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 gap-y-14">
        {trendingItems.map((result: Record<string, string>) => (
          <div key={result.id}>
            <Image
              src={`https://d2qifmj8erqnak.cloudfront.net/${result.title?'movie':'series'}/${result.id}/poster.webp`}
              alt={result.title || result.name}
              className="rounded-md"
              width={300}
              height={300}
              unoptimized
            />
            <h2 className="mx-w-40 mt-2">{result.title || result.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
