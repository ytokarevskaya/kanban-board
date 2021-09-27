import { useRouteMatch, Link } from 'react-router-dom'
import { LIST_TYPES, LIST_COPY, LIST_COLORS } from '../../config'
import { formatDate } from '../../utils'
import css from './TaskDetail.module.css'

const TaskDetail = (props) => {
	const match = useRouteMatch()
	const {taskId} = match.params
	const {tasks, setTasks} = props
	const task = tasks.find(task => task.id === +taskId)

	const handleChange = (e) => {
		const newStatus = e.target.value
		const updatedTasks = tasks.map(task => {
			if (task.id === +taskId) {
				return {...task, status: newStatus}
			}
			return task
		})
		setTasks(updatedTasks)
	}

	return (
		task ? (
			<>
			<Link to='/' className={css.homeLink}>&#8592; Back</Link>
			<div className={css.wrapper}>
				<div className={css.header}>
					<h2 className={css.title}>{task.title}</h2>
					<p className={css.status} style={{background: LIST_COLORS[task.status]}}>{LIST_COPY[task.status]}</p>
				</div>
				<p className={css.createdAt}>Created at: {formatDate(task.created)}</p>
				<p>Description: {task.description || '(no description)'}</p>
				<p className={css.label}>Change status:</p>
				<select className={css.select} onChange={handleChange} value={task.status}>
					{Object.values(LIST_TYPES).map(list => {
						return <option key={list} value={list}>{LIST_COPY[list]}</option>
					})}
				</select>
			</div>
			</>
		) : (
			<h1>Задача с ID {taskId} не найдена</h1>
		)
	)
}

export default TaskDetail
