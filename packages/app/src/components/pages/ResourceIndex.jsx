import React, { useCallback, useMemo } from 'react';
import { parse as parseQuery, stringify as stringifyQuery } from 'query-string';
import { useLocation, useHistory } from 'react-router';
import classNames from 'classnames';
// import omit from 'lodash/omit';
// import { defineMessages } from 'react-intl';

import { PropTypes as PanneauPropTypes } from '@panneau/core';

import { ResourceProvider } from '@panneau/core/contexts';
import { useResourceUrlGenerator } from '@panneau/core/hooks';

import Button from '@panneau/element-button';
import Alert from '@panneau/element-alert';

import MainLayout from '../layouts/Main';
import PageHeader from '../partials/PageHeader';
import ResourceLabel from '../partials/ResourceLabel';

import ResourceItemsList from '../lists/ResourceItems';

import resourcesMessages from '../resourcesMessages';

const propTypes = {
    resource: PanneauPropTypes.resource.isRequired,
};

const defaultProps = {};

const ResourceIndexPage = ({ resource }) => {
    const {
        label,
        can_create: canCreate = true,
        index_is_paginated: paginated = false,
        components: { index = {} } = {},
    } = resource;
    console.log('index', index);
    const { component: indexComponent = null, props: indexProps = null } = index || {};

    const { search } = useLocation();
    const history = useHistory();
    const query = useMemo(() => parseQuery(search), [search]);
    const listQuery = useMemo(() => query, [query]); // TODO: omit routes
    const { created = false, deleted = false } = query || {};

    const resourceRoute = useResourceUrlGenerator(resource);
    const url = resourceRoute('index');
    const onQueryChange = useCallback(
        (submitQuery) => {
            history.push(
                `${url}?${stringifyQuery(submitQuery, {
                    arrayFormat: 'bracket',
                })}`,
            );
        },
        [history, url],
    );
    const onClickCloseAlert = useCallback(() => {
        history.replace(url);
    }, [history, url]);

    return (
        <ResourceProvider resource={resource}>
            <MainLayout>
                <PageHeader
                    title={label}
                    actions={
                        canCreate ? (
                            <Button href={resourceRoute('create')} size="lg" theme="primary">
                                <ResourceLabel resource={resource}>
                                    {resourcesMessages.create}
                                </ResourceLabel>
                            </Button>
                        ) : null
                    }
                />
                <div className={classNames(['container-sm py-4'])}>
                    {created ? (
                        <Alert className="mb-4" onClose={onClickCloseAlert}>
                            <ResourceLabel resource={resource}>
                                {resourcesMessages.created}
                            </ResourceLabel>
                        </Alert>
                    ) : null}
                    {deleted ? (
                        <Alert className="mb-4" onClose={onClickCloseAlert}>
                            <ResourceLabel resource={resource}>
                                {resourcesMessages.deleted}
                            </ResourceLabel>
                        </Alert>
                    ) : null}
                    <ResourceItemsList
                        resource={resource}
                        baseUrl={url}
                        query={listQuery}
                        paginated={paginated}
                        component={indexComponent}
                        componentProps={indexProps}
                        onQueryChange={onQueryChange}
                    />
                </div>
            </MainLayout>
        </ResourceProvider>
    );
};
ResourceIndexPage.propTypes = propTypes;
ResourceIndexPage.defaultProps = defaultProps;

export default ResourceIndexPage;