import styled from "styled-components";

import Icon from "@alef/components/icons/icon";

import * as typo from "@alef/theme/typography";
import * as colors from "@alef/theme/colors";

export const FlashMessageWrapper = styled.div`
  ${typo.LABEL_R};
  color: ${colors.alert};
  background-color: ${colors.red};
  padding: 1rem;
  border-radius: ${colors.radius3};
  transition: .6s;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  height: 2.2rem;
  width: 2.2rem;
  cursor: pointer;
`;
export const CloseBtn = styled(Icon)`
  fill: ${colors.white};
  svg{
    fill: ${colors.white}
  }
  
`;