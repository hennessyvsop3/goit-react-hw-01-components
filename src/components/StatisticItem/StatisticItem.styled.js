import styled from "styled-components";

export const LiItem = styled.li`
  background: ${props => {
    return props.color
  }};
  width: 96px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;