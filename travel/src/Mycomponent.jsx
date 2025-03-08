import { useState } from "react";


export default function Mycomponent() {
    const [name, setName] = useState("one gova");
    const updatename = () => {
        setName(" two govaa");
    }
    const [age, setAge] = useState(0);

    const increaseage = () => {
        setAge(age + 1);
    }

    const [Isempole, setEmpoled] = useState(false);

    const seeempole = () => {
        setEmpoled(!Isempole);
    }

    return (
        //we are going to us react hooks like 
        //usestate,useeffets etc
        //which can be used to chnage te date one the display
        //statefullcomponent//
        //with this hook we can reduce he changing of virtualdom
        <> <div>
            <p>Name: {name}</p>
            <button onClick={updatename}>Set Name</button>

        </div>

            <div>
                <p>age : {age}</p>
                <button onClick={increaseage}>Increasee age</button>
            </div>


            <div>
                <p>isempoleyed: {Isempole ? "Yes" : "no"}</p>
                <button onClick={seeempole}>change status</button>
            </div>

        </>
    );
}