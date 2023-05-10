import { styled } from '@mui/system';
import './App.css';
import { Container, Typography } from '@mui/material';
import AddTodoForm from './components/AddTodoForm';
import TaskList from './components/TaskList';


const StyledContainer = styled(Container) ({
  backgroundColor: "#cfe8fc",
  height: '100vh',
  paddingTop: '2rem',
});

function App() {

  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h2" align='center' gutterBottom>
        Lazy's ToDo List
      </Typography>
      <AddTodoForm />
      <TaskList />
    </StyledContainer>
  );
}

export default App;
