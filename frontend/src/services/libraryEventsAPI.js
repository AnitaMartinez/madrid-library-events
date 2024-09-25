const urlAllEvents = '/api/libraryEvents';

const getEvents = () => new Promise((resolve, reject) => {
    fetch(urlAllEvents)
        .then((response) => response.json())
        .then((data) => {
            resolve(data);
        })
        .catch((err) => reject(err));
})

export {
    getEvents,
}