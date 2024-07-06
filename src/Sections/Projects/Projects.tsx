import './Projects.css';
import Edutap from '../../assets/images/Edu-tap.png'
import ProjectTwoImage from '../../assets/images/DarkFantacy.png';
import malefashion from '../../assets/images/malefashion.png'
import ProjectThreeImage from '../../assets/images/NetFlix.png';
import passwordGen from '../../assets/images/password.png';
import connections from '../../assets/images/connections.png';
import TalkWaveAI from '../../assets/images/Screenshot (82).png';
import {useMemo} from "react";
import {Project as ProjectType} from "../../Types/Project.ts";
import {Project} from  "../";

export const Projects= () => {
    const projects: ProjectType[] = useMemo<ProjectType[]>(() => [
        {
            title: 'Edu-tap',
            subtitle: 'E-learning Platform',
            description: " Edu-tap is an innovative e-learning platform designed to offer a seamless and engaging educational experience. Built using a comprehensive tech stack that includes React.js, Node.js, Express, MongoDB, Tailwind CSS, Redux, Socket.IO, Nginx, and AWS, Edu-tap provides a user-friendly interface tailored for students, tutors, and administrators. Students benefit from interactive learning tools, tutors have access to teaching resources and analytics, while administrators manage courses, users, and platform settings. Whether you're engaging as a learner, educator, or administrator, Edu-tap ensures efficient and interactive learning with a modern, intuitive UI.",
            github: 'https://github.com/Shadialic/Edutap_frontend',
            website: 'https://edutap-frontend.vercel.app/',
            image: Edutap,
            techStack: ['React Js', 'Node Js', 'MongoDb', 'Express','Redux',"Socket io",'Nginx','Tailwind CSS',"AWS"]
        },
        {
            title: 'Connections',
            subtitle: 'Real-time Chat Apllication',
            description: " Connections is a cutting-edge real-time chat application designed to provide a seamless and engaging user experience. Built using a robust tech stack that includes React.js, Node.js, Express, PostgreSQL, Material UI, Tailwind CSS, Context API, and Socket.IO, Connections offers a user-friendly interface with a variety of features to enhance your online communication. Whether you're chatting with friends or collaborating with colleagues, Connections ensures smooth, instant messaging with an intuitive and visually appealing UI.",
            github: 'https://github.com/Shadialic/Connection',
            website: 'https://connections-chat.vercel.app/',
            image: connections,
            techStack: ['React Js', 'Node Js', 'PostgreSQL', 'Express',"Socket io","Context",'Tailwind CSS',"Metriel Ui"]
        },
        {
            title: 'Male-fashion',
            subtitle: 'E-Commerce',
            description: " In this Project Used HTML,CSS,Ajax, It's provide Good userfriendly UI, offering a variety of features to enhance your online experience.",
            github: 'https://github.com/Shadialic/MaleFashion',
            website: 'https://malefashion-lq16.onrender.com/',
            image: malefashion,
            techStack: ['EJS', 'Node', 'MongoDb', 'Express','Nginx','CSS']
        },
        {
            title: 'TalkWaveAI',
            subtitle: 'open-source AI prompting tool',
            description: " Develop a Next.js application that highlights the key features of Next.js along with a comprehensive CRUD AI Prompt sharing system utilizing a MongoDB database and implementing NextAuth authentication",
            github: 'https://github.com/Shadialic/TalkWaveAI_Nextjs',
            website: 'https://talk-wave-ai-nextjs.vercel.app',
            image: TalkWaveAI,
            techStack: ['React', 'Nextjs','NextAuth', 'MongoDb','Tailwind CSS']
        },
        {
            title: 'Secure-Gen',
            subtitle: 'Password-Generator',
            description: "Create strong and secure passwords to keep your account safe online",
            github: 'https://github.com/Shadialic/Password_Generator',
            website: 'https://password-generator-cvfv.vercel.app/',
            image: passwordGen,
            techStack: ['React ', 'Node',"Tailwind CSS"]
        },
        {
            title: 'DARK-FANTASY',
            subtitle: 'Responsive Template',
            description: "Responsive Template Used HTML and CSS",
            github: 'https://github.com/AshiqueParammel/Dark-fantasy',
            website: 'ashiqueparammel.github.io/Dark-fantasy/',
            image: ProjectTwoImage,
            techStack: ['HTML', 'CSS']
        },{
            title: 'Netflix',
            subtitle: 'CLONE',
            description: " In This Project i Used React,axios,redux,firebase",
            github: 'https://github.com/Shadialic/Netflix',
            website: '',
            image:ProjectThreeImage, 
            techStack: ['React','firebase','axios','redux']
        }
      
    ], []);

    return (
        <section id={'projects'} className={'projects container'}>
            <div className={'projects__header'}>
                <p className={'projects__heading'}>Projects</p>
                <p className={'projects__subheading'}>Works, I'm most proud of</p>
            </div>
            <div className={'projects__list'}>
                {projects.map((project, index) => <Project key={index} project={project}/>)}
            </div>
        </section>
    );
};