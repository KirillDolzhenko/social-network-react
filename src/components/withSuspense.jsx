import React from "react";
import Loading from "./Users/UsersBlock/Loading/Loading";

let withSuspense = (Component) => {

    let Component2 = (props) => {
        return <React.Suspense fallback={<Loading />}>
            <Component {...props}/>
        </React.Suspense>
    }

    // debugger 

    return (props) => {
        return <React.Suspense fallback={<Loading />}>
            <Component {...props}/>
        </React.Suspense>
    }
}

export default withSuspense