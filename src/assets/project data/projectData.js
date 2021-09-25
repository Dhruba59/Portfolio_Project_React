import music_recommendation from '../img/music_recommendation_img.PNG'
import p2p_app from '../img/p2p_app_img.jpg'
import project_management from '../img/project-management_img.png'
import noImg from '../img/no_img.png'
const projectData = [
  {
    id: 1,
    title: 'Music Recommendation using facial emotion',
    desc: 'This is a machine learning based project. Here the mood recognition model is using a the kaggle fer dataset and CNN. After that we trained a model on a mood labeled dataset which can predict the preffered mood of the music using different properties of the music.',
    tags: ['machine learning', 'Python', 'CNN', 'OpenCv'],
    github: 'https://github.com/Dhruba59/Music-recommendation-based-on-facial-emotion-recognition',
    demo: 'asdfa',
    image: music_recommendation
  },
  {
    id: 1,
    title: 'Peer to Peer Messaging App',
    desc: 'P2P Messaging App is a PEER-to-PEER android app built with Android Studio. 2 devices sharing same Wi-Fi network can communicate with each other through this application via socket programming.',
    tags: ['Android Development', 'Java', 'socket programming'],
    github: 'https://github.com/Dhruba59/Networking-Project/tree/master/app/src/main/java/com/example/p2pmessagingapp',
    demo: 'asdfa',
    image: p2p_app
  },
  {
    id: 1,
    title: 'Project – Thesis management website',
    desc: 'A web project for managing the projects and thesis',
    tags: ['Javascript', 'EJS', 'NodeJs','Express'],
    github: 'https://github.com/CSE-446-2016/Project-Distribution-G43',
    demo: 'asdfa',
    image: project_management
  },
  
  {
    id: 1,
    title: '2D football game - "Pass The Ball"',
    desc: 'This is a desktop app. A basic football game for fun.',
    tags: ['Java', 'JavaFX'],
    github: 'https://github.com/Dhruba59/2D-football-game',
    demo: 'asdfa',
    image: noImg
  },
  {
    id: 1,
    title: 'React and Js Projects',
    desc: 'Few small projects which was done for learning purporse of React and javascript technologies.',
    tags: ['Javascript', 'React', 'React-bootstrap', 'HTML', 'CSS'],
    github: 'https://github.com/Dhruba59/React-Js-Projects',
    demo: 'asdfa',
    image: noImg
  },
]

export default projectData;