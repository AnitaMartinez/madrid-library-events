import parseData from "./parse";

export async function GET() {
    const urlAllEvents = 'https://datos.madrid.es/egob/catalogo/206717-0-agenda-eventos-bibliotecas.json';

    try {
        const response = await fetch(urlAllEvents);
        const data = await response.json();
        const parsedData = parseData(data);

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
