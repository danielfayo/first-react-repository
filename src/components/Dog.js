import Puppy from "./Puppy";

let details = {
    firstName: 'Dylan',
    lastName: 'Joe' 
}

function Dog() {
    return (
        <Puppy name={details.lastName} /*bowlShape="square" bowlStatus="full"*/ />
    );
};

export default Dog;