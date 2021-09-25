 import oopIcon from '../img/oop_image.jpg'
 const skills = [
  {
    type: "Programming Languages",
    list: [
      {
        name: 'Python',
        icon: <i class="devicon-python-plain colored"></i>
      },
      {
        name: 'Javascript',
        icon: <i class="devicon-javascript-plain colored"></i>
      },
      {
        name: 'Java',
        icon: <i class="devicon-java-plain colored"></i>
      },
    ]
   },
   {
      type: "Frontend",
      list: [
        {
          name: 'Javascript',
          icon: <i class="devicon-javascript-plain colored"></i>
        },
        {
          name: 'React',
          icon:<i class="devicon-react-original-wordmark colored"></i>
        },
        {
          name: 'HTML',
          icon: <i class="devicon-html5-plain-wordmark"></i>
        },
        {
          name: 'CSS',
          icon: <i class="devicon-css3-plain-wordmark"></i>
        },
        {
          name: 'Bootstrap',
          icon: <i class="devicon-bootstrap-plain colored"></i>
        },
        
      ]
   },
   {
    type: "Backend",
    list: [
      {
        name: 'NodeJs',
        icon: <i class="devicon-nodejs-plain-wordmark colored"></i>
      },
      {
        name: 'Express',
        icon: <i class="devicon-express-original-wordmark colored"></i>
      },
      {
        name: 'MongoDB',
        icon: <i class="devicon-mongodb-plain-wordmark colored"></i>
      },
    ]
   },
   {
    type: "Version Control",
    list: [
      {
        name: 'Git',
        icon: <i class="devicon-git-plain colored"></i>
      },
      {
        name: 'Github',
        icon: <i class="devicon-github-original colored"></i>
      },
    ]
   },
   {
    type: "Operating System",
    list: [
      {
        name: 'Windows',
        icon: <i class="fab fa-windows"></i>
      },
      {
        name: 'Linux',
        icon: <i class="devicon-linux-plain colored"></i>
      },
    ]
   },
   {
    type: "Others",
    list: [
      {
        name: 'OOP',
        icon: <img src={oopIcon}></img>
      },
      {
        name: 'Numpy',
        icon: <i class="devicon-numpy-original colored"></i>
      },
      {
        name: 'Pandas',
        icon: <i class="devicon-pandas-original colored"></i>
      },
      {
        name: 'Tensorflow',
        icon: <i class="devicon-tensorflow-line"></i>
      },
      {
        name: 'Adobe Premiere Pro',
        icon: <i class="devicon-premierepro-plain colored"></i>
      },
     
    ]
   }

 ]

 export default skills;