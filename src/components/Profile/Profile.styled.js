import styled from "styled-components";

export const Profiler = styled.div`
  background-color: #48d1cc;
  width: 480px;
  margin: 0 auto;

  & img {
    width: 132px;
    height: 132px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
  }

  & div {
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
  & ul {
    margin: 0 auto;

    display: flex;
    justify-content: center;
    gap: 8px;
    & li {
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: tomato;
      border: 5px;
      border-color: black;
      & .label{
        font-weight: bold;
        background-color: violet;
      }
    }
  }
`;
