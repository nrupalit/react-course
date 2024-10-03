import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useGetDate } from '../hooks/useGetDate';
import { useGetTime } from '../hooks/useGetTime';
import CalenderModal from './CalenderModal';
import { eventAction, modalAction } from '../redux/actions';

ViewEvent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    start: PropTypes.any.isRequired,
    end: PropTypes.any.isRequired,
    handleClose: PropTypes.func.isRequired
}
export default function ViewEvent({ id, title, start, end, handleClose }) {
    const dispatch = useDispatch();
    const { date } = useGetDate(start);
    const startTime = useGetTime(start)
    const endTime = useGetTime(end)
    const handleDeleteEvent = () => {
        dispatch(eventAction.removeEvent(id));
        dispatch(modalAction.closeAllModal());
    }
    const EventDetails = () => {
        return (<>
            <h3>Event Name: {title}</h3>
            <p>event is schudled for: {date}</p>
            <p>Start Date: {startTime}</p>
            <p>End Date: {endTime}</p>
            <Button onClick={handleDeleteEvent}>Delete event</Button>
        </>)
    }
    return (
        <>
            <CalenderModal body={<EventDetails />} isModalOpen={true} handleClose={handleClose} submit="Close" />
        </>
    );
}