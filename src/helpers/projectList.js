// import rssSmall from '../img/projects/rss.png';
import rssBig from '../img/projects/rss.png';
import chatBig from '../img/projects/chat-big.png';
// import chatAppSm from '../img/projects/chatApp-sm.png'
import gendiffSmall from '../img/projects/gendiff-sm.png';
import gendiffBig from '../img/projects/gendiff.png';
import brainSmall from '../img/projects/brain-sm.png';
import brainBig from '../img/projects/brain-games.png';
import gitHubBlack from '../img/icons/gitHub-black.svg';
import architecturaSm from '../img/projects/architectural-sm.png';
import architecturaBig from '../img/projects/architectural-big.png';
import lookShareBig from '../img/projects/lookShare-big.png';
import lookShareSm from '../img/projects/lookShare-sm.png';


const projects = [
    {
        title: 'Rss агрегатор' ,
        img: rssBig,
        imgBig: rssBig,
        githubLink: 'https://github.com/ArtyomVolkov1/frontend-project-11',
        deployLink: 'https://frontend-project-11-smoky-six.vercel.app/',
        buttonImg: gitHubBlack,
        previewName: 'Preview',
        buttonName: 'Github repo',
        description: 'RSS-специализированный формат, предназначенный для описания новостных лент, анонсов статей и других материалов',
        skills: 'Js, MVC, валидация форм, настройка Webpack, Axios, Bootstrap',
        key: 1,
    },
    {
        title: 'Chat App' ,
        img: chatBig,
        imgBig: chatBig,
        githubLink: 'https://github.com/ArtyomVolkov1/frontend-project-12',
        deployLink: 'https://frontend-project-12-qyp1.onrender.com/',
        previewName: 'Preview', 
        buttonImg: gitHubBlack,
        buttonName: 'Github repo',
        description: 'Realtime приложение, упрощенный аналог чата Slack',
        warning: '*Приложение может открыться не сразу, нужно немножко подождать! Это связано с тем, что Render останавливает бесплатный веб-сервис, который в течение 15 минут не получает входящего трафика. Спасибо за понимание.',
        skills: 'React, Redux-toolkit, Socket.io, REST API, React Router, Formik, React-bootstrap',
        key: 2,
    },
    {
        title: 'Look&Share' ,
        img: lookShareSm,
        imgBig: lookShareBig,
        githubLink: 'https://github.com/ArtyomVolkov1/fullstack_LookShareApp',
        deployLink: 'https://fullstack-look-share-app.vercel.app/sign-in',
        buttonImg: gitHubBlack,
        previewName: 'Preview',
        buttonName: 'Github repo',
        description: 'Look&Share - упрощенное приложение для обмена фотографиями. В L&S есть возможность добавлять, редактировать, ставить лайки и добавлять в избранное.',
        skills: ' React/Typescript, React-router-dom, TailwindCSS, shadcn ui, TanStack Query v5, Appwrite ',
        key: 3,
    },
    {
        title: 'Landing' ,
        img: architecturaSm,
        imgBig: architecturaBig, 
        githubLink: 'https://github.com/ArtyomVolkov1/architectural-agency',
        deployLink: 'https://artyomvolkov1.github.io/architectural-agency/',
        buttonImg: gitHubBlack,
        previewName: 'Preview',
        buttonName: 'Github repo',
        description: 'Лендинг архитектурного агентства с формой обратной связи (демо-версия)',
        skills: 'HTML, SCSS, БЭМ, адаптивная верстка',
        key: 4,
    },
    {
        title: 'Brain-Games' ,
        img: brainSmall,
        imgBig: brainBig, 
        githubLink: 'https://github.com/ArtyomVolkov1/frontend-project-44',
        buttonImg: gitHubBlack,
        buttonName: 'Github repo',
        description: 'Набор из пяти простых консольных игр. Каждая игра задает вопросы, на которые нужно дать правильные ответы',
        skills: 'Js, Lodash, Функциональное программирование',
        key: 5,
    },
    {
        title: 'Difference Calculator' ,
        img: gendiffSmall,
        imgBig: gendiffBig, 
        githubLink: 'https://github.com/ArtyomVolkov1/frontend-project-46',
        buttonImg: gitHubBlack,
        buttonName: 'Github repo',
        description: 'Программа, определяющая разницу между двумя структурами данных.(JSON или YML формате)',
        skills: 'Js, Jest, Commander.js, Построение архитектуры проекта',
        key: 6,
    },
];

export { projects };