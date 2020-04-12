import React from 'react'
import './CardList.css'

const CardList = ({ title }) => (
	<div className="card-list">
		<div className="card-list__title">{title}</div>
		<div class="card-list__container">
		</div>
	</div>
)

export default CardList
