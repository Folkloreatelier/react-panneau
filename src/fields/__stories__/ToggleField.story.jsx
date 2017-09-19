import React from 'react';
import { action } from '@storybook/addon-actions';// eslint-disable-line import/no-extraneous-dependencies

import storiesOf from '../../../.storybook/storiesOf';
import ToggleField from '../ToggleField';
import KeepValue from '../../../.storybook/KeepValue';

storiesOf('Fields/Toggle', module)
    .add('simple', () => (
        <div>
            <KeepValue>
                <ToggleField
                    label="Label"
                    helpText="This is an help text"
                    onChange={action('change')}
                />
            </KeepValue>

            <KeepValue>
                <ToggleField
                    label="Disabled"
                    disabled
                    helpText="This is an help text"
                    onChange={action('change')}
                />
            </KeepValue>
        </div>
    ))
    .add('select', () => (
        <div>
            <KeepValue>
                <ToggleField
                    label="Label"
                    type="select"
                    helpText="This is an help text"
                    onChange={action('change')}
                />
            </KeepValue>
            <KeepValue>
                <ToggleField
                    label="Disabled"
                    disabled
                    type="select"
                    helpText="This is an help text"
                    onChange={action('change')}
                />
            </KeepValue>
        </div>
    ));
