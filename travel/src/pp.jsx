export default function Pp() {
    const imageurl = './src/assets/react.svg';

    const handleclick = (e) => e.target.style.display = "none";
    return (
        <img onClick={(e) => handleclick(e)} src={imageurl} />




    );
}