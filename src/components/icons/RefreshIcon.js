import React from "react";
import PropTypes from "prop-types";

const RefreshIcon = ({ className }) => {
    return (
        <svg
            className={className}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.2735 9.34016H9.2535C9.07669 9.34016 8.90712 9.4104 8.78209 9.53543C8.65707 9.66045 8.58683 9.83002 8.58683 10.0068C8.58683 10.1836 8.65707 10.3532 8.78209 10.4782C8.90712 10.6033 9.07669 10.6735 9.2535 10.6735H10.8535C10.1181 11.442 9.16977 11.973 8.13027 12.1984C7.09078 12.4238 6.00764 12.3332 5.02001 11.9383C4.03239 11.5434 3.18541 10.8622 2.58789 9.98228C1.99037 9.10232 1.66961 8.06381 1.66683 7.00016C1.66683 6.82335 1.59659 6.65378 1.47157 6.52876C1.34654 6.40373 1.17697 6.3335 1.00016 6.3335C0.823352 6.3335 0.653782 6.40373 0.528758 6.52876C0.403734 6.65378 0.333496 6.82335 0.333496 7.00016C0.337021 8.30203 0.721643 9.57438 1.4399 10.6602C2.15815 11.746 3.17861 12.5977 4.37532 13.1103C5.57204 13.6229 6.89265 13.7739 8.17418 13.5446C9.4557 13.3153 10.6421 12.7159 11.5868 11.8202V13.0002C11.5868 13.177 11.6571 13.3465 11.7821 13.4716C11.9071 13.5966 12.0767 13.6668 12.2535 13.6668C12.4303 13.6668 12.5999 13.5966 12.7249 13.4716C12.8499 13.3465 12.9202 13.177 12.9202 13.0002V10.0002C12.9185 9.82792 12.8503 9.663 12.7297 9.53996C12.6092 9.41692 12.4457 9.34532 12.2735 9.34016ZM7.00016 0.333496C5.29109 0.338371 3.64916 0.999439 2.4135 2.18016V1.00016C2.4135 0.823352 2.34326 0.653782 2.21823 0.528758C2.09321 0.403734 1.92364 0.333496 1.74683 0.333496C1.57002 0.333496 1.40045 0.403734 1.27543 0.528758C1.1504 0.653782 1.08016 0.823352 1.08016 1.00016V4.00016C1.08016 4.17697 1.1504 4.34654 1.27543 4.47157C1.40045 4.59659 1.57002 4.66683 1.74683 4.66683H4.74683C4.92364 4.66683 5.09321 4.59659 5.21823 4.47157C5.34326 4.34654 5.4135 4.17697 5.4135 4.00016C5.4135 3.82335 5.34326 3.65378 5.21823 3.52876C5.09321 3.40373 4.92364 3.3335 4.74683 3.3335H3.14683C3.88181 2.56541 4.82956 2.0345 5.86843 1.8089C6.9073 1.58331 7.98989 1.67333 8.97723 2.0674C9.96458 2.46148 10.8116 3.14164 11.4097 4.02057C12.0077 4.89949 12.3294 5.93709 12.3335 7.00016C12.3335 7.17697 12.4037 7.34654 12.5288 7.47157C12.6538 7.59659 12.8234 7.66683 13.0002 7.66683C13.177 7.66683 13.3465 7.59659 13.4716 7.47157C13.5966 7.34654 13.6668 7.17697 13.6668 7.00016C13.6668 6.12468 13.4944 5.25778 13.1594 4.44894C12.8243 3.6401 12.3333 2.90517 11.7142 2.28612C11.0952 1.66706 10.3602 1.176 9.55139 0.840966C8.74255 0.505935 7.87564 0.333496 7.00016 0.333496Z"
                fill="currentColor"
            />
        </svg>
    );
};

RefreshIcon.propTypes = {
    className: PropTypes.string,
};

RefreshIcon.defaultProps = {
    className: "",
};

export default RefreshIcon;