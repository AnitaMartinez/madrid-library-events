"use client";
import { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from './components/Header/Header';
import DistrictsSelect from './components/DistrictsSelect/DistrictsSelect';
import { getEvents } from "@/services/libraryEventsAPI";


function App() {
    const [libraryEvents, setLibraryEvents] = useState([]);
    const [isByDistrict, setIsByDistrict] = useState(false);

    const Map = useMemo(() => dynamic(
        () => import('./components/Map/Map'),
        { loading: () => <p>A map is loading</p>, ssr: false }
    ), [])

    const setAllEvents = async () => {
        try {
            setIsByDistrict(false);
            const data = await getEvents();
            setLibraryEvents(data); // Aquí tengo ya los eventos de las bibliotecas
            // if (data.length === 0) setError('No hay eventos')
        } catch (err) {
            console.error(err)
        }
    }

    const handleSelectDistrict = async (district) => {
        try {
            setIsByDistrict(true);
            const data = await getEvents({ district });
            setLibraryEvents(data);
            // if (data.length === 0) setError('No hay eventos')
        } catch (err) {
            console.error(err)
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
                <DistrictsSelect onSelectDistrict={handleSelectDistrict} />
                <Map isByDistrict={isByDistrict} libraryEvents={libraryEvents} />
            </main>
        </>
    );
}

export default App;