import HttpService from "./HttpService";

export const LoadProfile = () => {
  const http = new HttpService();
  let profileUrl = "users/dashboard";
  const tokenId = "user-token";

  return http
    .getData(profileUrl, tokenId)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
