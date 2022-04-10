import Image from "next/image";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-sm rounded-md cursor-pointer">
      <Image
        src={`http://img.omdbapi.com/${movie.Poster}`}
        width={700}
        height={800}
        className="rounded-t-md"
        alt={movie.Title}
      />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-1">{movie.Title}</div>
        <p className="text-gray-700 text-base mb-1">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
