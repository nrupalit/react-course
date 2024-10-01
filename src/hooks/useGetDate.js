
export function useGetDate(initialValue) {

    const getDate = new Date(initialValue)
    const date = `${getDate.getDate()}  ${getDate.toLocaleString('default', { month: 'long' })} ${getDate.getFullYear()}`;
    return ({
        date
    })
}