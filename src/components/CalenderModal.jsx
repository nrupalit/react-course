import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Drawer, Button, Card, CardHeader, CardContent } from '@mui/material';

CalenderModal.propTypes = {
    title: PropTypes.string,
    body: PropTypes.any,
    close: PropTypes.string,
    submit: PropTypes.string,
    isModalOpen: PropTypes.bool,
    handleClose: PropTypes.func
}

export default function CalenderModal({ title, body, close, submit, isModalOpen = false, handleClose }) {
    useEffect(() => {
        if (isModalOpen) {
            setShow(isModalOpen)
        }
    }, [isModalOpen])
    const [show, setShow] = useState(false);
    const handleModalClose = () => {
        handleClose(false);
    }
    return (
        <>
            <Drawer open={show} onClose={handleModalClose}>
                <Card>
                    {title && <CardHeader>
                        {title}
                    </CardHeader>}
                    {body && <CardContent>
                        {body}
                    </CardContent>}
                    {!close?.length &&
                        <Button variant="secondary" onClick={handleModalClose}>
                            {close}
                        </Button>
                    }
                    <Button variant="primary" onClick={handleModalClose}>
                        {submit}
                    </Button>
                </Card>
            </Drawer>
        </>
    );
}
