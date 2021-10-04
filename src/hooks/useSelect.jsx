import React, {useState} from 'react';


const useSelect = (stateInitial, opciones) => {

    //custom hook state
    const [state, actualizarState] = useState(stateInitial);
    
    const SelectNoticias = () =>(
        <select 
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        > 
            {opciones.map(option =>(
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
    return [state, SelectNoticias];
}
 
export default useSelect;