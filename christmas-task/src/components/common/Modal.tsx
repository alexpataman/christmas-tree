import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@mui/material';

export interface IModal {
  title?: string;
  content?: string;
}
interface SimpleDialogProps {
  title: string | undefined;
  content: string | undefined;
  open: boolean;
  onClose: () => void;
}

export const Modal = (props: SimpleDialogProps) => {
  const { onClose, open, title, content } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={handleClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
};
