function Button({
    children,
    type, 
    disabled, 
    onClick
}) {

    return (
        <button 
            type={type}
            disabled={disabled}
            onClick={onClick}

            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 md:py-4 rounded-xl font-semibold transition duration-200 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
        >
            {children}
        </button>
    );
}

export default Button;