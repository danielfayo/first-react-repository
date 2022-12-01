import React, { useState } from "react";

function Btn(){
    const [form, setForm] = useState({ 
        firstName: 'Luke', 
        lastName: 'Jones', 
        email: 'lukeJones@sculpture.com', 
    });
    function handleEvent(e){
        setForm({ 
            ...form, 
            firstName: e.target.value 
            }); 
    }
    return(
        <label>First Name: 
            <input value={form.firstName} 
            onChange={handleEvent} />
        </label>
    );
};

export default Btn;