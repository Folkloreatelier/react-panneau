import React from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/isString';
import get from 'lodash/get';
import { PropTypes as PanneauPropTypes } from '@panneau/core';
import { Card } from '@panneau/field';
import { injectIntl } from 'react-intl';

import messages from './messages';

import styles from './styles.scss';

const propTypes = {
    intl: PropTypes.shape({
        formatMessage: PropTypes.func,
    }).isRequired,
    pagesLabel: PanneauPropTypes.message,
    sizeLabel: PanneauPropTypes.message,
    thumbnailPath: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    pagesPath: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    sizePath: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

const defaultProps = {
    pagesLabel: messages.pages,
    sizeLabel: messages.size,
    thumbnailPath: ['thumbnail', 'thumbnails.0.url'],
    pagesPath: 'pages',
    sizePath: 'original_file.size_human',
};

const DocumentCard = ({
    intl, pagesLabel, sizeLabel, pagesPath, sizePath, ...props
}) => (
    <Card
        className={styles.document}
        getDetails={(media) => {
            const pages = get(media, pagesPath, null);
            const size = get(media, sizePath, null);
            const details = {};
            if (pages !== null) {
                details[isString(pagesLabel) ? pagesLabel : intl.formatMessage(pagesLabel)] = pages;
            }
            if (size !== null) {
                details[isString(sizeLabel) ? sizeLabel : intl.formatMessage(sizeLabel)] = size;
            }
            return details;
        }}
        {...props}
    />
);

DocumentCard.propTypes = propTypes;
DocumentCard.defaultProps = defaultProps;

export default injectIntl(DocumentCard);
