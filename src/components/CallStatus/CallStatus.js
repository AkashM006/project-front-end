import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import server from "../../constants";

export default function CallStatus() {
  const user = useSelector(state => state.user);
  const [calls,setCalls] = useState([])
  
  useEffect(() => {
    axios
    .get(`${server}/call`,{headers: {"Authorization":user.token}})
    .then(res => {
      console.log(res);
      if(res.data.calls)
        setCalls(res.data.calls);
    })
    .catch(err => {
      console.log(err);
    })
  },[]);

  return <h1> Call Status</h1>;
}
