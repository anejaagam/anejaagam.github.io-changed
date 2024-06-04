/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import * as Data from '../../data';
const pdfIcon: string = require('../../assets/misc/pdf.svg').default;

interface ProjectWindowProps {
  project: Data.Project;
  onClose: () => void;
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-0 mb-12">
      <div className="bg-white w-1/2 h-full shadow-lg relative flex flex-none flex-col">
        <div className="flex justify-between items-center bg-gray-300 p-2">
          {
            // <div className="flex items-center space-x-2">
            // <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={onClose}></div>
            // <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            // <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            // </div>
          }
          <h2 className="text-xl">{project.title}</h2>

          <button
            className="absolute top-0 right-0 justify-center"
            onClick={onClose}
            style={styles.closeButton}
          >
            x
          </button>
        </div>
        <div className="px-4 overflow-y-scroll flex flex-col">
          <div className="flex space-x-4 p-4 sticky top-0 bg-white">
            <div>
              <div className="flex flex-row justify-between">
                <h3 className="text-lg mb-2">Description</h3>
                <a
                  href={project.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                  type="application/pdf"
                >
                  <img src={pdfIcon} alt="pdf" className="w-7" />
                </a></div>

              <p className="mb-4">{project.description}</p>

            </div>
          </div>
          <div className="p-4 flex flex-none flex-col">
            <h3 className="text-lg font-bold">Overview</h3>
            <p>{project.overview}</p>
            <h3 className="text-lg font-bold mt-4">Location and Duration</h3>
            <p>{project.locationDuration}</p>
            <h3 className="text-lg font-bold mt-4">Role and Responsibilities</h3>
            <p>{project.roleResponsibilities.general}</p>
            <ul>
              {project.roleResponsibilities.specificTasks.map((task, index) => (
                <li key={index}>- {task}</li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mt-4">Challenges Faced</h3>
            <p>{project.challengesFaced}</p>
            <h3 className="text-lg font-bold mt-4">Solutions and Innovations</h3>
            <p>{project.solutionsInnovations}</p>
            <h3 className="text-lg font-bold mt-4">Results and Impact</h3>
            <p>{project.resultsImpact}</p>
            <h3 className="text-lg font-bold mt-4">Key Learnings</h3>
            <p>{project.keyLearnings}</p>
            <h3 className="text-lg font-bold mt-4">Technologies and Tools</h3>
            {project.technologiesTools.hardware.length > 0 && <p><strong>Hardware:</strong> {project.technologiesTools.hardware.join(', ')}</p>}
            {project.technologiesTools.software.length > 0 && <p><strong>Software:</strong> {project.technologiesTools.software.join(', ')}</p>}
            {project.technologiesTools.tools.length > 0 && <p><strong>Tools:</strong> {project.technologiesTools.tools.join(', ')}</p>}
          </div>
          <div className="flex space-x-4">
            {/*<a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
                View on GitHub
              </a>*/
            }

          </div>

          {project.images.length > 0 && (
            <div className="mt-4 p-4">
              <h3 className="text-lg font-bold mb-2">Project Images</h3>
              <div className="flex space-x-4 ">
                <div className="flex space-x-4 snap-x overflow-x-scroll">
                  {project.images?.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} className="w-full snap-center object-contain" />
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

const styles = {
  closeButton: {
    cursor: "pointer",
    backgroundColor: "#F41A1A",
    color: "white",
    padding: "5px 25px 5px 25px",
  },
};

export default ProjectWindow;
