const CustomButton = ({className, children,...rest}) => {
    return (
        <button {...rest} className={`rounded-full px-5 py-2 hover:shadow-md transition-all ${className}`}>
            {children}
        </button>
    );
};

export default CustomButton;