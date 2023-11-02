import PropTypes from "prop-types";
import AnimationIcon from "../../assets/icon-animation.svg";
import BusinessIcon from "../../assets/icon-business.svg";
import CryptoIcon from "../../assets/icon-crypto.svg";
import DesignIcon from "../../assets/icon-design.svg";
import PhotographyIcon from "../../assets/icon-photography.svg";
import "./Card.scss";
export default function Card({ type, title, content, actionText }) {
    const getIcon = (title) => {
        switch (title) {
            case "Animation":
                return AnimationIcon;

            case "Design":
                return DesignIcon;

            case "Photography":
                return PhotographyIcon;

            case "Crypto":
                return CryptoIcon;

            case "Business":
                return BusinessIcon;

            default:
                break;
        }
    };

    return (
        <div className={`card-container ${type}`}>
            <img src={getIcon(title)} alt="" />
            <h2 className={type === "title" ? "heading-m" : "heading-s"}>
                {title}
            </h2>
            <p className="p-m">{content}</p>
            <a href="/">{actionText}</a>
        </div>
    );
}

Card.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    actionText: PropTypes.string,
};
