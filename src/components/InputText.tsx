import { TextField, Box, Button } from '@mui/material'
import { useState } from 'react'

interface IModal {
  addTodo?: any
}

export const InputText: React.FC<IModal> = ({ addTodo }) => {
  const [inputText, setInputText] = useState('')
  const [createId, setCreateId] = useState(1)
  const crateObject = (text: string) => {
    const obj = { text: text, id: createId }
    setCreateId(createId + 1)
    addTodo(obj)
  }

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <TextField
        id='outlined-basic'
        label='Insira sua tarefa aqui'
        variant='outlined'
        onChange={(e) => setInputText(e.target.value)}
        fullWidth
      />
      <Button type='reset' variant='contained' onClick={() => crateObject(inputText)}>
        Adicionar
      </Button>
    </Box>
  )
}

export default InputText
