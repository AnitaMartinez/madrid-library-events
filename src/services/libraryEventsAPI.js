import districtsEnum from "../utils/districts.json"
const urlAllEvents = '/api/libraryEvents';

const getEvents = (params) => {
    const url = params?.district ? `${urlAllEvents}?district=${params.district.toUpperCase()}` : urlAllEvents;

    return (
        new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => reject(err));
        })
    )
};

export {
    getEvents,
}