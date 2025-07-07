// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="relative w-full rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
      {/* Top bar */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Title */}
      <div className="relative px-4 py-3 lg:px-8 lg:py-5">
        <div className="absolute top-1/2 left-0 flex -translate-y-1/2 flex-row space-x-1 lg:space-x-2">
          <div className="h-2 w-2 rounded-full bg-red-400 lg:h-3 lg:w-3"></div>
          <div className="h-2 w-2 rounded-full bg-orange-400 lg:h-3 lg:w-3"></div>
          <div className="h-2 w-2 rounded-full bg-green-200 lg:h-3 lg:w-3"></div>
        </div>
        <p className="ml-6 text-center text-base text-[#16f2b3] lg:text-xl">
          {project.name}
        </p>
      </div>

      {/* Code block */}
      <div className="overflow-hidden border-t-2 border-indigo-900 px-4 py-4 lg:px-8 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div>
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>

          <div className="ml-4 lg:ml-8">
            <span className="mr-2 text-white">name:</span>
            <span className="text-gray-400">'</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">',</span>
          </div>

          <div className="ml-4 lg:ml-8">
            <span className="mr-2 text-white">tools:</span>
            <span className="text-gray-400">[</span>
            {project.tools?.map((tool, idx) => (
              <React.Fragment key={idx}>
                <span className="text-amber-300">'{tool}'</span>
                {idx < project.tools.length - 1 && (
                  <span className="text-gray-400">, </span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">],</span>
          </div>

          <div className="ml-4 lg:ml-8">
            <span className="mr-2 text-white">myRole:</span>
            <span className="text-orange-400">'{project.role}'</span>
            <span className="text-gray-400">,</span>
          </div>

          <div className="ml-4 lg:ml-8">
            <span className="mr-2 text-white">description:</span>
            <span className="text-cyan-400">'{project.description}'</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="text-gray-400">{'};'}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
