import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import server from '../../constants';
import Styles from './Profile.module.css';

function Profile() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState();

    useEffect(() => {
        if (user == null) navigate('/login')
        const token = user == null ? '' : user.token;
        axios.get(`${server}/profile`, { headers: { "Authorization": token } })
            .then(res => {
                console.log(res.data.msg);
                const profile = res.data.msg;
                setName(profile.name);
                setEmail(profile.email);
                setPassword('');
                setDate(profile.date);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const updateHandler = (event) => {
        event.preventDefault();
        const data = {
            name,
            password,
            email
        }
        const token = user == null ? '' : user.token;
        axios.post(`${server}/profile`, { data }, { headers: { "Authorization": token } })
            .then(res => {
                alert('Details updated! Please login again');
                dispatch(logout());
                navigate('/login')
            })
            .catch(err => {
                if (err.response.status === 401) dispatch(logout());
                else console.log(err);
            })
    }

    return (
        <div className={Styles.main}>
            <form onSubmit={updateHandler} className={Styles.form}>
                <h1 className={Styles.h1}>Profile</h1>
                <label>Joined At: {new Date(date).toLocaleDateString('en-GB')}</label>
                <label>
                    Name: <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                </label>
                <label>
                    Email: <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password: <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button className={Styles.button}>Update</button>
            </form>
        </div>
    )
}

export default Profile;