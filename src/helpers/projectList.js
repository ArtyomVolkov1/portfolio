import rssSmall from '../img/projects/RSS.png';
import rssBig from '../img/projects/rss.png';
import chat from '../img/projects/project-chat.jpg';
import chatBig from '../img/projects/chat-big.png';
import gendiffSmall from '../img/projects/gendiff-small.png';
import gendiffBig from '../img/projects/gendiff.png';
import brainSmall from '../img/projects/brain-games-small.png';
import brainBig from '../img/projects/brain-games.png';
import gitHubBlack from '../img/icons/gitHub-black.svg';
import artagent from '../img/projects/artagent-small.png';
import artagentBig from '../img/projects/artagent.png';

const projects = [
    {
        title: 'Rss агрегатор' ,
        img: rssSmall,
        imgBig: rssBig,
        githubLink: 'https://github.com/ArtyomVolkov1/frontend-project-11',
        deployLink: 'https://frontend-project-11-smoky-six.vercel.app/',
        buttonImg: gitHubBlack,
        previewName: 'Preview',
        buttonName: 'Github repo',
        skills: 'Js, MVC, валидация форм, настройка Webpack, Axios, Bootstrap',
        key: 1,
    },
    {
        title: 'Chat App' ,
        img: chat,
        imgBig: chatBig,
        githubLink: 'https://github.com/ArtyomVolkov1/frontend-project-12',
        deployLink: 'https://frontend-project-12-qyp1.onrender.com/',
        previewName: 'Preview', 
        buttonImg: gitHubBlack,
        buttonName: 'Github repo',
        skills: 'React, Redux-toolkit, Socket.io, REST API, React Router, Formik, React-bootstrap',
        key: 2,
    },
    {
        title: 'Landing' ,
        img: artagent,
        imgBig: artagentBig, 
        githubLink: 'https://github.com/ArtyomVolkov1/architectural-agency',
        deployLink: 'https://artyomvolkov1.github.io/architectural-agency/',
        buttonImg: gitHubBlack,
        previewName: 'Preview',
        buttonName: 'Github repo',
        skills: 'HTML, SCSS, БЭМ, адаптивная верстка',
        key: 3,
    },
    {
        title: 'Brain-Games' ,
        img: brainSmall,
        imgBig: brainBig, 
        githubLink: 'https://github.com/ArtyomVolkov1/frontend-project-44',
        buttonImg: gitHubBlack,
        buttonName: 'Github repo',
        skills: 'Js, Lodash, Функциональное программирование',
        key: 4,
    },
    {
        title: 'Difference Calculator' ,
        img: gendiffSmall,
        imgBig: gendiffBig, 
        githubLink: 'https://github.com/ArtyomVolkov1/frontend-project-46',
        buttonImg: gitHubBlack,
        buttonName: 'Github repo',
        skills: 'Js, Jest, Commander.js, Построение архитектуры проекта',
        key: 5,
    },
];

export { projects };