"use client";
export function getPages(page, totalPages) {
  const tp = totalPages > 500 ? 500 : totalPages;
  const arr = Array.from({ length: tp - page + 1 }, (_, index) => page + index);
  const num = 10 - +String(page).at(-1);
  const a = arr
    .slice()
    .filter((x) => x % 10 === 0)
    .slice(0, 3);
  const b = arr
    .slice()
    .filter((x) => x % 50 === 0)
    .slice(0, 1);
  const c = arr.slice().filter((x) => x % 100 === 0);
  const d = arr.slice().slice(0, num);
  return [...new Set([...d, ...a, ...b, ...c])];
}
