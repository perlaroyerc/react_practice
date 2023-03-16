import react, {useState, useEffect} from 'react';


export default function ButtomChallenge () {

    const [status, setStatus] = useState(true);

    return (
        <>
        <button onClick={(() => setStatus((status) => !status))}>Show/Hide</button>
        {status ? <h2>Welcome</h2> : null}
        </>
    );

};