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
        startTime: 0,
        endTime: 0
    });
    const selectedDate = useSelector(state => state.event.date);
    const [hrs, setHrs] = useState(1);
    const listOfHrs = Array.from({ length: 10 }, (_, i) => i + 1);
    const { date } = useGetDate(selectedDate.start);
    const [error, setError] = useState()
    useEffect(() => {
        if (selectedDate) {
            console.log(selectedDate.start, moment(new Date(formData.startTime)));

            setFormData({
                ...formData,
                startTime: selectedDate.start,
                endTime: selectedDate.end,
                date
            })
        }
    }, [])
    const handleInput = (event) => {
        setFormData({
            ...formData,
            [`${event.target.id}`]: event.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.meetingName.length) {
            setError('Invalid name');
            return;
        }
        const endTime = Number(moment(new Date(formData.startTime)).add(hrs, 'hours').format('x'))
        submitForm({ ...formData, endTime });
    };
    const handleTimeValues = (value, type) => {
        setFormData({
            ...formData,
            [`${type}`]: new Date(value).getTime()
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
                    {error}
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

                    </DemoContainer>
                </LocalizationProvider>
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
                <Button className="event-form-submit" onClick={handleSubmit}>Submit</Button>
            </FormControl>
        </>
    );
} 