import { useEffect, useState } from "react";

const useReviews = (comment) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [comment]);

  return [reviews, setReviews];
};

export default useReviews;
