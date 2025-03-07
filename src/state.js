import { atom } from "jotai";
import { getUserInfo } from "zmp-sdk/apis";

export const userState = atom(() =>
  getUserInfo({
    avatarType: "normal",
  })
);

export const displayNameState = atom("");
