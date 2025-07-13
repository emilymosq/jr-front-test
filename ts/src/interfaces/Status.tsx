//representa las categorias del estado http
export type StatusCategory = '2xx' | '3xx' | '4xx' | '5xx' | 'invalid';

//la interface para el historial
export interface StatusInterface{
    code: number;
    category: StatusCategory;
    timestamp: number;
}