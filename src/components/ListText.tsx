import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'
import EditTodoDialog from './EditDialog'

interface IModal {
  listMap: any
  deleteTodo: any
  editTodo: any
}

export const ListText: React.FC<IModal> = ({ listMap, deleteTodo, editTodo }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const close = () => {
    setOpenDialog(!openDialog)
  }

  const checkedHandler = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <EditTodoDialog editTodo={editTodo} open={openDialog} close={close} listMap={listMap} />
      <ListItem
        secondaryAction={
          <IconButton edge='end' aria-label='delete' onClick={() => deleteTodo(listMap.id)}>
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton dense>
          <ListItemIcon>
            <Checkbox edge='start' tabIndex={-1} disableRipple onClick={checkedHandler} />
          </ListItemIcon>
          <ListItemText
            style={{ textDecoration: isChecked ? 'line-through' : '' }}
            primary={listMap.text}
            onClick={() => setOpenDialog(true)}
          />
        </ListItemButton>
      </ListItem>
    </>
  )
}

export default ListText
