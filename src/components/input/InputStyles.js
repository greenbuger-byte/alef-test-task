import styled from "styled-components";

import * as colors from "@alef/theme/colors";
import * as typo from "@alef/theme/typography";

export const InputWrapper = styled.div`
  border: .1rem solid ${props => props.withError ? colors.alert : colors.gray};
  border-radius: ${colors.radius4};
  height: 5.6rem;
  flex: 1;
  margin: 1rem 0;
  position: relative;
`;

export const ErrorMessage = styled.div`
  color: ${colors.alert};
  margin: 0 .3rem;
  ${typo.LABEL_R};
`;

export const Label = styled.div`
  ${typo.LABEL_R};
  display: flex;
  padding: .8rem 1.6rem 0.2rem 1.6rem;
  color: ${colors.gray48};
`;

export const StyledInput = styled.input`
  ${typo.TX_R};
  color: ${colors.dark};
  border: none;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0 1.6rem;
  outline: none;
`;