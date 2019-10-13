import { lazy } from 'react';
import { waitingRouteComponent } from '../commons/utils';
import NumberColor from './setting/routes/number-color';

const Poker = lazy(() => import('./poker'));
const Setting = lazy(() => import('./setting'));
const SequenceList = lazy(() => import('./setting/routes/sequence-list'));
// const NumberColor = lazy(() => import('./setting/routes/number-color'));
const About = lazy(() => import('./setting/routes/about'));

const DEFAULT_SCENE_CONFIG = {
    enter: 'page-fade-in',
    exit: 'page-fade-out'
};

export const RouterConfig = [
    {
        path: '/',
        component: waitingRouteComponent(Poker),
        exact: true
    },
    {
        path: '/setting',
        component: waitingRouteComponent(Setting),
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/setting/sequence-list',
        component: waitingRouteComponent(SequenceList),
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/setting/number-color',
        component: NumberColor,
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
    {
        path: '/setting/about',
        component: waitingRouteComponent(About),
        exact: true,
        sceneConfig: {
            enter: 'page-right-forward',
            exit: 'page-right-back'
        }
    },
];

export const getSceneConfig = (location) => {
    const matchedRoute = RouterConfig.find((config) => new RegExp(`^${config.path}$`).test(location.pathname));
    return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};
