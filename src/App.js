import React,{ useState } from 'react';
import './App.css';

const App = ()=> {
  const [listItemArea, setListItemArea] = useState("")
  const [items, setItems] = useState([])
  const listItems = items.map((item, i)=> <li key={i}>{item}</li>)
	//typing into text filed

const storeListItems = (event)=> {
	setListItemArea(event.currentTarget.value)
}

//pass in event when button is clicked
const handleButtonClick = (event)=> {
	setItems([...items, listItemArea])
}


return (
		<div className="list">
		<textarea onChange={storeListItems}></textarea>
		<button onClick={handleButtonClick}>Save</button>
		<ul>{listItems}</ul>
		</div>
 );
}

export default App;

