import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, clearData } from '../actions/swapiActions';

const SwapiComponent = () => {
    const [query, setQuery] = useState('');
    const [showData, setShowData] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector(state => state.swapi.data);
    const loading = useSelector(state => state.swapi.loading);
    const error = useSelector(state => state.swapi.error);

    const handleFetchData = () => {
        if (query.trim() !== '') {
            dispatch(fetchData(query));
            setShowData(true);
        }
    };

    const handleClearData = () => {
        dispatch(clearData());
        setQuery(''); 
        setShowData(false);
    };

    return (
        <div className="container">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your query"
                className="query-input"
            />
            <button onClick={handleFetchData} className="fetch-button">Get</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="result">
                {showData && data ? (
                    <div className="data-window">
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                ) : (
                    <div className="data-window">
                        
                    </div>
                )}
            </div>
            <footer>
                <button onClick={handleClearData} className="clear-button">Clear</button>
            </footer>
        </div>
    );
};

export default SwapiComponent;
