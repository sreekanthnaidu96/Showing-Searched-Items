import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar"


function OnScreenRender(){
    return (<div>
        <SearchBar items={["eyes","ears","nose","mouth","hair","hands","legs","fingers","nails","boobs"]}/>
        <SearchBar items={["bike","car","cycle","plane","heli","jet","bus","train","auto"]}/>
    </div>)
}


ReactDOM.render(<OnScreenRender/>,document.getElementById("root"));