import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { RouterConfig, getSceneConfig } from './router-config';
import { RouterAnimation, RouteAnimateContent } from '../styles/router-animation';

let oldLocation = null;
const Routes = withRouter(({ location, history }) => {
    let classNames = '';
    if (history.action === 'PUSH') {
        classNames = `page ${getSceneConfig(location).enter}`;
    } else if (history.action === 'POP' && oldLocation) {
        classNames = `page ${getSceneConfig(oldLocation).exit}`;
    }

    oldLocation = location;

    return (
        <RouterAnimation>
            <TransitionGroup
                childFactory={(child) => React.cloneElement(child, { classNames })}
            >
                <CSSTransition
                    timeout={300}
                    key={location.pathname}
                >
                    <RouteAnimateContent>
                        <Switch location={location}>
                            {
                                RouterConfig.map((config) => (
                                    <Route
                                        key={config.path}
                                        path={config.path}
                                        component={config.component}
                                        exact={config.exact}
                                    />
                                ))
                            }
                        </Switch>
                    </RouteAnimateContent>
                </CSSTransition>
            </TransitionGroup>
        </RouterAnimation>
    );
});

export default Routes;
