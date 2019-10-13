import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Origin(props) {
    const [origin, setOrigin] = useState();
    let home = props.origin;
    console.log(props)

    useEffect(() => {
        async function fetchData() {
            try {
                const originData = await axios.get(home);
                setOrigin(originData);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [home])
    return(
        <p>Origin: {origin}</p>
    );
}