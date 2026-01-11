import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Formik } from "formik";
import { useCreateReviewMutation } from "./ReviewApi";
import toast from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner";


export default function ReviewForm({user,id}) {
  const [createReview,{isLoading}] = useCreateReviewMutation();
  return (
    <div>

      <h1 className="mb-3"> Add Review</h1>

      <Formik
      initialValues={{
        comment: '',
        rating: ''
      }}

      onSubmit={async(val)=>{
        try {
          await createReview({
            token: user.token,
            body: {
              product:id,
              comment: val.comment,
              rating: Number(val.rating)
            }
          }).unwrap();
          toast.success('Review added successfully');
        } catch (err) {
          console.log('hello')
          toast.error(err.data.message);
        }
      }}
      >
        {({handleChange, handleSubmit, setFieldValue})=>(
          <form
          onSubmit={handleSubmit}
          className="space-y-5 max-w-lg" >
            <Textarea
            onChange={handleChange}
            name="comment"
            placeholder="Write your review here"
            />

          <Select
             name="rating"
             onValueChange={(value) => setFieldValue('rating', value)}
             >
             <SelectTrigger
             className="w-full">
            <SelectValue placeholder="Select Experience" />
            </SelectTrigger>
           <SelectContent>
           <SelectGroup>
           <SelectItem value="1">Bad</SelectItem>
           <SelectItem value="2">Satisfy</SelectItem>
           <SelectItem value="3">Good</SelectItem>
           <SelectItem value="4">Very Good</SelectItem>
          <SelectItem value="5">Excellent</SelectItem>
          </SelectGroup>
          </SelectContent>
        </Select>

            <Button disabled={isLoading} type="submit">
              {isLoading && <Spinner />}
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}