/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import get from 'lodash/get';
import isString from 'lodash/isString';
import { PropTypes as PanneauPropTypes, withDefinition, withUrlGenerator } from '@panneau/core';
import { defineMessages } from 'react-intl';

import NavbarLink from './NavbarLink';
import NavbarDivider from './NavbarDivider';

const messages = defineMessages({
    index: {
        id: 'layouts.navbar.resource.index',
        description: 'The label for a resource "index" navbar menu',
        defaultMessage: 'View all { resource }',
    },
    create: {
        id: 'layouts.navbar.resource.create',
        description: 'The label for a resource "create" navbar menu',
        defaultMessage: 'Create { resource }',
    },
});

const propTypes = {
    urlGenerator: PanneauPropTypes.urlGenerator,
    resource: PanneauPropTypes.resource,
    link: PropTypes.string,
    label: PanneauPropTypes.label,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            label: PanneauPropTypes.label,
        }),
    ),
    className: PropTypes.string,
    onClick: PropTypes.func,
    onClickItem: PropTypes.func,
};

const defaultProps = {
    urlGenerator: null,
    resource: null,
    link: null,
    label: null,
    items: [
        {
            type: 'action',
            action: 'index',
            label: messages.viewAll,
        },
        {
            type: 'divider',
        },
        {
            type: 'action',
            action: 'create',
            label: messages.addNew,
        },
    ],
    className: null,
    onClick: null,
    onClickItem: null,
};

const NavbarResource = ({
    urlGenerator,
    resource,
    link,
    label,
    items,
    className,
    onClick,
    onClickItem,
}) => {
    if (resource === null) {
        return null;
    }
    const routeKeyPrefix = get(resource, 'routes', null) ? `resource.${resource.id}` : 'resource';

    const finalLabel = label || get(resource, 'messages.names.plural', get(resource, 'name', null)) || resource.id;

    const finalLink = link
        || (urlGenerator !== null
            ? urlGenerator.route(`${routeKeyPrefix}.index`, {
                resource: resource.id,
            })
            : null);

    const actions = ['index', 'create'];
    const actionsLabels = actions.reduce((labels, action) => {
        const message = get(resource, `messages.navbar.${action}`, messages[action]);
        return {
            ...labels,
            [action]: isString(message)
                ? message
                : {
                    ...message,
                    values: {
                        resource: get(
                            resource,
                            action === 'index' ? 'messages.names.a_plural' : 'messages.names.a',
                            get(resource, 'name', resource.id),
                        ),
                    },
                },
        };
    }, {});

    const finalItems = (items || []).map(
        it => (get(it, 'type', 'link') === 'action'
            ? {
                ...it,
                label: it.label || get(actionsLabels, it.action, null),
                link:
                          it.link
                          || (urlGenerator !== null
                              ? urlGenerator.route(`${routeKeyPrefix}.${it.action}`, {
                                  resource: resource.id,
                              })
                              : null),
            }
            : it),
    );

    const hasDropdown = finalItems.length > 0;
    return (
        <li
            className={classNames({
                'nav-item': true,
                dropdown: hasDropdown,
                [className]: className !== null,
            })}
        >
            <NavbarLink
                link={finalLink}
                label={finalLabel}
                hasDropdown={hasDropdown}
                onClick={onClick}
            />
            {hasDropdown ? (
                <div className="dropdown-menu">
                    {finalItems.map(
                        (it, index) => (get(it, 'type', 'link') === 'divider' ? (
                            <NavbarDivider key={`item-${index}`} isDropdown />
                        ) : (
                            <NavbarLink
                                key={`item-${index}`}
                                {...it}
                                isDropdown
                                onClick={(e) => {
                                    if (onClickItem !== null) {
                                        onClickItem(e, it, index);
                                    }
                                }}
                            />
                        )),
                    )}
                </div>
            ) : null}
        </li>
    );
};

NavbarResource.propTypes = propTypes;
NavbarResource.defaultProps = defaultProps;

const mapResourceFromDefinition = (definition, { resource }) => ({
    resource: get(definition, 'resources', []).find(it => it.id === resource) || null,
});
const WithDefinitionContainer = withDefinition(mapResourceFromDefinition)(NavbarResource);
const WithUrlGeneratorContainer = withUrlGenerator()(WithDefinitionContainer);
export default WithUrlGeneratorContainer;