import PropTypes from 'prop-types';
import CalenderModal from './CalenderModal';
import { useGetDate } from '../hooks/useGetDate';
import { useGetTime } from '../hooks/useGetTime';

ViewEvent.propTypes = {
    title: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
}
export default function ViewEvent({ title, start, end, handleClose }) {
    const { date } = useGetDate(start);
    const startTime = useGetTime(start)
    const endTime = useGetTime(end)
    const EventDetails = () => {
        return (<>
            <h3>Event Name: {title}</h3>
            <p>event is schudled for: {date}</p>
            <p>Start Date: {startTime}</p>
            <p>End Date: {endTime}</p>
        </>)
    }
    return (
        <>
            <CalenderModal body={<EventDetails />} isModalOpen={true} handleClose={handleClose} submit="Close" />
        </>
    );
}