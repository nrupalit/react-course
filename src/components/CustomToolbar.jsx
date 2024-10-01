/* eslint-disable react/prop-types */
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, ButtonGroup } from '@mui/material';
import { Navigate, Views } from 'react-big-calendar';

export default function CustomToolbar(props) {
    const navigate = action => {
        // eslint-disable-next-line react/prop-types
        props.onNavigate(action)
    }
    const customToolBar = action => {
        props.onView(action)
    }
    return (
        <div className="toolbar-container">

            <div className="rbc-btn-group">
                <Button onClick={navigate.bind(null, Navigate.TODAY)}>Today</Button>
                <Button onClick={navigate.bind(null, Navigate.PREVIOUS)}><ArrowBackIosIcon /></Button>
                <Button onClick={navigate.bind(null, Navigate.NEXT)}><ArrowForwardIosIcon /></Button>

                <label className='label-date'>{props?.label}</label>
            </div>

            <div className="filter-container">
                <ButtonGroup>
                    <Button onClick={customToolBar.bind(null, Views.DAY)}><span>Day</span></Button>
                    <Button onClick={customToolBar.bind(null, Views.WORK_WEEK)}><span>Work week</span></Button>
                    <Button onClick={customToolBar.bind(null, Views.MONTH)}><span>Month</span></Button>
                </ButtonGroup>


            </div>
        </div >
    )
}