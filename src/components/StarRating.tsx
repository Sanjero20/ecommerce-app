import Image from "next/image";
import star from "../../public/icons/star.svg";
import starHalf from "../../public/icons/star-half.svg";

interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  const total = Math.round(rating * 2) / 2;
  const filledStars = Math.floor(rating);
  const hasHalfStar = total - filledStars >= 0.5;

  return (
    <div className="flex">
      {[...Array(filledStars)].map((_, index) => (
        <Image key={index} src={star} alt="" />
      ))}

      {hasHalfStar && <Image src={starHalf} alt="" />}
    </div>
  );
};

export default StarRating;
