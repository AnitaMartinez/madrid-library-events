import districtsEnum from "../utils/districts.json";
const urlAllEvents = '/api/libraryEvents';

const getEvents = (params) => {
    const districtKey = params?.district
        ? Object.keys(districtsEnum).find(key => districtsEnum[key] === params.district)
        : null;

    const url = districtKey ? `${urlAllEvents}?district=${districtKey}` : urlAllEvents;

    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                resolve(data);
            })
            .catch((err) => reject(err));
    });
};

export {
    getEvents,
};
