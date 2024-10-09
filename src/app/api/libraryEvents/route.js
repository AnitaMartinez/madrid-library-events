import parseData from "../modules/parse";

async function fetchEventDetails(events) {
    return Promise.all(events.map(async (event) => {
        const eventResponse = await fetch(event['@id']);
        const eventData = await eventResponse.json();
        const parsedEvent = parseData(eventData);
        return parsedEvent[0];
    }));
}


export async function GET(request) {
    const district = request.nextUrl.searchParams.get("district")
    const query = district ? `?distrito_nombre=${encodeURIComponent(district)}` : '';
    const urlAllEvents = `https://datos.madrid.es/egob/catalogo/206717-0-agenda-eventos-bibliotecas.json${query}`;

    try {
        const response = await fetch(urlAllEvents);
        const data = await response.json();

        const events = data['@graph'];
        if (!events || !events.length) {
            return new Response(JSON.stringify([]), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const parsedData = district ? await fetchEventDetails(events) : parseData(data);

        return new Response(JSON.stringify(parsedData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}


