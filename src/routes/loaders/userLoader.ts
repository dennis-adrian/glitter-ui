import { getUser } from "../../api/helpers";

export const userLoader = async () => {
  if (localStorage.getItem('userId') && localStorage.getItem('accessToken')) {
    return await getUser(localStorage.getItem('userId')!);
  }

  return null;
}
