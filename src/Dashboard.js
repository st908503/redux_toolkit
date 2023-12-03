import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const fullData = useSelector((state) => state.data.fullData);
    console.log(fullData, "From Dashboard")


    const postData = async () => {
        try {
            const apiUrl = 'http://localhost:8000/api/test';
            const requestData = fullData
            const response = await axios.post(apiUrl, requestData);
            console.log('Response:', response.data);
        } catch (error) {

            console.error('Error:', error);
        }
    };


    return (
        <div>
            <button onClick={postData}>send</button>
        </div>
    );
};

export default Dashboard;
