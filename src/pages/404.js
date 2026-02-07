import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-full p-2">
        <Image
          src="/assets/404.svg"
          width={256}
          height={256}
          quality={10}
          priority
          alt="weather image"
          className="w-[80%] mx-auto max-w-[800px]"
        />

        <h2 className="text-center xxs:text-2xl md:text-4xl lg:text-6xl  font-semibold xxs:font-medium mt-10 md:mt-20">
          Location Not Found or Unavailable
        </h2>
        <p className="text-center text-xs md:text-base xxs:max-w-[380px] md:max-w-[580px] lg:max-w-[800px] mx-auto mt-6">
          Sorry, we couldn't retrieve weather information for the specified
          location. Please double-check the spelling or try a different
          location.
        </p>
        <Link
          href="/"
          className="text-sm xxs:text-base text-blue-500 w-fit mx-auto font-bold flex justify-center mt-10"
        >
          <p>Take me to the home page</p>
        </Link>
      </div>
    </div>
  );
}
