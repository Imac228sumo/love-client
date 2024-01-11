'use client'
import cn from 'classnames'
import { FC, useRef, useState } from 'react'
import styles from './HomePage.module.scss'

const HomePage: FC = () => {
	const [state, setState] = useState(false)
	const noBtnRef = useRef<HTMLButtonElement>(null)

	const handleSubmitYes = () => {
		setState(!state)
	}

	const handleSubmitNo = () => {
		const noBtnRect = noBtnRef.current?.getBoundingClientRect()
		if (noBtnRect) {
			const maxX = window.innerWidth - noBtnRect.width
			const maxY = window.innerHeight - noBtnRect.height
			const randomX = Math.floor(Math.random() * maxX)
			const randomY = Math.floor(Math.random() * maxY)
			if (noBtnRef.current) {
				console.log(123)
				noBtnRef.current.style.left = randomX + 'px'
				noBtnRef.current.style.top = randomY + 'px'
			}
		}
	}

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.question}>
				{!state ? 'Ты мяу мяу мяу?' : 'Ты мяв мяв мяв'}
			</h2>
			<div
				className={cn({
					[styles.gifOne]: !state,
					[styles.gifTwo]: state,
				})}
			></div>
			<div className={styles.btnGroup}>
				<button className={styles.yesBtn} onClick={() => handleSubmitYes()}>
					Yes
				</button>
				<button
					className={styles.noBtn}
					ref={noBtnRef}
					onClick={() => handleSubmitNo()}
				>
					No
				</button>
			</div>
		</div>
	)
}

export default HomePage
