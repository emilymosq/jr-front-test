/*
* Nota: Estas dos funciones solo funcionan correctamente en desarrollo.
* El manejo de cors puede ser mas efectivo desde el backend.
*
*
* Con esta funcion se valida si el string es una url valida con protocolo http y https.
*/
export function validarURL(input:string): boolean{
    try{
        const url = new URL(input); //Intenta crear un nuevo objeto url con el input.
        return ['http:', 'https:'].includes(url.protocol); // Solo se aceptan urls con protocolo https y http
    } catch{
        return false;
    }
}

/*
* Con esta funcion obtenemos el estado de una url.
* con el metodo head pedimos los headers, sin bajar todo el contenido.
*
*/
export async function fetchStatusCode(url: string): Promise<number | 'cors' | null> {
    try{
        const response = await fetch(url, { method: 'HEAD' }); //hace una peticion a la url para ver la respuesta y que estado da.
        return response.status;
    }catch (error) {
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
            return 'cors'; // Para los errores de CORS
        }
        return null;
    }
}