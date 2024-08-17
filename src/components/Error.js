import React from "react";
import { useRouteError } from "react-router-dom";


const Error = () => {

    const err = useRouteError();

    return <>

        <h1>Error Occurred</h1>
        <h2>{err.status} : {err.statusText} </h2>
        <h2>{err.data} </h2>
    </>
}

export default Error