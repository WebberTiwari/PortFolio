import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <section id="projects" className="relative z-50 my-12 lg:my-24">
      {/* Decorative Blur Circle */}
      <div className="sticky top-10">
        <div className="absolute -top-3 left-0 translate-x-1/2 w-[80px] h-[80px] bg-violet-100 rounded-full filter blur-3xl opacity-30"></div>

        {/* Title Line */}
        <div className="flex items-center justify-start relative">
          <span className="absolute left-0 bg-[#1a1443] text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Projects List */}
      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              key={index}
              id={`sticky-card-${index + 1}`}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
