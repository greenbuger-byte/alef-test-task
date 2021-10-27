import React from 'react';
import {useTranslation} from "react-i18next";

import Icon from "@alef/components/icons/icon";

import { pages } from "@utils/pages";

import {
    HeaderBlock,
    HeaderContainer,
    HeaderWrapper,
    NavigationMenu,
    NavigationMenuItem,
    StyledLink
} from "./Header.styles";

const Header = () => {
    const { t } = useTranslation();

    const MENU = [
        { title: t('menu.form'), link: pages.HOME },
        { title: t('menu.preview'), link: pages.PREVIEW },
    ];

    const renderMenu = MENU && MENU
        .map((item, index) => (
            <NavigationMenuItem key={index}>
                <StyledLink to={item.link} exact >
                    {item.title}
                </StyledLink>
            </NavigationMenuItem>));

    return (
        <HeaderWrapper>
            <HeaderContainer>
              <HeaderBlock content="start">
                  <Icon logo="Logo" size={93}/>
              </HeaderBlock>
              <HeaderBlock content="center">
                  <NavigationMenu>
                      {renderMenu}
                  </NavigationMenu>
              </HeaderBlock>
              <HeaderBlock content="end">
              </HeaderBlock>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;