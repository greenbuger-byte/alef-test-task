import styled from "styled-components";

import * as colors from "@alef/theme/colors";
import * as typo from "@alef/theme/typography";
import Icon from "@alef/components/icons/icon";

const variantPrimary = {
    backgroundColor: colors.sky,
    padding: `1rem 2rem`,
    color: colors.white,
    border: `0.1rem solid ${colors.sky}`,
    '&:hover': {
        backgroundColor: colors.sky2,
    },
    '&:disabled':{
        backgroundColor: colors.gray1,
    },
    svg: {
        fill: colors.white,
    }
};

const variantDefault = {
    ...typo.TITLE_UB,
    padding: `1rem 2.3rem`,
    backgroundColor: colors.gray,
    borderRadius: colors.radius3,
    border: 'none',
    color: colors.dark,
    '&:hover': {
        backgroundColor: colors.gray1,
    },
    '&:disabled':{
        color: colors.gray1,
    },
    svg: {
        fill: colors.dark,
    }
};

const variantGhost = {
    background: 'none',
    border: 0,
    color: colors.sky,
    '&:hover': {
        color: colors.sky2,
    },
    '&:disabled':{
        color: colors.gray1,
    },
    svg: {
        fill: colors.sky,
    }
};

const variantOutlined = {
    background: 'none',
    color: colors.sky,
    padding: `1rem 2.3rem`,
    border: `0.1rem solid ${colors.sky}`,
    '&:hover': {
        borderColor: colors.sky2,
        color: colors.sky2,
    },
    '&:disabled':{
        borderColor: colors.gray1,
        color: colors.gray1,
        svg: {
            path: {
                fill: colors.gray1,
            }
        }
    },
    svg: {
        width: '2.4rem',
        fill: colors.sky2,
    }
}

export const StyledIcon = styled(Icon)`
  margin: 4rem;
`;

export const StylesButton = styled.button`
  ${typo.TX_R}
  ${(props) => ({...props.variant === 'default' && variantDefault})};
  ${(props) => ({...props.variant === 'ghost' && variantGhost})};
  ${(props) => ({...props.variant === 'primary' && variantPrimary})};
  ${(props) => ({...props.variant === 'outlined' && variantOutlined})};
  
  height: 4.4rem;
  cursor: pointer;
  border-radius: ${props => props.round ? colors.radius10 : colors.radius4};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .6s;
  svg{
    margin-right: .8rem;
    padding: 0;
  }
`;