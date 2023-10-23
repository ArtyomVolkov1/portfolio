import rssSmall from '../img/projects/rss.png';
import rssBig from '../img/projects/rss.png';
import chatBig from '../img/projects/chat-big.png';
import chatAppSm from '../img/projects/chatApp-sm.png'
import gendiffSmall from '../img/projects/gendiff-small.png';
import gendiffBig from '../img/projects/gendiff.png';
import brainSmall from '../img/projects/brain-games-small.png';
import brainBig from '../img/projects/brain-games.png';
import gitHubBlack from '../img/icons/gitHub-black.svg';
import artagentSm from '../img/projects/artagent-small.png';
import architecturaBig from '../img/projects/architectural-big.png';

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
        description: 'RSS-специализированный формат, предназначенный для описания новостных лент, анонсов статей и других материалов',
        skills: 'Js, MVC, валидация форм, настройка Webpack, Axios, Bootstrap',
        key: 1,
    },
    {
        title: 'Chat App' ,
        img: chatAppSm,
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
        title: 'Landing' ,
        img: artagentSm,
        imgBig: architecturaBig, 
        githubLink: 'https://github.com/ArtyomVolkov1/architectural-agency',
        deployLink: 'https://artyomvolkov1.github.io/architectural-agency/',
        buttonImg: gitHubBlack,
        previewName: 'Preview',
        buttonName: 'Github repo',
        description: 'Лендинг архитектурного агентства с формой обратной связи (демо-версия)',
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
        description: 'Набор из пяти простых консольных игр. Каждая игра задает вопросы, на которые нужно дать правильные ответы',
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
        description: 'Программа, определяющая разницу между двумя структурами данных.(JSON или YML формате)',
        skills: 'Js, Jest, Commander.js, Построение архитектуры проекта',
        key: 5,
    },
];

export { projects };