import { atom } from "jotai";
import { getUserInfo } from "zmp-sdk";

// To get started with Jotai, check out: https://tutorial.jotai.org/quick-start/intro

export const userState = atom(() =>
  getUserInfo({
    avatarType: "normal",
  })
);

export const displayNameState = atom("");
