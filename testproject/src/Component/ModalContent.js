import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { TextField } from '@mui/material';

export default function ResponsiveDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [inputVal, setinputVal] = React.useState(props.curVal);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const inputRef = React.useRef('');

    const handleClickOpen = () => {
        setOpen(true);
        setinputVal(props.curVal)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onChangeInput = (event) => {
        setinputVal(event.target.value)

    }

    const inpuSubmit = () => {
        props.setItem1(inputVal, props.id)
        handleClose()
        setinputVal(``)
    }


    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen} className={props.btnCss} endIcon={props.btnType}>
                {props.name}
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                </DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={onChangeInput}
                        autoFocus
                        margin="dense"
                        id="name"
                        type="text"
                        placeholder="Enter Magnet Link Here"
                        fullWidth
                        value={inputVal || ''}
                        ref={inputRef}
                        size="small"
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus variant="contained" onClick={inpuSubmit}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
