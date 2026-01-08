import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Formik } from "formik";
import { useCreateReviewMutation } from "./ReviewApi";
import { Spinner } from "@/components/ui/spinner";
import toast from "react-hot-toast";

export default function ReviewForm({user,id}) {
    const [createReview,{isLoading}] = useCreateReviewMutation();
  return (
    <div>
        <h1 className="mb-3" >Add Review</h1>
      <Formik
      initialValues={{
        comment: '',
        rating: ''
      }}

      onSubmit={async(val)=>{
        try {
            await createReview({
                token:user.token,
                body:{
                    prduct:id,
                    comment:val.comment,
                    rating:Number(val.rating)
                }
            }).unwrap();
            toast.success('Review added successfully');
        } catch (err) {
            toast.error(err.data.message);
        }
      }}
      >
        {()=>(
            <form className="space-y-5 max-w-lg" >
                <Textarea
                name="comment"
                placeholder="Write a review"
                />

                <Select
                  name="rating"
                   onValueChange={(value) => setFieldValue('rating', value)}
                   >
                    <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Experience" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectGroup>
                    <SelectItem value="1">Bad</SelectItem>
                    <SelectItem value="2">Satisfy</SelectItem>
                    <SelectItem value="3">Good</SelectItem>
                    <SelectItem value="4">VeryGood</SelectItem>
                    <SelectItem value="5">Excellent</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                    </Select>
                
         
                <Button disabled={isLoading} type="submit" >
                {isLoading && <Spinner />} Submit  </Button>
            </form>
        )}
      </Formik>
    </div>
  )
}
