"use client";
import { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from './components/Header/Header';
import FullPageLoader from './components/FullPageLoader/FullPageLoader';
import DistrictsSelect from './components/DistrictsSelect/DistrictsSelect';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import { getEvents } from "@/services/libraryEventsAPI";


function App() {
    const [libraryEvents, setLibraryEvents] = useState([]);
    const [isByDistrict, setIsByDistrict] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const Map = useMemo(() => dynamic(
        () => import('./components/Map/Map'),
        { loading: () => <FullPageLoader />, ssr: false }
    ), [])

    const setAllEvents = async () => {
        try {
            setError(null);
            setIsByDistrict(false);
            const data = await getEvents();
            setLibraryEvents(data);
            if (data.length === 0) setError({ type: 'warning', message: 'Actualmente no hay eventos que mostrar' });
        } catch (err) {
            console.error(err);
            setError({ type: 'error', message: 'Ha ocurrido un error. Inténtelo de nuevo más tarde' });
        }
    }

    const handleSelectDistrict = async (district) => {
        try {
            setError(null);
            setLoading(true);
            if (!district) setIsByDistrict(false)
            else setIsByDistrict(true);

            const data = await getEvents({ district });
            setLibraryEvents(data);
            if (data.length === 0) setError({ type: 'warning', message: 'Actualmente no hay eventos en este distrito' });
        } catch (err) {
            console.error(err)
            setError({ type: 'error', message: 'Ha ocurrido un error. Inténtelo de nuevo más tarde' });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const init = async () => {
            await setAllEvents();
        }
        init();

    }, []);

    return (
        < >
            <Header />
            <main>
                <DistrictsSelect onSelectDistrict={handleSelectDistrict} loading={loading} />
                {error && <ErrorNotification error={error} />}
                <Map isByDistrict={isByDistrict} libraryEvents={libraryEvents} />
            </main>
        </>
    );
}

export default App;