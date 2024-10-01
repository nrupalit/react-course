export function useGetTime(initialValue) {
    const convertedTime = new Date(initialValue);
    console.log(convertedTime);

    const time = `${convertedTime.getHours()}: ${convertedTime.getMinutes()}`;
    return {
        time
    }
}