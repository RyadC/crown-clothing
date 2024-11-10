import { styled } from "styled-components";

export const DIV_ItemDetails = styled.div``;

export const SPAN_ItemName = styled.span``;

export const SPAN_ItemPrice = styled.span``;

export const DIV_CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  ${DIV_ItemDetails} {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    ${SPAN_ItemName} {
      font-size: 16px;
    }
  }
`;

// .cart-item-container {
//   width: 100%;
//   display: flex;
//   height: 80px;
//   margin-bottom: 15px;

//   img {
//     width: 30%;
//   }

//   .item-details {
//     width: 70%;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     padding: 10px 20px;

//     .name {
//       font-size: 16px;
//     }
//   }
// }
