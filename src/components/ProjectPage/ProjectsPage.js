import React, { useState } from 'react';
import Project from '../Project/Project';
const ProjectsPage = () => {
	const projects = [
		{
			Id: 1,
			name: 'edward',
			role: 'Frantend Debeloper',
			img: 'images/Homepage-card-email-marketing.png',
		},

		{
			Id: 2,
			name: 'edward',
			role: 'Backend Debeloper',
			img: 'images/Homepage-card-email-marketing.png',
		},

		{
			Id: 3,
			name: 'Edward',
			role: 'Designer',
			img: 'images/Homepage-card-email-marketing.png',
		},
	];
	return (
		<div className="row">
			{projects.map((project) => {
				return <Project name={project.name} img={project.img} role={project.role} />;
			})}
		</div>
	);
};

export default ProjectsPage;
