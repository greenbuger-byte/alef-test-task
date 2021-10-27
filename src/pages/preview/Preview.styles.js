import styled from "styled-components";

import * as typo from "@alef/theme/typography";

import Button from "@alef/components/button";

export const PreviewTitleHeader = styled.div`
  ${typo.TITLE_B}
  margin-top: 1rem;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDefaultButton = styled(Button)`
  margin-bottom: 2rem;
`;

export const ParentTitle = styled.div`
  ${typo.TITLE_UB}
  margin-bottom: 4rem;
`;
