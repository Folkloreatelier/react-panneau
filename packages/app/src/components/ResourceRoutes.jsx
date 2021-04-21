import React from 'react';
import { Switch, Route } from 'react-router';

import { PropTypes as PanneauPropTypes } from '@panneau/core';
import { useUrlGenerator } from '@panneau/core/contexts';
import { getComponentFromName } from '@panneau/core/utils';

import * as basePages from './pages';

const propTypes = {
    resource: PanneauPropTypes.resource.isRequired,
};

const defaultProps = {};

const ResourceRoutes = ({ resource }) => {
    const { id: resourceId, has_routes: hasRoutes, pages = {} } = resource;

    const route = useUrlGenerator();
    const routeName = hasRoutes ? `resources.${resourceId}` : 'resources';

    // Load custom pages from resource
    const {
        index: indexPage = null,
        show: showPage = null,
        create: createPage = null,
        edit: editPage = null,
        delete: deletePage = null,
    } = pages || {};

    const ResourceIndexComponent = getComponentFromName(
        indexPage?.component || 'index',
        basePages,
        indexPage?.component,
    );

    const ResourceShowComponent = getComponentFromName(
        showPage?.component || 'show',
        basePages,
        showPage?.component,
    );

    const ResourceCreateComponent = getComponentFromName(
        createPage?.component || 'create',
        basePages,
        createPage?.component,
    );

    const ResourceEditComponent = getComponentFromName(
        editPage?.component || 'edit',
        basePages,
        editPage?.component,
    );

    const ResourceDeleteComponent = getComponentFromName(
        deletePage?.component || 'delete',
        basePages,
        deletePage?.component,
    );

    return (
        <Switch>
            <Route
                path={route(`${routeName}.index`, {
                    resource: resourceId,
                })}
                exact
                render={() => <ResourceIndexComponent resource={resource} />}
            />
            <Route
                path={route(`${routeName}.create`, {
                    resource: resourceId,
                })}
                exact
                render={() => <ResourceCreateComponent resource={resource} />}
            />
            <Route
                path={route(`${routeName}.show`, {
                    resource: resourceId,
                    id: ':id',
                })}
                exact
                render={({
                    match: {
                        params: { id },
                    },
                }) => <ResourceShowComponent resource={resource} itemId={id} />}
            />
            <Route
                path={route(`${routeName}.edit`, {
                    resource: resourceId,
                    id: ':id',
                })}
                exact
                render={({
                    match: {
                        params: { id },
                    },
                }) => <ResourceEditComponent resource={resource} itemId={id} />}
            />
            <Route
                path={route(`${routeName}.delete`, {
                    resource: resourceId,
                    id: ':id',
                })}
                exact
                render={({
                    match: {
                        params: { id },
                    },
                }) => <ResourceDeleteComponent resource={resource} itemId={id} />}
            />
        </Switch>
    );
};
ResourceRoutes.propTypes = propTypes;
ResourceRoutes.defaultProps = defaultProps;

export default ResourceRoutes;
