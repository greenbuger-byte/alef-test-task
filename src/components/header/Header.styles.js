import styled from "styled-components";
import { NavLink } from "react-router-dom";

import * as colors from "@alef/theme/colors";
import * as typo from "@alef/theme/typography";
import { cover } from "@alef/theme/layers";

export const HeaderWrapper = styled.div`
  background-color: ${colors.white};
  box-shadow: ${colors.shadow};
  height: 7.6rem;
  position: sticky;
  top:0;
  background-color: ${colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  z-index: ${cover};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 126.2rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const HeaderBlock = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.content ? props.content : 'start'};
`;

export const NavigationMenu = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const NavigationMenuItem = styled.li`
  ${typo.TX_R};
  display: inline-flex;
  padding: 0 1.2rem;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  ${typo.TX_R};
  color: ${colors.gray48};
  :hover{
    color: ${colors.dark};
  }
  &.active {
    color: ${colors.dark};
  }
`;