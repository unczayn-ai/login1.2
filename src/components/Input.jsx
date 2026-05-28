function Input({
    type,
    placeholder,
    value,
    onChange,
    autocomplete
}) {
    
    return (
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete = {autocomplete}

            className="w-full p-4 mb-4 border border-gray-300 rounded-xl outline-none bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 fucus:bg-white focus:ring-2 focus:ring-blue-500 transition"
        />
    );
}

export default Input;