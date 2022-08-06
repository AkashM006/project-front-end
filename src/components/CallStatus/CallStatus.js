import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";
import server from "../../constants";
import Styles from './CallStatus.module.css';

export default function CallStatus() {
  const user = useSelector(state => state.user);
  const [calls, setCalls] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) navigate('/login')
    const token = user == null ? '' : user.token;
    axios
      .get(`${server}/call`, { headers: { "Authorization": token } })
      .then(res => {
        if (res.data.calls) {
          setCalls(res.data.calls);
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          dispatch(logout());
        }
        else console.log(err);
      })
  }, [user]);

  if (calls.length === 0) {
    return (
      <center>
        <div>
          <h1>You have no calls history...</h1>
        </div>
      </center>
    )
  }

  if (user && user.type === 1) {
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
              <td>{call.status === 1 ? 'Finsihed' : 'Pending'}</td>
              <td>{call.engineer === null ? 'Not assigned' : call.engineer}</td>
              <td className={Styles.main}>
                <Link to={`/user/calls/${call.id}`}>
                  <input className={Styles.button} value='View' type='button' />
                </Link>
              </td>
            </tr>)
          })}

        </tbody>
      </table>
    );
  }

  if (user && user.type === 3) {
    return (
      <table>
        <tbody>
          <tr>
            <th>Booked At</th>
            <th>Complaint Description</th>
            <th>Customer</th>
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
              <td>{new Date(call.createdAt).toLocaleDateString('en-GB')}</td>
              <td>{call.complaint}</td>
              <td>Akash</td>
              <td>{call.status === 1 ? 'Finsihed' : 'Pending'}</td>
              <td>{call.engineer === null ? 'Not assigned' : call.engineer}</td>
              <td className={Styles.main}>
                <Link to={`/user/calls/${call.id}`}>
                  <input className={Styles.button} value='View' type='button' />
                </Link>
              </td>
            </tr>)
          })}

        </tbody>
      </table>
    );
  }
}