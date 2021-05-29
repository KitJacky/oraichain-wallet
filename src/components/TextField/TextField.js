import React from "react";
import cn from "classnames/bind";
import PropTypes from "prop-types";
import _ from "lodash";
import { useFormContext } from "react-hook-form";
import styles from "./TextField.module.scss";

const cx = cn.bind(styles);

const TextField = ({ type, name, placeholder, autoComplete, className }) => {
    const { register } = useFormContext();
    return (
        <input
            className={
                cx("text-field") + (!_.isNil(className) ? ` ${className}` : "")
            }
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            {...register(name)}
        />
    );
};

TextField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
};
TextField.defaultProps = {
    type: "text",
    placeholder: "",
    autoComplete: "",
};

export default TextField;
