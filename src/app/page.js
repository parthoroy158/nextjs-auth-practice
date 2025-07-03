import Image from "next/image";

export default async function Home() {

  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  return (
    <div className="place-content-center text-center mt-25">
      <p>This is the home page:{data.length}</p>
    </div>
  );
}
