import React from 'react';
import PropTypes from "prop-types";

import * as icons from '../index';

import * as colors from "@alef/theme/colors";

import { IconWrapper } from "./Icon.styles";

const Icon = (props) => {
    const { name, size, fill, logo, remainingProps } = props;
    const Elem = icons[name || logo];
    if((!name || !Elem ) && !logo) return null;
    const renderIcon = () => {
        if(logo) return <Elem width={size} />
        return <Elem fill={fill} {...remainingProps}/>
    }
    return (
        <IconWrapper logo={!!logo} size={size} >
            {renderIcon()}
        </IconWrapper>
    );
};

Icon.propTypes = {
    /** название иконки **/
    name: PropTypes.string,
    /** размер иконки **/
    size: PropTypes.number,
    /** цвет иконки **/
    fill: PropTypes.string,
    /** логотип **/
    logo: PropTypes.string,
}

Icon.defaultProps = {
    fill: colors.dark
}

export default Icon;