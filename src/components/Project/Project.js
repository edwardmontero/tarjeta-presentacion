import React from 'react';
import { Col } from 'react-bootstrap';

const Project = (props) => {
	return (
		<Col className="props">
			<div>
				<img src={props.img} />
				<h1>{props.name}</h1>
				<p>{props.role}</p>
			</div>
		</Col>
	);
};

export default Project;
