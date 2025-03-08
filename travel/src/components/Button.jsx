export default function Button() {

    const handleclick = (e) => e.target.textContent = "ouchhh";

    return (<button onDoubleClick={(e) => handleclick(e)}>Click me</button>);
    //onclick event handlers
}