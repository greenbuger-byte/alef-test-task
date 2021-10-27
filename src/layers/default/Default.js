import React from 'react';
import PropTypes from "prop-types";
import Header from "@alef/components/header";
import { MetaTags } from 'react-meta-tags';
import { useTranslation } from "react-i18next";

import Logo from "@alef/components/icons/Logo";
import Footer from "@alef/components/footer/Footer";

import { Content } from "./Default.styles";

const Default = ({children, title}) => {
    const { t } = useTranslation();
    const HEAD = {
        title: t('page.home'),
        description: t('page.description'),
        image: Logo,
    }
    return (
        <>
            <MetaTags>
                <title>{title || HEAD.title}</title>
            </MetaTags>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </>
    );
};

Default.propTypes = {
    /** контент страницы **/
    children: PropTypes.node,
    /** название страницы **/
    title: PropTypes.string,
}

export default Default;