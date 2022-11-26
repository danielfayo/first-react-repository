let desi = 14;
let randomNum = () => {
    return Math.floor(Math.random() * 10);
}

function Nav(prop){
    return(
        <nav className='main-nav'>
            <ul>
                <li>Home</li>
                <li>Articles {prop.name}</li>
                <li>About {prop.name}</li>
                <li>Contact {prop.name}</li>
                <li>{prop.name}</li>
                <li>he is {prop.age}</li>
                <li>{desi}</li>
                <li>{randomNum()}</li>
            </ul>
        </nav>
    );
};

export default Nav;