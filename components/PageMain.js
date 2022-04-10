import Image from "next/image";
import Link from "next/link";

const PageMain = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image
          src={"/undraw_horror_movie.svg"}
          width={200}
          height={200}
          layout="responsive"
          alt="home cinema"
        />
      </div>
      <h1 className="text-2xl text-[#4D4D4D] uppercase font-bold">
        Selamat datang di Movies
      </h1>
      <p className="text-gray-500">Kumpulan Film Gratis</p>
      <Link href="/kontak" passHref>
        <button className="bg-[#4D4D4D] text-white py-3 px-6 rounded text-sm mt-4">
          KONTAK KAMI
        </button>
      </Link>
    </div>
  );
};

export default PageMain;
