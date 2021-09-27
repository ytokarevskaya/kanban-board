import { useState, useEffect } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

function App() {
	const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)

	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

  return (
		<div className='wrapper'>
			<Router>
				<Header />
				<Main tasks={tasks} setTasks={setTasks} />
				<Footer tasks={tasks} />
			</Router>
		</div>
  )
}

export default App
