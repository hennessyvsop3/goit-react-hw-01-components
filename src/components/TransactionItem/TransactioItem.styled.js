import styled from "styled-components"

export const TransItemer = styled.tr`
  background-color: #F5F5F5;
  &:nth-child(even) {
    background-color: #d3d3d3;
  }
  
  & td{
    text-align: center;
    padding: 10px 0;
    font-style: italic;
  }
`;