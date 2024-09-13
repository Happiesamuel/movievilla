"use client";
import Menu, { MenuButton } from "../_context/Menu";
import { addToWatchlist, deleteFromWatchlist } from "../_lib/action";
function ClientMenuButton({ obj, watchlist }) {
  const isAdded = watchlist.map((watch) => watch.movieId).includes(obj.id);
  function handleClick(obj) {
    const newObj = {
      title: obj.title,
      releaseDate: obj.releaseDate,
      rating: obj.rating,
      type: obj.type,
      movieId: obj.id,
      image: obj.post,
      rate: 0,
    };
    isAdded ? deleteFromWatchlist(newObj.movieId) : addToWatchlist(newObj);
  }
  return (
    <Menu>
      <MenuButton onClick={() => handleClick(obj)}>
        {!isAdded ? "Add to watchlist" : "Remove from watchlist"}
      </MenuButton>
    </Menu>
  );
}

export default ClientMenuButton;
