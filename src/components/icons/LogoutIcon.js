import React from "react";
import PropTypes from "prop-types";

const LogoutIcon = ({ className }) => {
	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0)">
				<path opacity="0.5" d="M14.0001 13.0002C12.3461 13.0002 11.0001 11.6542 11.0001 10.0002C11.0001 8.34619 12.3461 7.00018 14.0001 7.00018H16V3.00024C16 1.34625 14.654 0.000244141 13 0.000244141H2.25007C1.92103 0.000244141 1.61305 0.162109 1.4261 0.433105C1.24006 0.704102 1.19813 1.04926 1.31605 1.35614L8.56611 20.3563C8.71315 20.7443 9.08504 21.0002 9.50014 21.0002H13C14.654 21.0002 16 19.6542 16 18.0002V13.0002H14.0001Z" fill="white" />
				<path opacity="0.5" d="M18.6171 14.9241C18.2441 14.769 18.0001 14.4041 18.0001 14V11H14.0001C13.4481 11 13 10.5521 13 10.0001C13 9.448 13.4481 9.00012 14.0001 9.00012H18.0001V6.00012C18.0001 5.59601 18.2441 5.23108 18.6171 5.07599C18.991 4.92108 19.4211 5.00714 19.707 5.29315L23.7071 9.29309C24.098 9.68402 24.098 10.3161 23.7071 10.707L19.707 14.7072C19.4211 14.993 18.991 15.079 18.6171 14.9241Z" fill="white" />
				<path d="M8.64606 2.10219L2.63708 0.0992038C1.28101 -0.317727 0 0.68331 0 2.0002V20.0002C0 20.8553 0.544006 21.6183 1.35406 21.8983L7.36194 23.9013C7.58295 23.9692 7.78601 24.0003 8.00006 24.0003C9.10309 24.0003 9.99994 23.1033 9.99994 22.0003V4.00027C9.99994 3.14535 9.45593 2.38235 8.64606 2.10219Z" fill="white" />
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>

	);
};

LogoutIcon.propTypes = {
	className: PropTypes.string,
};

LogoutIcon.defaultProps = {
	className: "",
};

export default LogoutIcon;
