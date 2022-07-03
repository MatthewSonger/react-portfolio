import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
// import firstProjectPhoto from '../../assets/small/projects/0.png';
// import secondProjectPhoto from '../../assets/small/projects/1.png';
// import thirdProjectPhoto from '../../assets/small/projects/2.png';
// import projects from '../../portfolio';




const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    <div key={project.id}>
    <img src={project.photo}></img>
      {/* {
        MyProjects && MyProjects.map(( projects, idx) => {
          return (
            <div key={project.id}>
              <img src={projects.photo} key={idx}></img>
            </div>
          )
        })

        
      } */}
    </div>
    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>

  
)

export default ProjectContainer
