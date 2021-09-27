import {Switch, Route} from 'react-router-dom'
import Board from '../board/Board'
import TaskDetail from '../task-detail/TaskDetail'
import css from './Main.module.css'

const Main = (props) => {
	return (
		<main className={css.main}>
			<Switch>
				<Route exact path={'/'}>
					<Board {...props} />
				</Route>
				<Route path={'/tasks/:taskId'}>
					<TaskDetail {...props} />
				</Route>
			</Switch>
		</main>
	)
}

export default Main
