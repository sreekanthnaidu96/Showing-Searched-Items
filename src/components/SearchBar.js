import React,{useState} from 'react'

const SearchBar = (props) => {
    const[DefaultValue,specialhook]=useState("");
    const MyItems=props.items;
    const displaybutton = DefaultValue.length>0;
    const Searcheditem=MyItems.filter((singleitem)=>{return singleitem.includes(DefaultValue)})

    function changehandeler(event){
        specialhook(event.target.value)
    }

    function clearhandeler(){
        specialhook("");
    }

    return (
        <div>
            <input type="text" placeholder="Enter Something To Search" value={DefaultValue} onChange={changehandeler}/>
            <p>{displaybutton &&<button onClick={clearhandeler}>clear</button>}</p>            
            <ul>
                {Searcheditem.map((item)=>{return(<li key={item}>{item}</li>)})}
            </ul>        
        </div>
    )
}

export default SearchBar
