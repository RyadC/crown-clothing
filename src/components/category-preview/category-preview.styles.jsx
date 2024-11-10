import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const DIV_CategoryPreview = styled.div``;

export const LINK_CategoryTitle = styled(Link)``;

export const DIV_CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  ${LINK_CategoryTitle} {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  ${DIV_CategoryPreview} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`;

// .category-preview-container {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;

//   .category-title {
//     font-size: 28px;
//     margin-bottom: 25px;
//     cursor: pointer;
//   }

//   .preview {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 20px;
//   }
// }
