export async function sendAndReceiveJson(url, requestData = null) {
    try {
        const options = {
            method: requestData ? 'POST' : 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (requestData) {
            options.body = JSON.stringify(requestData);
        }

        const response = await fetch(url, options);

        if (!response.ok) {

            throw new Error(`Error al enviar la solicitud. Código de estado: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        alert('No se pudo encontrar coninsidencias, por favor intente con otra busqueda');
        return null;
    }

}
