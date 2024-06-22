import { Provider } from 'react-redux'
import { store } from './app/store'
import Todo from './components/Todo'

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Todo/>
      </div>
    </Provider>
  )
}