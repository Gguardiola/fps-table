
import useSWR from 'swr';
import { useEffect, useState } from 'react';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useApiCall = (req) => {
    console.log("APIHOOK: "+req)

    if(req == "/api/addData"){
        const { data, error, isLoading } = useSWR("/api/addData", fetcher)
        console.log("add");
        setApiCall(req)
        if (error) return console.log("failed");
        //Handle the loading state
        if (!data) return console.log("loading");
    }
  


    return [req];

    



}

export default useApiCall;
