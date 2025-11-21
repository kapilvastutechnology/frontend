import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "./cartSlice";

export default function AddToCart({product}) {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const increment = () => setQty(qty + 1);
    const decrement = () => setQty(qty - 1);

    const handleCart = () => {
        dispatch(setCart({
            title:product.title,
            price:product.price,
            stock:product.stock,
            image:product.image,
            qty
        }));
    }
    return (
        <div className=" space-y-5" >
            <div className="flex gap-4" >
            <Button disabled={qty === 1} onClick={decrement} ><MinusIcon/>
            </Button>
            <h3>{qty}</h3>

            <Button disabled={qty === product.stock} onClick={increment}><PlusIcon/>
            </Button>
            </div>
            <Button onClick={handleCart} size="lg" className={'bg-green-700'} >Add to Cart</Button>
        </div>
    )
}
