import { useState } from 'react';
import type {StatusCategory, StatusInterface} from "../interfaces/Status.tsx";

/*He creado un hook personalizado para manejar el historial de codigos http, por ahora
* la idea es que guarde los 10 mas recientes, con su codigo, categoria y en que tiempo.
*/
export const useStatusHistory = () => {
    const [history, setHistory] = useState<StatusInterface[]>([]);

    const getCategory = (code: number): StatusCategory  => {
        if (code >= 200 && code < 300) return '2xx';
        if (code >= 300 && code < 400) return '3xx';
        if (code >= 400 && code < 500) return '4xx';
        return '5xx';
    }

    //se llama a esta funcion cada vez que se verifica un nuevo codigo.
    const addStatus = (code: number) => {
        const category = getCategory(code);

        //se crea un nuevo objeto con el codigo, la categoria y la hora actual.
        const newEntry: StatusInterface = {
            code, category, timestamp: Date.now()
        }

        //aca se actualiza el historial.
        setHistory(prevHistory => {
            const updated = [...prevHistory, newEntry];
            return updated.slice(-10) //solo con los 10 mas recientes.
        })
    }

    return{
        history,
        addStatus
    }
}