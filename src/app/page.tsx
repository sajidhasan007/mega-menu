import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen border border-red-600">
      <div>
        <h1>Min content</h1>
        <Image
          src={"/slide-banner.svg"}
          alt="slide-banner"
          width={700}
          height={500}
        />
      </div>
    </div>
  );
}
