import { Movie } from "./movies";

export function yearCompare(a: Movie, b: Movie) {
  return a.year - b.year;
}

export function titleCompare(a: Movie, b: Movie) {
  const regex = /The\s/gm;
  // const referenceString = regex.test(a.title) ? a.title.split(regex) : [a.title];
  // const compareString = regex.test(b.title) ? b.title.split(regex) : [b.title];
  // console.log(referenceString, compareString);

  const referenceString = a.title.replace(regex, "");
  const compareString = b.title.replace(regex, "");
  return referenceString.localeCompare(compareString);
}

export function genreCompare(movie: Movie, genre: string) {
  return movie.genres.includes(genre);
}

export function sortYear(movies: Movie[]): Movie[] {
  return movies.sort(yearCompare);
}

export function sortTitle(movies: Movie[]): Movie[] {
  return movies.sort(titleCompare);
}

export function inGenre(movies: Movie[], genre: string): Movie[] {
  return movies.filter((movie) => genreCompare(movie, genre));
}
