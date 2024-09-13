export async function getMovie(type, id) {
  try {
    const res = await fetch(
      `${process.env.API_ENDPOINT}/${type}/${id}?language=en-US&api_key=${process.env.API_KEY}`
    );
    if (!res.ok)
      throw new Error("Failed to load.. Check your internet and try again.");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function getMovieDetails(type, id, endpoint) {
  try {
    const res = await fetch(
      `${process.env.API_ENDPOINT}/${type}/${id}/${endpoint}?language=en-US&api_key=${process.env.API_KEY}`
    );
    if (!res.ok)
      throw new Error("Failed to load.. Check your internet and try again.");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getLatestMovie(page = 1) {
  try {
    const res = await fetch(
      `${process.env.API_ENDPOINT}/trending/all/day?language=en-US&page=${page}&api_key=${process.env.API_KEY}`
    );
    if (!res.ok)
      throw new Error("Failed to load.. Check your internet and try again.");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function getNowPlaying(type, slug, page = 1) {
  try {
    const res = await fetch(
      `${process.env.API_ENDPOINT}/${type}/${slug}?language=en-US&page=${page}&api_key=${process.env.API_KEY}`
    );
    if (!res.ok)
      throw new Error("Failed to load.. Check your internet and try again.");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function getLatest() {
  try {
    const res = await fetch(
      `${process.env.API_ENDPOINT}/movie/latest?language=en-US&api_key=${process.env.API_KEY}`
    );
    if (!res.ok)
      throw new Error("Failed to load.. Check your internet and try again.");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function loadGenre(type) {
  try {
    const res = await fetch(
      `${process.env.API_ENDPOINT}/genre/${type}/list?language=en-US&api_key=${process.env.API_KEY}`
    );
    if (!res.ok)
      throw new Error("Failed to load.. Check your internet and try again.");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function getTvSeason(id, season) {
  try {
    const res = await fetch(
      `${process.env.API_ENDPOINT}/tv/${id}/season/${season}?language=en-US&api_key=${process.env.API_KEY}`
    );
    if (!res.ok)
      throw new Error("Failed to load.. Check your internet and try again.");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function getSearchDetails(type, query, page = 1) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/${type}?query=${query}&page=${page}&api_key=6c2c7d7d9595d6213cc097d639c95f00`
    );
    if (!res.ok)
      throw new Error("Failed to load.. Check your internet and try again.");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
