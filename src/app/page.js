import ProductsCard from "./components/ProductsCard";

export default async function Home() {

  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()

  return (
    <div>
      <ProductsCard data={data}></ProductsCard>
    </div>
  );
}
