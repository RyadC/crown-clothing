import { styled } from "styled-components";

export const DIV_Arrow = styled.div``;

export const SPAN_Value = styled.span``;

export const SPAN_Name = styled.span``;

export const SPAN_Price = styled.span``;

export const SPAN_Quantity = styled.span``;

export const DIV_RemoveButton = styled.span``;

export const DIV_ImageContainer = styled.div``;

export const DIV_CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  ${DIV_ImageContainer} {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  ${SPAN_Name},
  ${SPAN_Quantity},
  ${SPAN_Price} {
    width: 23%;
  }

  ${SPAN_Quantity} {
    display: flex;

    ${DIV_Arrow} {
      cursor: pointer;
    }

    ${SPAN_Value} {
      margin: 0 10px;
    }
  }
  ${DIV_RemoveButton} {
    padding-left: 12px;
    cursor: pointer;
  }
`;

// .checkout-item-container {
//   width: 100%;
//   display: flex;
//   min-height: 100px;
//   border-bottom: 1px solid darkgrey;
//   padding: 15px 0;
//   font-size: 20px;
//   align-items: center;

//   .image-container {
//     width: 23%;
//     padding-right: 15px;

//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
//   .name,
//   .quantity,
//   .price {
//     width: 23%;
//   }

//   .quantity {
//     display: flex;

//     .arrow {
//       cursor: pointer;
//     }

//     .value {
//       margin: 0 10px;
//     }
//   }

//   .remove-button {
//     padding-left: 12px;
//     cursor: pointer;
//   }
// }
