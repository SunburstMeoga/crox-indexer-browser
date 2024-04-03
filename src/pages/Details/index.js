import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const Details = () => {
    const params = useParams()
    const navigate = useNavigate()
    // useEffect(() => {
    //     console.log(navigate('id'))
    // }, [])
    return <div>
        {params.id}
        this is Details page
        <button onClick={() => { navigate('details/4', { replace: true }) }}>to 4</button>
    </div>
}

export default Details