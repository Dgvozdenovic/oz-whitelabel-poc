import axios from 'axios'

let config;

export const loadConfig = (instance = 1) => {
    axios.get(`http://localhost:3004/instances/${instance}`)
    .then(function (response) {
        if(!response || !response.data) config = {};
        config = response.data;
    });
}
export const getConfigForElement = (elementName) => {
    if(!config || !config[elementName]) return null;
    return config[elementName];
}

export const setInstance = (instance) => {
    loadConfig(instance);
}
