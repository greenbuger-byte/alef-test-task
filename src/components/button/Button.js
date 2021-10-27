import { StyledIcon, StylesButton } from "./Button.styles";
import PropTypes from "prop-types";

const Button = (props) => {
    const { variant, label, icon, ...remainingProps } = props;
    return (<StylesButton variant={variant}{...remainingProps}>
                {icon && <StyledIcon size={23} name={icon} />}
                {label}
            </StylesButton>);
};

Button.propTypes = {
    /** вариант отображения кнопки **/
    variant: PropTypes.oneOf(["default", "outlined", "primary", "ghost"]),
    /** название кнопки **/
    label: PropTypes.string,
    /** иконка в кнопке **/
    icon: PropTypes.string,
}

Button.defaultProps = {
    variant: 'default',
}


export default Button;