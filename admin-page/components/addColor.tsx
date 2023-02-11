import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { SketchPicker } from 'react-color';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

export default function AlertDialog() {

  const [open, setOpen] = React.useState(false);
  const [background, setBackground] = React.useState('#fff');
  function setColor(color: any) {
    setBackground(color.hex);
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add a new color
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Add a new color
        </DialogTitle>
        <DialogContent>
        
        <Stack spacing={1}>
            <TextField id="filled-basic" label="Color name:" variant="filled" />
            <SketchPicker
                color={ background }
                onChangeComplete={ setColor }
            />
        </Stack>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Add color
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}