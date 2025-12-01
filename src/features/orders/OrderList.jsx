

import { Button } from "@/components/ui/button";
import { useGetOrdersQuery } from "./orderApi";
import { Table,TableBody,TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function OrderList({user}) {
    const {data, isLoading, error} = useGetOrdersQuery(user.token);
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;
    console.log(data)
    return (
        <div>
            <div>
      <div className='[&>div]:rounded-sm [&>div]:border'>
        <Table>
          <TableHeader>
            <TableRow className='hover:bg-transparent'>
              <TableHead>OrderId</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>View More</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.orders.map(item => (
              <TableRow key={item._id}>
               
                <TableCell>{item._id}</TableCell>
                <TableCell>Rs.{item.totalAmount}</TableCell>
                <TableCell>
                    <Button>View More</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
        </div>
    )
}
