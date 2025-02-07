export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const CLEAR_DATA = 'CLEAR_DATA';

export const fetchData = (query) => {
    const customData = {
        name: `Character: ${query}`,
        height: "172",
        mass: "77",
    };

    return (dispatch) => {
        dispatch({ type: FETCH_DATA_REQUEST });
        try {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: customData });
        } catch (error) {
            dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
        }
    };
};

export const clearData = () => {
    return { type: CLEAR_DATA };
};
