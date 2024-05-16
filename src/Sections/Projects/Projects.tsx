import './Projects.css';
import Edutap from '../../assets/images/Edu-tap.png'
import ProjectTwoImage from '../../assets/images/DarkFantacy.png';
import malefashion from '../../assets/images/malefashion.png'
import ProjectThreeImage from '../../assets/images/NetFlix.png';
import passwordGen from '../../assets/images/password.png';

import TalkWaveAI from '../../assets/images/Screenshot (82).png'
import {useMemo} from "react";
import {Project as ProjectType} from "../../Types/Project.ts";
import {Project} from  "../";

export const Projects= () => {
    const projects: ProjectType[] = useMemo<ProjectType[]>(() => [
        {
            title: 'Edu-tap',
            subtitle: 'E-learning Platform',
            description: " In this Project Used React js,Node js,Express,Tailwind CSS,Redux, It's provide Good userfriendly UI, offering a variety of features to enhance your online experience.",

            github: 'https://github.com/Shadialic/Edutap_frontend',
            website: 'https://www.malefashion.fun/',
            image: Edutap,
            techStack: ['React', 'Node', 'MongoDb', 'Express','Redux' ,'Nginx','Tailwind CSS']
        },
        {
            title: 'Male-fashion',
            subtitle: 'E-Commerce',
            description: " In this Project Used HTML,CSS,Ajax, It's provide Good userfriendly UI, offering a variety of features to enhance your online experience.",
            github: 'https://github.com/Shadialic/MaleFashion',
            website: 'https://www.shop.malefashion.fun/',
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