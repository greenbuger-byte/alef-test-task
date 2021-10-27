import styled from "styled-components";

import Input from "@alef/components/input";
import * as colors from "@alef/theme/colors";
import * as typo from "@alef/theme/typography";

export const StyledForm = styled.form`
  margin: 0 0;
  width: 89%;
`;
export const FormPersonalTitle = styled.h2`
  ${typo.TITLE_B};
  color: ${colors.dark};
`;

export const StyledInput = styled(Input)`
  
  width: 100%;
  flex: 1;
`;

export const FormPersonalTitleHeader = styled.div`
  ${typo.TITLE_B}
  margin-top: 2rem;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChildrenInputs = styled.div`
  display: flex;
  width: 100%;
  height: 6.5rem;
  align-items: center;
  
`;
export const ChildControl = styled.div`
  width: 100%;
  margin-right: 1.6rem;
`;