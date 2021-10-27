import styled from "styled-components";
import * as colors from "@alef/theme/colors";
import * as typo from "@alef/theme/typography";

export const FooterWrapper = styled.div`
  ${typo.TX_B};
  background-color: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.gray48};
  height: 7.6rem;
  margin-top: 13.6rem;
`;