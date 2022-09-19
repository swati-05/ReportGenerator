import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const [open, setOpen] = React.useState(false);
    const { buttonName, dialogTitle, dialogText, callbackFun } = props.values;
    const extraVal = props.extraVal;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleConfirm = () => {
        // confirmedFun(true);
        callbackFun(extraVal);
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                {buttonName}
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="md"
            >
                <DialogTitle>
                    {dialogTitle}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {dialogText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="warning">Deny</Button>
                    <Button onClick={handleConfirm} variant="contained" color="secondary">Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}