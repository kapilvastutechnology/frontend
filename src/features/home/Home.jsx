import { useGetProductsQuery } from "../products/productApi";
import ProductCard from "../products/ProductCard";
import ProductCardSkeleton from "../products/ProductCardSkeleton";

export default function Home() {
  const {isLoading, error, data} = useGetProductsQuery();
  if (isLoading) return  <div className="grid grid-cols-4 gap-4 mt-4 items-start" >
    <ProductCardSkeleton/>
    <ProductCardSkeleton/>
    <ProductCardSkeleton/>
    <ProductCardSkeleton/>
    <ProductCardSkeleton/>
    <ProductCardSkeleton/>
    <ProductCardSkeleton/>
    <ProductCardSkeleton/>
  </div> 

  if (error) return <h1>{error}</h1>;
  return (
  <div>
      <h1>Welcome To Online Shop</h1>
      <div className="grid grid-cols-4 gap-4 mt-8 items-start " >
        {data.products.map((product)=>{
        return <ProductCard key={product._id} product={product} />
      })}
      </div>
    </div>
  )
}
