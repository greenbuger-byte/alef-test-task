import React from 'react';
import PropTypes from "prop-types";

import { BtnWrapper, CloseBtn, FlashMessageWrapper } from "./FlashMessage.styles";

const FlashMessage = ({ message, withClose, show, setShow }) => {

    return (
       <>
           { show
           && <FlashMessageWrapper>
            {message}
            {withClose &&
                <BtnWrapper onClick={() => setShow?.(false)}>
                    <CloseBtn
                         name="Close"
                         size={12}
                    />
                </BtnWrapper>}
            </FlashMessageWrapper>}
       </>
    );
};

FlashMessage.propTypes = {
    /** сообщение **/
    message: PropTypes.string,
    /** добавить кнопку закрытия **/
    withClose: PropTypes.bool,
    /** отображение сообщения **/
    show: PropTypes.bool,
    /** хендлер показа **/
    setShow: PropTypes.func,
}

FlashMessage.defaultProps = {
    show: true,
}

export default FlashMessage;