import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFullData } from './features/dataReducer'; // Import the action

const Signup = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const axios_Api_call = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon');
                const responseData = await response.json();
                const full_data = responseData.results;
                setData(full_data);

                // Dispatch the action to store full_data
                dispatch(setFullData(full_data));
            } catch (error) {
                console.log(error);
            }
        };

        axios_Api_call();
    }, [dispatch]);

    return (
        <div>
            {data.map((item, id) => (
                <div key={id}>
                    <h1>{item.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Signup