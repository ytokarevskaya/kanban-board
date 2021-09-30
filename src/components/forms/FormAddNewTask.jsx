import clsx from 'clsx'
import css from './Forms.module.css'

const FormAddNewTask = props => {
	return (
		<form className={css.form}>
			<input
				className={css.input}
				id='taskTitle'
				name='title'
				type='text'
				placeholder='Enter task title'
			/>
			<textarea
				className={clsx(css.input, css.textarea)}
				id='taskDescription'
				name='description'
				placeholder='Enter task description'
			/>
			<button className={css.submit} type='submit'>Add</button>
		</form>
	)
}

export default FormAddNewTask
