import ReviewCard from "./ui/ReviewCard";
import { CUSTOMER_REVIEWS } from "@/data/customer-reviews";

const CustomerReviews = () => {
  return (
    <section>
      <div>
        <h2 className="mb-8 mt-16">our happy customers</h2>

        {/* Arrow Keys */}
        <div>
          {/*  */}
          {/*  */}
        </div>
      </div>

      {/* Review Card List*/}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {CUSTOMER_REVIEWS.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
