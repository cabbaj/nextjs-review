import Counter from "@/components/Counter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image
        src="https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE"
        width={200}
        height={200}
        alt="picture"
        loading="eager"
      />
      <Counter />
    </div>
  );
}
