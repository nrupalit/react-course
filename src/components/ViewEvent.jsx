import PropTypes from 'prop-types';
import CalenderModal from './CalenderModal';

ViewEvent.propTypes = {
    title: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
}
export default function ViewEvent({ title, start, end, handleClose }) {
    const EventDetails = () => {
        return (<>
            <h3>Event Name: {title}</h3>
            <p>Start Date: {start}</p>
            <p>End Date: {end}</p>
        </>)
    }
    return (
        <>
            <CalenderModal body={<EventDetails />} isModalOpen={true} handleClose={handleClose} submit="Close" />
        </>
    );
}