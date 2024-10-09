"use client";
import { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from './components/Header/Header';
import DistrictsSelect from './components/DistrictsSelect/DistrictsSelect';
import { getEvents } from "@/services/libraryEventsAPI";


function App() {
    const [libraryEvents, setLibraryEvents] = useState([])

    const Map = useMemo(() => dynamic(
        () => import('./components/Map/Map'),
        { loading: () => <p>A map is loading</p>, ssr: false }
    ), [])

    const setAllEvents = async () => {
        try {
            const data = await getEvents();
            setLibraryEvents(data); // Aquí tengo ya los eventos de las bibliotecas
            // if (data.length === 0) setError('No hay eventos')
        } catch (err) {
            console.error(err)
        }
    }

    const handleSelectDistrict = () => {

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
                <Map libraryEvents={libraryEvents} />
            </main>
        </>
    );
}

export default App;