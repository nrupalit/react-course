import moment from "moment";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { eventAction, modalAction } from "../redux/actions";
import CalenderModal from "./CalenderModal";
import CustomToolbar from "./CustomToolbar";
import EventForm from "./EventForm";
import ViewEvent from "./ViewEvent";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function DashboardCalendar() {
  const dispatch = useDispatch();
  const eventsData = useSelector(state => state.event.events);
  const isCalenderFormOpen = useSelector(state => state.modal.isCalenderFormOpen);
  const isEventDetailsOpen = useSelector(state => state.modal.isEventDetailsOpen);
  const [selectedEvent, setSelectedEvent] = useState(undefined);
  // const selectedDate = useSelector(state => state.event.date);

  const handleSubmit = (e) => {
    dispatch(eventAction.addEvent(
      {
        start: e.startTime,
        end: e.endTime,
        title: e.meetingName,
        id: e.id
      }
    ));
    dispatch(modalAction.setCalenderFormModal(false))
  };

  const handleSelect = ({ start, end }) => {
    dispatch(modalAction.setCalenderFormModal(true));
    dispatch(eventAction.setSelectedEvent({ start: start.getTime(), end: end.getTime() }));
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    dispatch(modalAction.setEventDetailsModal(true))

  }
  const handleEventDetailsClose = (payload) => {
    dispatch(modalAction.setEventDetailsModal(payload))
  }
  const handleCalenderFormClose = (payload) => {
    dispatch(modalAction.setCalenderFormModal(payload))
  }
  return (
    <>
      {isEventDetailsOpen && <ViewEvent {...selectedEvent} handleClose={handleEventDetailsClose} />}
      {isCalenderFormOpen &&
        <CalenderModal body={<EventForm submitForm={handleSubmit} />} isModalOpen={isCalenderFormOpen} handleClose={handleCalenderFormClose} />
      }
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData.map(event => {
          return { ...event, start: new Date(event.start), end: new Date(event.end) }
        })}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => handleSelectEvent(event)}
        onSelectSlot={handleSelect}
        components={{
          toolbar: CustomToolbar
        }}
      />

    </>
  );
}
