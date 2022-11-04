import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { TextField } from '@mui/material'

interface IModal {
  open: any
  close: any
  listMap: any
  editTodo: any
}

export const EditTodoDialog: React.FC<IModal> = ({ open, close, listMap, editTodo }) => {
  const [editedText, setEditedText] = React.useState(listMap.text)

  const textHandler = () => {
    editTodo(listMap.id, editedText)
    close()
  }

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={close}
      aria-describedby='alert-dialog-slide-description'
      fullWidth
    >
      <DialogTitle>{'Edite sua tarefa'}</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={editedText}
          fullWidth
          onChange={(e) => setEditedText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancelar</Button>
        <Button onClick={textHandler}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditTodoDialog
