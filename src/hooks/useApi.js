import { useEffect, useState } from "react";

export const useApi = (url) => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(resData => setData(resData));
   }, [url]);

   return [data, setData];
}