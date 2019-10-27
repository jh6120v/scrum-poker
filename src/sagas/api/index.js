import axios from 'axios';
// import { loadProgressBar } from 'axios-progress-bar';

export const getSequenceListDataApi = () => {
    const instance = axios.create();

    // loadProgressBar({
    //     showSpinner: false
    // }, instance);

    return instance({
        url: 'https://my-json-server.typicode.com/jh6120v/scrum-poker/sequence',
        method: 'get',
        responseType: 'json',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
};
