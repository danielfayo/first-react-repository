function Btn(){
    let isDarkMode = false;
    const clickHandler = () => {
        isDarkMode = !isDarkMode
        isDarkMode ? console.log("Dark Mode") : console.log("Light Mode");
    }
    return(
        <button onClick={clickHandler}>
            Button
        </button>
    );
};


export default Btn;