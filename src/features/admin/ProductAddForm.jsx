import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Formik } from "formik"

export default function ProductAddForm() {
  return (
    
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle>Product Create</CardTitle>
      </CardHeader>
      <CardContent>

        <Formik
        initialValues={{
            title: '',
            detail: '',
            price: '',
            category: '',
            brand: '',
            image: '',
            imageReview: ''
        }}

        onSubmit={(val)=>{
            console.log(val);
        }}

        
        >
            {({handleChange,handleSubmit, touched, errors, setFieldValue, values})=>(
                <form
                onSubmit={handleSubmit}
                >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                name="title"
                onChange={handleChange}
                value={values.title}
                id="title"
                type="title"
                placeholder="Product title"
              />
            {touched.title && errors.title && <p>{errors.title}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="detail">Detail</Label>
              <Textarea
                name="detail"
                onChange={handleChange}
                value={values.detail}
                id="detail"
                type="text"
                placeholder="Product detail"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
               name="price"
               onChange={handleChange}
               value={values.price}
                id="price"
                type="Number"
                placeholder="Product price"
              />
            </div>

               <Select
               name="category"
               onValueChange={(value)=>{
                setFieldValue('category', value);
               }}
               >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>

                  <SelectGroup>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="clothes">Clothes</SelectItem>
                    <SelectItem value="tech">Tech</SelectItem>
                    <SelectItem value=" Jewallery">Jewallery</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>


             <Select
             name="brand"
             onValueChange={(value)=>{
              setFieldValue('brand', value);
             }}
             >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Brand" />
                </SelectTrigger>
                <SelectContent>

                  <SelectGroup>
                    <SelectItem value="addidas">Addidas</SelectItem>
                    <SelectItem value="samsung">Samsung</SelectItem>
                    <SelectItem value="realme">Realme</SelectItem>
                    <SelectItem value=" nokia">Nokia</SelectItem>
                    <SelectItem value=" iphone">Iphone</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

            <div className="grid gap-2">
              <Label htmlFor="image">Image</Label>
              <Input
                 name="image"
                 onChange={handleChange}
                 value={values.image}
                id="image"
                type="file"
              />
            </div>


        <Button type="submit" className="w-full">
          Submit
        </Button>
          </div>
        </form>
            )}
        </Formik>
      </CardContent>
    </Card>
  )
}
