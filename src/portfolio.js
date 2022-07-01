
import firstProjectPhoto from './assets/small/projects/0.png';
import secondProjectPhoto from './assets/small/projects/1.png';
import thirdProjectPhoto from './assets/small/projects/2.png';
import fourthProjectPhoto from './assets/small/projects/3.png';
import fifthProjectPhoto from './assets/small/projects/4.png';
import sixProjectPhoto from './assets/small/projects/5.png';


// const photos = [
//   {
//       photo:firstProjectPhoto,
//       text: "Project number one"
//   },
//   {
//       photo:secondProjectPhoto,
//       text: "Project number two"
//   },
//   {
//       photo:thirdProjectPhoto,
//       text: "Project number three"
//   },
// ];



const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://matthewsonger.github.io/react-portfolio',
  title: 'Matt Songer',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Matt Songer',
  role: 'Full Stack Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/matthewsonger.com',
    github: 'https://github.com/MatthewSonger',
  },
}

const projects = [  
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    id: 1,
    photo: firstProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    id: 2,
    photo: secondProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    id: 3,
    photo: thirdProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 4',
    id: 4,
    photo: fourthProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 5',
    id: 5,
    photo: fifthProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 6',
    id: 6,
    photo: sixProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node',
  'Express',
  'SQL',
  'MongoDB',
  'Bootstrap',
  'Git'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matt91893@gmail.com',
}

export { header, about, projects, skills, contact}
