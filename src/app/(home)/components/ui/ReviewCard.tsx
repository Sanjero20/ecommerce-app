import Card from "@/components/ui/Card";
import StarRating from "@/components/StarRating";
import { Review } from "@/types/index.types";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <Card className="flex flex-col gap-2 border bg-white p-6">
      <StarRating rating={review.rating} />

      {/* Customer Name */}
      <div className="flex items-center gap-1">
        <p className="text-xl font-bold sm:text-base">{review.name}</p>

        {/* Chechmark */}
        <div className="flex h-4 w-4 scale-75 items-center justify-center rounded-full bg-green-600 p-3 font-bold text-white">
          &#10003;
        </div>
      </div>

      {/*  */}
      <p className="text-sm text-black/60 lg:text-base">
        &ldquo;{review.content} &rdquo;
      </p>
    </Card>
  );
};

export default ReviewCard;
