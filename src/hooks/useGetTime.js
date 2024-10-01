import moment from "moment";

export function useGetTime(initialValue) {
    const time = moment(new Date(initialValue)).format("HH:mm");
    return time;
}