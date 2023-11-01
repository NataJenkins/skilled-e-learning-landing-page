import PropTypes from "prop-types";
import "./Button.scss";
export default function Button({ secondary, tertiary, onClick, text }) {
    const getButtonType = () => {
        if (secondary) {
            return "secondary";
        }
        if (tertiary) {
            return "tertiary";
        }
        return "primary";
    };
    return (
        <button className={`button ${getButtonType()}`} onClick={onClick}>
            {text}
        </button>
    );
}

Button.propTypes = {
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string,
};
