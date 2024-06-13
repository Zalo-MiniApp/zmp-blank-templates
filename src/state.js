import { atom, selector } from "recoil";
import { getUserInfo } from "zmp-sdk/apis";

export const userState = selector({
  key: "user",
  get: () =>
    getUserInfo({
      avatarType: "normal",
    }),
});

export const displayNameState = atom({
  key: "displayName",
  default: "",
});
