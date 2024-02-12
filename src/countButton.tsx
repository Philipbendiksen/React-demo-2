import { ReactNode, useState } from "react";


interface Props {

    title?: string; 
    children?: ReactNode; 
}



function CountButton (props: Props) {

    const [count, setCount] = useState(0); 


    return ( <button 
        
        className="bg-slate-200 rounded-full px-4 py-2"
        onClick={() => setCount(count + 1)}
    > 
    
    {props.children}: {count} </button> 
    ); 
}

export default CountButton; 

