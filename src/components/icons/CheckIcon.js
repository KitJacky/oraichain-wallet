import React from "react";
import PropTypes from "prop-types";

const CheckIcon = ({className}) => {
	return (
		<svg className={className} width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M3.73959 5.96338C3.66298 5.96347 3.5871 5.94841 3.51632 5.91908C3.44555 5.88975 3.38127 5.84672 3.32717 5.79246L1.08727 3.55257C1.0326 3.49853 0.989151 3.43421 0.959426 3.36331C0.929702 3.29241 0.914286 3.21634 0.914065 3.13946C0.913844 3.06259 0.928822 2.98643 0.958138 2.91536C0.987454 2.84429 1.03053 2.77972 1.08489 2.72536C1.13925 2.671 1.20381 2.62792 1.27488 2.5986C1.34594 2.56928 1.4221 2.5543 1.49898 2.55452C1.57586 2.55474 1.65193 2.57015 1.72283 2.59987C1.79373 2.62959 1.85805 2.67303 1.9121 2.7277L3.73959 4.55517L8.08727 0.207519C8.19673 0.0985118 8.34497 0.0373833 8.49946 0.0375484C8.65394 0.0377135 8.80205 0.0991585 8.91128 0.2084C9.02052 0.317641 9.08195 0.465755 9.0821 0.620239C9.08226 0.774724 9.02112 0.922959 8.9121 1.03242L4.15201 5.79251C4.09791 5.84676 4.03363 5.88978 3.96285 5.9191C3.89208 5.94842 3.8162 5.96347 3.73959 5.96338Z'
				fill='currentColor'
			/>
		</svg>
	);
};

CheckIcon.propTypes = {
	className: PropTypes.string,
};

CheckIcon.defaultProps = {
	className: "",
};

export default CheckIcon;
