
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, setCart } from './cartSlice';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { base } from '@/app/mainApi';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableHead, TableCell, TableRow, TableHeader } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function CheckOut() {
  const { carts } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(setCart({ ...item, qty: item.qty + 1 }));
  }
  const handleRemove = (item) => {
    dispatch(setCart({ ...item, qty: item.qty - 1 }));
  }

  const handleRemoveItem = (item) => {
    dispatch(removeCart(item));
  }

  return (
    <div>
      <h2 className='font-semibold mb-5'>CheckOut Page</h2>
      <div className='grid grid-cols-[1.4fr_1fr]'>
        <div className='w-full'>
          <div className='[&>div]:rounded-sm [&>div]:border'>
            <Table>
              <TableHeader>
                <TableRow className='hover:bg-transparent'>

                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Qty</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className='w-0'>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {carts.map(item => (
                  <TableRow key={item.id} className='has-data-[state=checked]:bg-muted/50'>

                    <TableCell>
                      <div className='flex items-center gap-3'>
                        <Avatar className='rounded-sm'>
                          <AvatarImage src={`${base}/${item.image}`} alt={item.image} />
                          <AvatarFallback className='text-xs'>{item.title}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className='font-medium'>{item.title}</div>
                          <span className='text-muted-foreground mt-0.5 text-xs'>{item.brand}</span>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>{item.category}</TableCell>
                    <TableCell>
                      <div className='flex gap-5 items-center'>
                        <Button
                          onClick={() => handleRemove(item)}
                          disabled={item.qty === 1}
                          variant="outline" size="icon">
                          <MinusIcon />
                        </Button>
                        <span>{item.qty}</span>
                        <Button
                          disabled={item.qty === item.stock}
                          onClick={() => handleAdd(item)} variant="outline" size="icon">
                          <PlusIcon />
                        </Button>
                      </div>

                    </TableCell>
                    <TableCell>Rs. {item.price * item.qty}</TableCell>
                    <TableCell className='flex items-center gap-1'>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant='ghost' size='icon' className='rounded-full' aria-label={`product-${item.id}-remove`}>
                            <Trash2Icon />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete your
                              account and remove your data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleRemoveItem(item)}>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>



                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className='flex items-center flex-col'>
                <h2>Order Summary</h2>
        <div className='space-y-4 mt-6' >
          {carts.map((item)=>{
            return <div> 
              <div className='flex justify-between gap-14'>
                <span>{item.title}</span>
                  <span> {item.qty} X Rs.{item.price}</span>
              </div>
            </div>
          })}
            <p>Total items: {carts.length}</p>
          <div>
            <p>Total Price: Rs. {carts.reduce((total, item) =>
                total + item.price * item.qty, 0 )}</p>
          </div>
        </div>
        <Button className={'mt-9 px09 bg-green-700'} >Checkout</Button>
          </div>
      </div>
    </div>
  )
}

