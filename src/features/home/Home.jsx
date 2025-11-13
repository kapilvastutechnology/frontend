import { useGetProductsQuery } from "../products/productApi"

export default function Home() {
    const {data} = useGetProductsQuery();
    console.log(data)

      const products = data?.data || [];

    return (
       <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((item) => (
        <div
          key={item._id}
          className="border rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-200"
        >
           <img
              src={`http://localhost:5000/uploads/${item.image}`}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-500">{item.detail}</p>
          <p className="font-bold mt-2">Rs. {item.price}</p>
          <p className="text-sm text-gray-400">Category: {item.category}</p>
        </div>
      ))}
    </div>
    )
}
