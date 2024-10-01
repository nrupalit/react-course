export function useGetTime(initialValue) {
    const convertedTime = new Date(initialValue);
    const time = `${convertedTime.getHours()}: ${convertedTime.getMinutes()}`;
    return {
        time
    }
}