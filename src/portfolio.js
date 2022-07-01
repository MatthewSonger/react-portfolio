
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
  homepage: 'null',
  title: 'Matt Songer',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Matt Songer',
  role: 'Full Stack Web Developer',
  description:
  "Hey, I'm Matt. I enjoy building websites! I've used computers most of my life and love using them to create. Web Devleopment is where my creative side meets my logical side. ",
  resume: 'contact me',
    social: {
    linkedin: 'https://www.linkedin.com/in/matthewsonger.com',
    github: 'https://github.com/MatthewSonger',
  },
}

const projects = [  
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Run Buddy',
    id: 1,
    photo: firstProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML, CSS'],
    sourceCode: 'https://github.com/MatthewSonger/run-buddy.git',
    livePreview: 'https://matthewsonger.github.io/run-buddy/',
  },
  {
    name: 'Sip and Read',
    id: 2,
    photo: secondProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML, CSS, JavaScript, Tailwind'],
    sourceCode: 'https://github.com/MatthewSonger/sip-and-read.git',
    livePreview: 'https://kimberlyannyo.github.io/sip-and-read/',
  },
  {
    name: 'The Story Keepers',
    id: 3,
    photo: thirdProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML, CSS, JavaScript, Bootstrap'],
    sourceCode: 'https://github.com/Matt658041/The-Story-Keepers.git',
    livePreview: 'http://storykeepers.herokuapp.com/',
  },
  {
    name: 'Rock Paper Scissors',
    id: 4,
    photo: fourthProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML, CSS, JavaScript'],
    sourceCode: 'https://github.com/MatthewSonger/Rock-Paper-Scissors.git',
    livePreview: 'https://matthewsonger.github.io/Rock-Paper-Scissors/',
  },
  {
    name: 'Task Manager',
    id: 5,
    photo: fifthProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML, CSS, JavaScript'],
    sourceCode: 'https://github.com/MatthewSonger/taskinator.git',
    livePreview: 'https://matthewsonger.github.io/taskinator/',
  },
  {
    name: 'Password Generator',
    id: 6,
    photo: sixProjectPhoto,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML, CSS, JavaScript'],
    sourceCode: 'https://github.com/MatthewSonger/challenge3.git',
    livePreview: 'https://matthewsonger.github.io/challenge3/',
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
