export const Logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const User_logo =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const Api_key = "99a19b798656695ca83a603fb4903db5";
export const Api_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWExOWI3OTg2NTY2OTVjYTgzYTYwM2ZiNDkwM2RiNSIsInN1YiI6IjY1N2VmYjk2OTA0ZjZkMDcyNDdmYTUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pMY_9ko1pRI7ACHUV54mhvwCk591FsEODwj57LVkN8c",
  },
};

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function isInt32(value) {
  return (
    Number.isSafeInteger(value) && value >= -(2 ** 31) && value <= 2 ** 31 - 1
  );
}

export const IMG_cdn = "https://image.tmdb.org/t/p/w500";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg";
