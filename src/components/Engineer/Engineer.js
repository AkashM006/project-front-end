import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { parsePath, useNavigate, useParams } from "react-router-dom";
import { logout } from "../../actions/userActions";
import server from "../../constants";
import Styles from "./Engineer.module.css";

function Engineer() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const [engineer, setEngineer] = useState({});
    const [rating, setRating] = useState(0);

    useEffect(() => {
        if (user.type !== 3) navigate("/user");
        if (user == null) dispatch(logout());
        const token = user == null ? '' : user.token;
        axios.get(`${server}/report/engineer/${id}`, { headers: { "Authorization": token } })
            .then(res => {
                // console.log(res.data.rating);
                setEngineer(res.data.msg);
                setRating(res.data.rating[0].avg_rating);
            })
            .catch(err => {
                console.log(err);
            })
    }, [user]);

    return (
        <div className={Styles.main}>
            <div className={Styles.form}>
                <h1 className={Styles.h1}>Engineer Details</h1>
                <label>Name: <span className={Styles.span}>{engineer.name}</span></label>
                <label>Rating: <span className={Styles.spanc}>{parseFloat(rating).toFixed(2)}</span></label>
                <label>Joined At: <span className={Styles.span}>{new Date(engineer.createdAt).toLocaleDateString('en-GB')}</span></label>
                <label>Email: <span className={Styles.span}>{engineer.email}</span></label>
                {engineer.engineerFeedback && engineer.engineerFeedback.length !== 0 &&
                    <>
                        <label>Feedbacks:</label>
                        <br />
                        <table>
                            <tbody>
                                <tr>
                                    <th>Rating</th>
                                    <th>Feedback</th>
                                </tr>
                                {engineer.engineerFeedback.map(engineerFeedback => {
                                    return (
                                        <tr key={engineerFeedback.id}>
                                            <td>{engineerFeedback.rating}</td>
                                            <td>{engineerFeedback.feedback}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </>
                }
            </div>
        </div >
    )
}

export default Engineer;