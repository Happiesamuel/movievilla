import { formatDistance, subDays } from "date-fns";
import { getMovieDetails } from "../_services/tmbd-data-services";
import RatedStar from "./RatedStar";

async function Reviews({ slug, id, type }) {
  const { results } = await getMovieDetails(type, id, slug);
  if (!results.length) return null;
  const reviews = results.map((result) => {
    return {
      content: result.content,
      time: result.created_at,
      username: result.author_details.username,
      rating: result.author_details.rating || 0,
      id: result.id,
    };
  });
  return (
    <>
      <h1 className="text-zinc-100 mt-5 font-bold mb-3 text-xl bg-zinc-900 rounded-md px-5 py-1">
        Reviews
      </h1>
      <div className="flex gap-3 flex-col ">
        {reviews.map((review) => {
          const days = formatDistance(new Date(), new Date(review.time), {
            addSuffix: true,
          });

          return (
            <div
              key={review.id}
              className="bg-zinc-900 px-3 py-4 rounded-e-2xl"
            >
              <div className="flex items-center justify-between pb-3 flex-wrap">
                <h4 className="text-zinc-200 font-bold text-lg">
                  {review.username}
                </h4>
                <RatedStar rating={review.rating} />
              </div>
              <p className="px-3 text-zinc-400 text-sm">{`"${review.content.slice(
                0,
                1000
              )}"`}</p>
              <div className="float-end font-bold px-3 pt-2 text-zinc-200 text-sm">
                {days}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Reviews;
