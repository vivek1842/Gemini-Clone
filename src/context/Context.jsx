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

    const delayPara = (index, nextWord) => {
        setTimeout(function (){
            setResultData(prev => prev+nextWord)
        },75*index) //delay duration * index
    }

    const onSent = async (prompt) => {

        setResultData("") //everytime our result data will be empty i.e. prev response won't be there
        setLoading(true) //loading animation
        setShowResult(true)
        setRecentPrompt(input) 

        setPrevPrompts(prev => [...prev,input]);

        // await run(prompt)
        const response = await run(input);
        let responseArray = response.split("**");
        let newResponse = ""; //if it's only declared but not initiated, in response 'undefined' word will also come with response from gemini

        for(let i=0; i<responseArray.length;i++) 
        {
            if(i === 0 || i%2 !== 1) {
                newResponse += responseArray[i];
            }
            else{
                newResponse += '<b>' + responseArray[i] + '</b>'
            }
        }
        
        let newResponse2 = newResponse.split("*").join("</br>")

        // setResultData(response); //store response get from gemini to setResult
        // setResultData(newResponse);
        // setResultData(newResponse2);
        let newResponseArray  = newResponse2.split(" "); //we remove space here
        for(let i=0; i<newResponseArray.length;i++)
        {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord+" "); //we added the removed space
        }
        setLoading(false) //stop loading animation
        setInput("") //input field will be reset
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