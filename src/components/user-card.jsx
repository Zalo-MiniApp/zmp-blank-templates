import React from "react";
import { Avatar, Box, Text } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";

const UserCard = () => {
  const { userInfo } = useRecoilValue(userState);

  return (
    <Box flex>
      <Avatar
        story="default"
        online
        src={userInfo.avatar.startsWith("http") ? userInfo.avatar : undefined}
      >
        {userInfo.avatar}
      </Avatar>
      <Box ml={4}>
        <Text.Title>{userInfo.name}</Text.Title>
        <Text>{userInfo.id}</Text>
      </Box>
    </Box>
  );
};

export default UserCard;
