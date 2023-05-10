import { useSelector } from 'react-redux';
import './App.css';
import { Container, Typography, List } from '@mui/material';
import Task from './components/Task';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const tasks = useSelector(state => state.todos);
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align='center' gutterBottom>
        Lazy's ToDo List
      </Typography>
      <AddTodoForm />
      <List>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}   
      </List>
    </Container>
  );
}

export default App;
