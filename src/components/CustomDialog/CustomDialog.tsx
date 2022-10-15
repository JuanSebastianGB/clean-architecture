import { subjectManager } from '@/models';
import { Dialog } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { Subscription } from 'rxjs';

export interface CustomDialogInterface {}

interface Props {
  children: React.ReactNode;
}

export const observableToOpenModal$ = new subjectManager<boolean>();
export const observableToCloseModal$ = new subjectManager<boolean>();

const CustomDialog = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const handleExit = () => (observableToCloseModal$.setSubject = false);
  let openSubjectHandler$ = new Subscription();
  let closeSubjectHandler$ = new Subscription();

  useEffect((): (() => void) => {
    openSubjectHandler$ = observableToOpenModal$.getSubject.subscribe(
      (): void => handleOpen()
    );
    closeSubjectHandler$ = observableToCloseModal$.getSubject.subscribe(
      (): void => handleClose()
    );
    return (): void => {
      openSubjectHandler$.unsubscribe();
      closeSubjectHandler$.unsubscribe();
    };
  }, []);

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={() => handleExit()}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        fullWidth
      >
        {children}
      </Dialog>
    </Fragment>
  );
};

export default CustomDialog;
