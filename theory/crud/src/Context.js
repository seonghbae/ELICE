import { Context } from 'express-validator/src/context';
import { createContext } from 'react';
import './Context.css';

const themeDefault = {
    color: 'green',
    border: 'green 5px dotted',
}

const context = createContext(themeDefault);

function App() {
    return (
        <>
            <h1>0</h1>
            <Child1></Child1>
        </>
    );
}

function Child1() {
    const themes = useContext(context);
    return <div style={themes}>
        <h1>1</h1>
        <Child2></Child2>
    </div>
}

function Child2() {
    const themes = useContext(context);
    return <div style={themes}>
        <h1>2</h1>
        {/* context 관련 컴포넌트들은 해당 이하 컴포넌트에서는 아래처럼 덮어쓰여짐 */}
        <context.Provider value={{ ...themes, border: 'blue 5px dashed' }}>
            <Child3></Child3>
        </context.Provider>
    </div>
}

function Child3() {
    const themes = useContext(context);
    return <div style={themes}>
        <h1>3</h1>
        <Child4></Child4>
    </div>
}

function Child4() {
    const themes = useContext(context);
    return <div style={themes}>
        <h1>4</h1>
    </div>
}

export default App;