import { useSelector } from "react-redux";

export function useGetDate() {
    const selectedDate = useSelector(state => state.event.date);
    const getDate = new Date(selectedDate.start)
    const date = `${getDate.getDate()}  ${getDate.toLocaleString('default', { month: 'long' })} ${getDate.getFullYear()}`;
    return ({
        date
    })
}