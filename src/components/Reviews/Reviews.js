import React from "react";
import useReviews from "../Hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-8">Ours Customers Reviews</h2>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="grid grid-cols-3 gap-3 -m-4">
            {reviews.map((review) => (
              <Review key={review._id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
