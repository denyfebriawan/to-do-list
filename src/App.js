import Form from  './components/form/Form';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import List from  './components/list/List';
import TodoList from './components/pages/TodoList';
import Todo from './components/todo/Todo';

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Todo />
      <List />
    </div>
  );
}

export default App;