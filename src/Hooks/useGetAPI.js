import {useState, useEffect} from "react";
import axios from "axios";

const useGetApi = (url) => {
const [data, setData] = useState(null);

  useEffect(()=> {
    axios.get(url).then(res => {
      setData(res.data);
    })
  },[])
  return console.log(data);
}

export default useGetApi;