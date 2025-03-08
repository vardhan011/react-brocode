export default function Button() {
    let count = 0;
    const handleclick = (name) => {
        if (count < 3) {
            console.log(`${name} clicked me ${count} time`);
            count++;
        }
        else {

            console.log(`${name} stop clicking me its already ${count++}`);
        }

    };

    const handleclick2 = (name) => console.log(`${name} stop clicking me`);
    return (<button onClick={() => handleclick("broo")}>Click me</button>);
    //onclick event handlers
}