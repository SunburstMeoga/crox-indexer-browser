import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getBrc20TransferDetails } from '@/api/homeApi'


const TransferDataDetails = () => {
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        getTransferDetails()
    }, [])
    const getTransferDetails = async () => {
        let detailsInfo = await getBrc20TransferDetails({ "jsonrpc": "2.0", "method": "gettransaction", "params": { "txid": id, "fork": "202" }, "id": 83 })
        console.log(detailsInfo)
    }
    return (
        <div>
            this is transfer data details
        </div>
    )
}

export default TransferDataDetails
