import { Button, FormControl, FormGroup, Input, InputLabel } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
export default function EventForm({ submitForm }) {
    const [formData, setFormData] = useState({
        meetingName: "",
        date: "",
        startTime: "",
        endTime: ""
    });
    const selectedDate = useSelector(state => state.event.date);
    useEffect(() => {
        if (selectedDate) {
            const getDate = new Date(selectedDate.start)
            const date = `${getDate.getDate()}  ${getDate.toLocaleString('default', { month: 'long' })} ${getDate.getFullYear()}`;
            setFormData({
                ...formData,
                startTime: selectedDate.start,
                endTime: selectedDate.end,
                date
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleInput = (event) => {
        setFormData({
            ...formData,
            [`${event.target.id}`]: event.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello");

        submitForm(formData);
        // if (!error) {
        //   // Submit form
        // }
    };
    const handleTimeValues = (value, type) => {
        setFormData({
            ...formData,
            [`${type}`]: value.toISOString()

        })
    }
    return (
        <>
            <div>Schedule Meeting <h2>{formData.date}</h2></div>
            <FormControl>
                <FormGroup className="meeting-name">
                    <InputLabel htmlFor="meetingName">Name</InputLabel>
                    <Input id="meetingName" value={formData.meetingName} onChange={handleInput} />
                </FormGroup>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DemoContainer
                        components={[
                            'TimePicker',
                            'TimePicker',
                        ]}
                    >
                        <TimePicker
                            label="Start time"
                            value={moment(new Date(formData.startTime))}
                            onChange={(e) => handleTimeValues(e, 'startTime')}
                        />
                        <TimePicker
                            label="End time"
                            id="endTime"
                            value={moment(new Date(formData.endTime))}
                            onChange={(e) => handleTimeValues(e, 'endTime')}
                        />
                    </DemoContainer>
                </LocalizationProvider>
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </FormControl>
        </>
    );
} 