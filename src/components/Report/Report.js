import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
import server from '../../constants';
import { Link } from "react-router-dom"
import Styles from './Report.module.css';

function Report() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [engineers, setEngineers] = useState([]);

    useEffect(() => {
        // get details regarding all the engineers
        const token = user == null ? '' : user.token
        axios.get(`${server}/report/2`, { headers: { "Authorization": token } })
            .then(res => {
                // console.log(res.data);
                setEngineers(res.data.msg);
            })
            .catch(err => {
                if (err.response.status === 401) {
                    dispatch(logout());
                } else console.log(err);
            })

    }, []);

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>View</th>
                    </tr>
                    {engineers.map(engineer => {
                        return (
                            <tr key={engineer.id}>
                                <td>{engineer.name}</td>
                                <td>{parseFloat(engineer.avg_rating).toFixed(2)}</td>
                                <td>
                                    <Link to={`/user/report/${engineer.id}`}>
                                        <input className={Styles.button} value='View' type='button' />
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Report;