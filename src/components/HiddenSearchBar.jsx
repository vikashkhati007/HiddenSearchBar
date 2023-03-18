import React, { useEffect, useState, useRef} from 'react'
import { BsSearch } from "react-icons/bs"

export default function HiddenSearchBar() {
    const [showSearchBar, setSearchbar] = useState(false);
    const [text, setText] = useState("");
    const bsstyleicon = {
        position: "absolute",
        right: "2px",
        top: "5px",
        color: "white",
        cursor: "pointer",
        margin: "2px 10px",
        fontSize: "1.5rem"
    }
    const inputstyleicon = {
        margin: "20vh 40vw",
        background: "transparent",
        outline: "none",
        border: "none",
        borderBottom: "2px solid white",
        color: "white",
        paddingRight : "50px",
        paddingLeft : "50px",
        boxShadow: "20px 20px 20px 700px rgba(0,0,0,0.8)",
        opacity: 0.9,
        height: "30px",
        width: "200px",
        borderRadius: "20px",
        border: "2px solid white",
        textAlign: "center",
        transition : " 15s ease",

    }
    const container = {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    function Iconhandler() {
        setSearchbar(true);
        RefElement.current.focus();
    }

    useEffect(() => {
        document.body.style.background = "purple";
        document.body.style.transition = "all .5s ease";
    }, [showSearchBar]);

    function onBlurHandler(){
        setSearchbar(false);
    }

    const title = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    }

    function inputTextHandler(e){
        setText(e.target.value);
    }

const RefElement = useRef();
    return (
        <div style={container}>
            {!showSearchBar ? <BsSearch onClick={Iconhandler} style={bsstyleicon} /> : <div> <h1 style={title}>{!text ? "Enter Your Text In Input": "Search : " + text}</h1><input onRef = {RefElement} onBlur={onBlurHandler} autoFocus type="text" style={inputstyleicon} onChange = {inputTextHandler} placeholder= "Enter Your Input"/></div>}
        </div>
    )
}
