import {useState} from "react";
import "./App.css"
function App() {

  const[Item,setItem]=useState([{Item:""}]);

  console.log(Item)
  const handleItem=()=>{
    setItem([...Item,{Item:""}])
  }

  
  const handleRemove=(index)=>{
    const list=[...Item]
    list.splice(index,1)
    setItem(list)
  }



  const handleUpdate=(e,index)=>{
    const{name,value}=e.target
    const list=[...Item]
    list[index][name] = value;
    setItem(list);
  }
  return (
    <>
    <h1 className="heading">Welcome to ToDo App</h1>

   <form className="App" aria-autocomplete="off">
     
     <div className="form-field">
      <label htmlFor="Item">Items</label>
      {Item.map((singleItem,index)=>(
            <div key={index} className="services">
              <div className="first-division">
                <input name="Item" type="text" id="Item" required
                value={singleItem.Item}
                onChange={(e)=>handleUpdate(e,index)}
                />
                
                
                {Item.length -1 === index && 
                <button onClick={handleItem} type="button" className="add-btn">
                  <span>Add New One</span>

                </button>}

              </div>
              <div className="second-division">
              {Item.length !== 1 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => handleRemove(index)}

                >
                  <span>Remove</span>
                </button>
              )}
            </div>

            </div>







      ))}


     </div>
     
     <div className="output">
        <h2>Output</h2>
        {Item &&
          Item.map((singleItem, index) => (
            <ul key={index}>
              {singleItem.Item && <li>{singleItem.Item}</li>}
            </ul>
          ))}
      </div>

     </form>

     </>
  );
}

export default App;
