"use server";
import { supabase } from "./supabase";
import { auth, signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";

export async function signInWithGoogleAction() {
  await signIn("google", { redirectTo: "/guest" });
}

export async function signInWithFacebookAction() {
  await signIn("facebook", { redirectTo: "/guest" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
export async function createGuest(guest) {
  const newGuest = {
    email: guest.email,
    fullName: guest.fullName,
  };
  const { data, error } = await supabase
    .from("user")
    .insert([newGuest])
    .select();
  if (error) throw new Error("Unable to create account.");
  return data;
}
export async function getGuest(email) {
  const { data } = await supabase
    .from("user")
    .select("*")
    .eq("email", email)
    .single();
  return data;
}
export async function addToWatchlist(obj) {
  const session = await auth();
  if (!session) throw new Error("You must be login");

  const newObj = {
    title: obj.title,
    releaseDate: obj.releaseDate,
    rating: obj.rating,
    type: obj.type,
    movieId: obj.movieId,
    image: obj.image,
    userId: session.user.guestId,
  };
  const { error } = await supabase.from("watchlist").insert([newObj]).select();
  if (error) throw new Error("Failed to add to watchlist.");
  revalidatePath("/guest");
  // return data;
}

export async function getWatchlist(id, sort) {
  const session = await auth();
  if (!session) throw new Error("You must be login");
  let query = supabase.from("watchlist").select("*").eq("userId", id);
  if (sort?.field)
    query = query
      .order(sort.field, {
        ascending: sort.direction === "asc",
      })
      .select();
  else query = query.select();
  console.log(sort);
  const { data, error } = await query;

  if (error)
    throw new Error("Failed to load.. Check your internet and try again.");
  revalidatePath("/guest/watchlist");
  return data;
}
export async function deleteFromWatchlist(id) {
  const session = await auth();
  if (!session) throw new Error("You must be login");
  const watch = await getWatchlist(session.user.guestId);
  const watchIds = watch.map((wat) => wat.movieId);
  if (!watchIds.includes(id))
    throw new Error("You are not allowed to delete this watchlist");
  const { error } = await supabase.from("watchlist").delete().eq("movieId", id);
  if (error) throw new Error("unable to get to watchlist");
  revalidatePath("/guest");
}

export async function updateRating(id, obj) {
  const session = await auth();
  if (!session) throw new Error("You must be login");
  const watch = await getWatchlist(session.user.guestId);
  const watchIds = watch.map((wat) => wat.movieId);
  if (!watchIds.includes(id))
    throw new Error("You are not allowed to add to this rating");

  const { data, error } = await supabase
    .from("watchlist")
    .update(obj)
    .eq("movieId", id)
    .select();
  if (error) throw new Error("Failed to add rating");
  revalidatePath("/guest/watchlist");

  return data;
}
