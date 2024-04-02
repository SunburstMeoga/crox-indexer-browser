import React from "react";
import { useParams } from "react-router";


const Details = () => {
    const params = useParams()
    // useEffect(() => {
    //     console.log(navigate('id'))
    // }, [])
    return <div>
        {params.id}
        this is Details page
    </div>
}

export default Details