import { notFound } from "next/navigation";

export default function Review({ params }) {
  const { id, reviewId } = params;
  if(reviewId > 4){
    notFound()
  }
  return (
    <div className=" text-4xl">
      Product Id {id} and review ID {reviewId}
    </div>
  );
}
