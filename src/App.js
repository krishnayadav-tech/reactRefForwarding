import { useRef } from 'react';
import InputField from './InputField'
const App = ()=>{
    let myref = useRef(null);
    let handleclick = ()=>{
        myref.current.focus();
    }
    return (
        <>
            <h1>React App!</h1>
            <InputField ref={myref}></InputField>
            <button onClick={handleclick} style={{margin:'10px',padding:"10px 20px",backgroundColor:"white"}} type="button">Focus Input</button>
        </>
    )
    
}
export default App;