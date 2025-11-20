import { Card, CardHeader, CardTitle, CardFooter, CardContent } from '@/components/ui/card'
import { useGetProductsQuery } from './productApi';
import { base } from '@/app/mainApi';

export default function ProductCard() {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error?.error || "Something went wrong"}</h1>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
      {data.products.map((product) => (
        <div
          key={product._id}
          className="relative max-w-md rounded-xl bg-linear-to-r from-neutral-600 to-violet-300 shadow-lg overflow-hidden"
        >

          {/* FIXED IMAGE SECTION */}
          <div className="h-60 w-full overflow-hidden rounded-t-xl">
            <img
              src={`${base}/${product.image}`}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <Card className="border-none rounded-none">
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p>{product.detail}</p>
            </CardContent>

            <CardFooter className="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase">Price</span>
                <span className="text-xl font-semibold">Rs. {product.price}</span>
              </div>
            </CardFooter>
          </Card>

        </div>
      ))}
    </div>
  );
}
