export default function List(){
    const fruits=["apple","orange","banana","pineapple"];
    const listitems=fruits.map(fruits=><li>{fruits}</li>)
    fruits.sort();
    return(
        <ul>{listitems}</ul>
        
    );
}