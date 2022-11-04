import InputText from '../../components/InputText'
import ListText from '../../components/ListText'
import { Container, Paper, List, Box } from '@mui/material'
import { useState } from 'react'
import HomeTitle from 'components/HomeTitle'

type TypeData = {
  id?: number
  text?: string
}

export const HomePage = () => {
  const [todoText, setTodoText] = useState<TypeData[]>([])
  const addTodo = (value: any) => {
    setTodoText([value])
  }

  const deleteTodo = (id: number) => {
    var filtered = todoText.filter((result) => result.id !== id)
    setTodoText(filtered)
  }

  const editTodo = (id: number, editedText: string) => {
    var todoTextArray = todoText

    for (var i in todoTextArray) {
      if (todoTextArray[i].id === id) {
        todoTextArray[i].text = editedText
      }
    }
    setTodoText(todoTextArray)
  }

  return (
    <>
      <HomeTitle />
      <Container maxWidth='xs' style={{ marginTop: '20px' }}>
        <Paper>
          <InputText addTodo={addTodo} />
        </Paper>
        <List>
          {todoText.map((a, id, text) => (
            <Paper>
              <Box key={id}>
                <ListText listMap={text} editTodo={editTodo} deleteTodo={deleteTodo} />
              </Box>
            </Paper>
          ))}
        </List>
      </Container>
    </>
  )
}

export default HomePage
