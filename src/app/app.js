import { TodoProvider } from './app-context'
import AppUI from './app-ui'

function App() {
  console.log('🚀 ~ file: App.js ~ line 5', 'render app')
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
