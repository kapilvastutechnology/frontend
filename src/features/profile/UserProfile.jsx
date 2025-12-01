
import { useSelector } from "react-redux"
import OrderList from "../orders/OrderList";

export default function UserProfile() {
    const {user} = useSelector((state) => state.userSlice);
    return (
        <div>
            <OrderList user={user} />
        </div>
    )
}
