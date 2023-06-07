import { SVGProps } from "react";

const Logo = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="48"
            viewBox="0 0 157.717 127.685"
            {...props}
        >
            <path
                d="M37.552 47.452H185.71L161.814 76.81H62.319Z"
                style={{ fill: "#ececec", strokeWidth: 0.264583 }}
                transform="translate(-34.036 -40.554)"
            />
            <path
                d="m77.435 89.368 73.14.341-18.421 26.286-54.562-.341z"
                style={{ fill: "#ececec", strokeWidth: 0.242523 }}
                transform="translate(-34.036 -40.554)"
            />
            <path
                d="M77.776 128.448h45.403L98.6 163.952l-20.995.17z"
                style={{ fill: "#ececec", strokeWidth: 0.264583 }}
                transform="translate(-34.036 -40.554)"
            />
        </svg>
    );
};

export default Logo;
