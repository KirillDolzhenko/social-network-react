import React from "react";

const StateContext = React.createContext(null);

export const Provider = (props) => {
    return <StateContext.Provider value={props.store}>
        {props.children}
    </StateContext.Provider>
}

export default StateContext;