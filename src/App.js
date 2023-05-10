import './App.css';
import { Container, Typography, List } from '@mui/material';
import Task from './components/Task';


function App() {
  const tasks = ['Learn React', 'Learn Linear Algebra', 'Learn Machine Learning'];
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align='center' gutterBottom>
        Lazy's ToDo List
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}   
      </List>
    </Container>
  );
}

export default App;
