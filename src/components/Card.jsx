function Card({children, className=""}) {

    return(
        <div className="{`bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 ${className}`}">
            {children}
        </div>
    );
}

export default Card;