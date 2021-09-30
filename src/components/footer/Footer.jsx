import css from './Footer.module.css'

const Footer = props => {
	return (
		<footer className={css.footer}>
			<div className={css.counts} />
			<div className={css.copy}>
				Created by <a href='https://github.com/ytokarevskaya' target='_blank' rel='noreferrer'>@ytokarevskaya</a>
			</div>
		</footer>
	)
}

export default Footer
