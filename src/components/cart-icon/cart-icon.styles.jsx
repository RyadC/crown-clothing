import { styled } from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const SPAN_ItemCount = styled.span``;

export const SHOPPINGICON_ShoppingIcon = styled(ShoppingIcon)``;

export const DIV_CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${SHOPPINGICON_ShoppingIcon} {
    width: 24px;
    height: 24px;
  }

  ${SPAN_ItemCount} {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`;
