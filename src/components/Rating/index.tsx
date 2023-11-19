import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

export default function Rating({
  ratingVal,
  numReviews,
}: {
  ratingVal: number;
  numReviews: number;
}) {
  return (
    <>
      <div className="flex items-center text-yellow-600">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>
            {ratingVal >= index + 1 ? (
              <RiStarFill />
            ) : ratingVal >= index + 0.5 ? (
              <RiStarHalfFill />
            ) : (
              <RiStarLine />
            )}
          </span>
        ))}
        <p className="pl-2 text-xs font-bold text-red-800">
          ({numReviews} reviews)
        </p>
      </div>
    </>
  );
}
