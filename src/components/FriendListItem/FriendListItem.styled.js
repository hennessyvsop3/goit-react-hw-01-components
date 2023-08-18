import styled from "styled-components";

export const FriendItemer = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-between;
  background-color: aqua;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 255, 0.2);
  padding-right: 10px;

  & span {
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ isOnline }) => (isOnline ? "green" : "red")};
  }
`;