import { CurrentUserState } from "../store/features/currentUserSlice";
import { baseUrl } from "../utils";

const cleanUserForPostRequest = (user: CurrentUserState) => {
  const cleanedUser = { ...user };
  delete cleanedUser.id;
  delete cleanedUser.accessToken;
  delete cleanedUser.isLoggedIn;

  if (cleanedUser.instagramProfile[0] === '@') {
    cleanedUser.instagramProfile = cleanedUser.instagramProfile.slice(1);
  }

  return cleanedUser;
}

export const postUser = async (data: CurrentUserState) => {
  const url = `${baseUrl}/users`;
  const cleanedUser = cleanUserForPostRequest(data);

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cleanedUser),
  });

  const createdUser = await res.json();
  return createdUser;
};
