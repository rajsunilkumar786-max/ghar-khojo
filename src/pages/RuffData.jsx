import { useCallback, useEffect, useRef, useState } from "react";

const RuffData=()=>{
    const [length,setLength]=useState(8);
    const [numberAllowed,setNumberAllowed]=useState(false);
    const [charAllowed,setCharAllowed]=useState(false);
    const [Password,setPassword]=useState("");
    // useReff 
    const PasswordRef=useRef(null)

const passGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="~!@#$%^&*()_+{}[],./<>?";
    for (let i=1; i<=length; i++){
        let char =Math.floor(Math.random()*str.length+1);
        pass += str.charAt(char);
    }
    setPassword(pass);
},[length,numberAllowed,charAllowed,setPassword]);
const copyPasswordToClipboard=useCallback(()=>{
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(Password)
},[Password]) 

useEffect(()=>{
passGenerator();

},[length,numberAllowed,charAllowed,passGenerator])
    
    return(
        <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-red-700">
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                type="text"
                value={Password}
                className="outline w-full py-1 text-green-900 px-3"
                placeholder="Password"
                readOnly
                ref={PasswordRef}
                />
                <button onClick={copyPasswordToClipboard}
                 className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
                    Copy
                </button>
            </div>
            <div className="flex text-sm  gap-x-2">
                <div className=" flex text-green items-center gap-x-1">
                    <input 
                    type="range"
                    min={8}
                    max={100}
                    value={length}
                    className="cursor-pointer"
                    onChange={(e)=>setLength(e.target.value)}
                    />
                    <label>Length:{length}</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input 
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    onChange={()=>{
                        setCharAllowed((prev)=>!prev);
                    }}
                    />
                    <label htmlFor="numberInput"> Numbers</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="characterInput"
                    onChange={()=>{
                        setCharAllowed((prev)=>!prev);
                    }}
                    />
                    <label htmlFor="characterInput">Characters</label>
                </div>
            </div>
        </div>
        </>
    );
};
export default RuffData;