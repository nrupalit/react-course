import { Button, FormControl, FormGroup, Input, InputLabel, MenuItem, Select } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetDate } from "../hooks/useGetDate";

// eslint-disable-next-line react/prop-types
export default function EventForm({ submitForm }) {
    const [formData, setFormData] = useState({
        meetingName: "",
        date: "",
        startTime: "",
        endTime: ""
    });
    const selectedDate = useSelector(state => state.event.date);
    const [hrs, setHrs] = useState(1);
    const listOfHrs = Array.from({ length: 10 }, (_, i) => i + 1);
    const { date } = useGetDate();
    useEffect(() => {
        if (selectedDate) {
            setFormData({
                ...formData,
                startTime: selectedDate.start,
                endTime: selectedDate.end,
                date
            })
        }
    }, [date, formData, selectedDate])
    const handleInput = (event) => {
        setFormData({
            ...formData,
            [`${event.target.id}`]: event.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const endTime = moment(formData.startTime).add(hrs, 'hours');
        setFormData({
            ...formData,
            endTime
        })
        submitForm(formData);
    };
    const handleTimeValues = (value, type) => {
        setFormData({
            ...formData,
            [`${type}`]: value.toISOString()

        })
    }
    const setHrsChange = (event) => {
        setHrs(event.target.value)
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
                        <FormControl>
                            <Select
                                value={hrs}
                                onChange={setHrsChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {listOfHrs.map(valueHrs =>
                                    <MenuItem value={valueHrs} key={valueHrs}>{valueHrs}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </DemoContainer>
                </LocalizationProvider>
                <Button className="event-form-submit" onClick={handleSubmit}>Submit</Button>
            </FormControl>
        </>
    );
} 