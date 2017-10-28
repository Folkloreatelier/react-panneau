import React from 'react';
import { action } from '@storybook/addon-actions'; // eslint-disable-line import/no-extraneous-dependencies

import storiesOf from '../../.storybook/storiesOf';
import KeepValue from '../../.storybook/KeepValue';
import FieldsGroup from '../FieldsGroup';
import withFieldsCollection from '../withFieldsCollection';

var FieldsGroupWithCollection = withFieldsCollection(FieldsGroup);

var fields = [{
    type: 'text',
    name: 'text',
    label: 'Text field'
}, {
    type: 'select',
    name: 'select',
    label: 'Select field'
}, {
    type: 'color',
    name: 'color',
    label: 'Color field'
}, {
    type: 'code',
    name: 'code',
    label: 'Code field'
}];

storiesOf('FieldsGroup', module).add('simple', function () {
    return React.createElement(
        KeepValue,
        null,
        React.createElement(FieldsGroupWithCollection, {
            fields: fields,
            onChange: action('change')
        })
    );
});