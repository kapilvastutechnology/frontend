import { useParams } from "react-router"
import { useGetOrderQuery } from "./orderApi";

export default function Order() {
    const {id} = useParams();
    const {data, isLoading, error} = useGetOrderQuery(id);
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1 className="text-pink-500" >{error?.error}</h1>;
    console.log(data);
    return (
        <div>
            {data && <div> 
                <h3>{data.order._id}</h3>
                </div> }
        </div>
    )
}
