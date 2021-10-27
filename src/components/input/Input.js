import React, { forwardRef } from 'react';
import PropTypes from "prop-types";

import {
    ErrorMessage,
    InputWrapper,
    Label,
    StyledInput
} from "./InputStyles";

const Input = forwardRef((props, ref) =>{
    const { label, name, value, error, onChange, ...remainingProps } = props;

    const onChangeHandler = (ev) => {
        onChange?.(ev);
    }

    return (
        <InputWrapper withError={error}>
            { <Label>{label}{error && <ErrorMessage>{error}</ErrorMessage>}</Label>}
            <StyledInput ref={ref} name={name} onChange={onChangeHandler} {...remainingProps} />
        </InputWrapper>
    );
});

Input.propTypes = {
    /** лейбл для поля **/
    label: PropTypes.string,
    /** название поля **/
    name: PropTypes.string,
    /** значение поля **/
    value: PropTypes.string,
    /** хендлер для отслеживания изменений **/
    onChange: PropTypes.func,
    /** Ошибка заполнения поля **/
    error: PropTypes.string,
}

export default Input;