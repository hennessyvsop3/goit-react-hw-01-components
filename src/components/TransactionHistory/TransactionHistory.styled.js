import styled from "styled-components";

export const Transacter = styled.table`
margin: 0 auto;
  & thead {
    background-color: #3cb371;
    color: #dcdcdc;
    & tr {
      & th {
        width: 300px;
        padding: 10px 0px;
        &:not(:last-child) {
          border-right: 1px dotted white;
        }
      }
    }
  }
  & tbody {
  }
`;