/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] =  useState(""); //use to save input data from user
    const [recentPrompt,setRecentPrompt] = useState("") //when user click on sent btn, input data will be saved in recent prompt and we display it on component
    const [prevPrompts,setPrevPrompts] = useState([]) //to store all history of prompts
    const [showResult,setShowResult] = useState(false) //for true it hide cards/boxes of suggestions
    const [loading,setLoading] = useState(false); //for true loading animation take place
    const [resultData,setResultData] = useState("") //show actual result got from gemini

    const onSent = async (prompt) => {
        // await run(prompt)
        await run(input)
    }

    // onSent("What is react Js")

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;