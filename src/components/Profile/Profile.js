import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import server from '../../constants';
import Styles from './Profile.module.css';

function Profile() {
    const user = useSelector(state => state.user);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState();

    useEffect(() => {
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
    }, [])

    return (
        <div className={Styles.main}>
            <div className={Styles.form}>
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
            </div>
        </div>
    )
}

export default Profile;