import * as React from "react";
import PropTypes from "prop-types";

function CloseIcon({fill, remainingProps}) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill={fill && 'currentColor'}
            height="1em"
            width="1em"
            {...remainingProps}
        >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
    );
}

CloseIcon.propTypes = {
    /** цвет заливки **/
    fill: PropTypes.string,
}

export default CloseIcon;
