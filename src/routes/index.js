import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { RouterConfig, getSceneConfig } from './router-config';

let oldLocation = null;
const Routes = withRouter(({ location, history }) => {
    let classNames = '';
    if (history.action === 'PUSH') {
        classNames = `page-forward ${getSceneConfig(location).enter}`;
    } else if (history.action === 'POP' && oldLocation) {
        classNames = `page-back ${getSceneConfig(oldLocation).exit}`;
    }

    oldLocation = location;

    return (
        <TransitionGroup
            className="route-container"
            childFactory={(child) => React.cloneElement(child, { classNames })}
        >
            <CSSTransition
                timeout={100}
                key={location.pathname}
            >
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
            </CSSTransition>
        </TransitionGroup>
    );
});

export default Routes;
