import styled from "styled-components";

export const generateRandomColor = () => {
  return (
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
  );
};

export const Statisticser = styled.section`
  & h2 {
    width: 480px;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
    height: 110px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: #696969;
  }

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
   
  }
`;