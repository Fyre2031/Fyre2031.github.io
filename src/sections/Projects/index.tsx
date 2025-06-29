import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export default function Projects() {
    return (
        <section className="pt-4 pb-24 text-base">
            <h2 className="title mb-6">My Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                    title="Title Text"
                    description="This font is smaller than the one above"
                    gradient={['#8E2DE2', '#3A00F0']}
                    href="#"
                />
            </div>
        </section>
    );
}
