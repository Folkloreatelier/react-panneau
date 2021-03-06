/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages } from 'react-intl';
import { PropTypes as PanneauPropTypes } from '@panneau/core';
import { useDefinition, useUrlGenerator } from '@panneau/core/contexts';
import ItemField from '@panneau/field-item';

const messages = defineMessages({
    placeholder: {
        id: 'fields.page.placeholder',
        description: 'Placeholder of the page autosuggest input',
        defaultMessage: 'Search for a page...',
    },
});

const propTypes = {
    placeholder: PanneauPropTypes.message,
    resourceId: PropTypes.string,
    endpoint: PropTypes.string,
};

const defaultProps = {
    placeholder: messages.placeholder,
    resourceId: 'pages',
    endpoint: null,
};

const PageField = ({ resourceId, endpoint, ...props }) => {
    const urlGenerator = useUrlGenerator();
    const definition = useDefinition();
    let suggestionsEndpoint = endpoint;
    if (suggestionsEndpoint === null) {
        const resource = definition.resource(resourceId);
        suggestionsEndpoint = resource !== null ? urlGenerator.resource(resource, 'index') : null;
    }

    return (
        <ItemField
            cardItemMap={{
                name: 'title',
                created_at: 'created_at',
                thumbnail: 'image',
            }}
            autosuggestProps={{
                suggestionsEndpoint,
                suggestionValuePath: 'title',
                suggestionTitlePath: 'title',
            }}
            {...props}
        />
    );
};

PageField.propTypes = propTypes;
PageField.defaultProps = defaultProps;

export default PageField;
