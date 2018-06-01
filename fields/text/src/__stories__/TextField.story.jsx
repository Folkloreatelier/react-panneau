import React from 'react';
import { action } from '@storybook/addon-actions';// eslint-disable-line import/no-extraneous-dependencies

import storiesOf from '../../../../.storybook/storiesOf';
import KeepValue from '../../../../.storybook/KeepValue';
import TextField from '../TextField';
import TextLocaleField from '../TextLocaleField';

storiesOf('Fields/Text', module)
    .add('simple', () => (
        <div>
            <KeepValue>
                <TextField
                    label="Label"
                    helpText="This is an help text"
                    placeholder="This is a placeholder..."
                    onChange={action('change')}
                />
            </KeepValue>
            <KeepValue>
                <TextField
                    label="Disabled"
                    disabled
                    onChange={action('change')}
                />
            </KeepValue>
            <KeepValue>
                <TextField
                    label="With an error"
                    errors="This field is invalid"
                    onChange={action('change')}
                />
            </KeepValue>
            <KeepValue>
                <TextField
                    label="With a maxlength"
                    maxLength={10}
                    onChange={action('change')}
                />
            </KeepValue>
        </div>
    ))
    .add('with suffix and prefix', () => (
        <TextField
            label="Label"
            helpText="This is an help text"
            placeholder="0.00"
            prefix="Total"
            suffix="$"
            align="right"
            onChange={action('change')}
        />
    ))
    .add('other field types', () => (
        <div>
            <KeepValue>
                <TextLocaleField
                    label="TextLocale"
                    locales={['fr', 'en', 'es']}
                    onChange={action('change')}
                />
            </KeepValue>
            <KeepValue>
                <TextField
                    label="Textarea"
                    type="textarea"
                    onChange={action('change')}
                />
            </KeepValue>
            <form>
                <KeepValue>
                    <TextField
                        label="Editor"
                        type="editor"
                        onChange={action('change')}
                    />
                </KeepValue>
            </form>
        </div>
    ));
