import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-navy px-5 text-center text-white">
      <div>
        <div className="flex justify-center">
          <BrandMark light />
        </div>
        <p className="eyebrow mt-10">404</p>
        <h1 className="mt-3 font-serif text-5xl">This page is spotless, but empty.</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/75">Return to the homepage to book premium house cleaning in Toorak, South Yarra, Malvern and surrounds.</p>
        <Link href="/" className="gold-button mt-8">
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
