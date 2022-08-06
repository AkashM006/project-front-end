import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import server from "../../constants";
import Styles from './CallStatus.module.css';

export default function CallStatus() {
  const user = useSelector(state => state.user);
  const [calls,setCalls] = useState([])
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios
    .get(`${server}/call`,{headers: {"Authorization":user.token}})
    .then(res => {
      if(res.data.calls){
        setCalls(res.data.calls);
      }
    })
    .catch(err => {
      if(err.response.status === 400){
        alert('Session expired. Please login again');
        dispatch(logout());
      }
      else console.log(err);
    })
  },[]);

  if(calls.length === 0){
    return (
      <center>
        <div>
          <h1>You have no calls history...</h1>
        </div>
      </center>
    )
  }

  if(user.type === 1){
    return (
      <table>
      <tbody>
        <tr>
            <th>Complaint Description</th>
            <th>Status</th>
            <th>Engineer</th>
            <th>View</th>
        </tr>
        {/* <tr>
            <td>Computer Won’t Turn On</td>
            <td>Pending</td>
            <td>Akash</td>
            <td className={Styles.main}>
              <input className={Styles.button} value='View'type='button'/>
            </td>
        </tr> */}
        {calls.map(call => {
          return (<tr key={call.id}>
            <td>{call.complaint}</td>
            <td>{call.status === 1? 'Finsihed':'Pending'}</td>
            <td>{call.engineer === null?'Not assigned':call.engineer}</td>
            <td className={Styles.main}>
              <Link to={`/user/calls/${call.id}`}>
                <input className={Styles.button} value='View'type='button'/>
              </Link>
            </td>
          </tr>)
        })}
        
      </tbody>
    </table>
      );
  }
}