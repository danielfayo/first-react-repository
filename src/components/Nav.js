let desi = 14;
let randomNum = () => {
    return Math.floor(Math.random() * 10);
}

let data = {
    heading: '90% off',
    text: 'Everything must go'
}

function Nav(children){
    return(
        <>
            <input type='number' onChange={(e) => children(e.target.value)} />
        </>
    );
};

export default Nav;