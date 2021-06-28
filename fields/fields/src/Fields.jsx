/* eslint-disable react/jsx-props-no-spreading */
import { PropTypes as PanneauPropTypes } from '@panneau/core';
import { useFieldsComponents, useFieldsManager } from '@panneau/core/contexts';
import { getComponentFromName } from '@panneau/core/utils';
import FormGroup from '@panneau/element-form-group';
import FormRow from '@panneau/element-form-row';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment, useCallback } from 'react';

const propTypes = {
    components: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    fields: PanneauPropTypes.fields,
    value: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    horizontal: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
};

const defaultProps = {
    components: null,
    fields: [],
    value: null,
    horizontal: false,
    className: null,
    onChange: null,
};

const Fields = ({
    components: providedComponents,
    fields,
    value,
    horizontal: fieldsHorizontal,
    onChange,
    className,
}) => {
    const fieldsManager = useFieldsManager();
    const contextComponents = useFieldsComponents();
    const components = providedComponents || contextComponents;

    const onFieldChange = useCallback(
        ({ name = null }, newFieldValue) => {
            const newValue =
                name !== null
                    ? {
                          ...value,
                          [name]: newFieldValue,
                      }
                    : {
                          ...value,
                          ...newFieldValue,
                      };
            if (onChange !== null) {
                onChange(newValue);
            }
        },
        [onChange, value],
    );

    const content = fields.map((field, index) => {
        const {
            type = null,
            component = null,
            name = null,
            horizontal = false,
            inline = false,
            // TODO: test this
            withoutFormGroup = false,
            siblingFields = [],
            defaultValue = null,
            className: fieldClassName = null,
            groupClassName = null,
            labelClassName = null,
            ...fieldProps
        } = field || {};

        const fieldDefinition = type !== null ? fieldsManager.getDefinition(type) : null;
        const {
            id,
            component: definitionComponent = null,
            ...definitionProps
        } = fieldDefinition || {};

        const FieldComponent = getComponentFromName(component || definitionComponent, components);

        let fieldValue = null;
        if (value !== null && name !== null) {
            fieldValue = value[name];
        } else if (name === null) {
            fieldValue = value;
        }

        if (defaultValue !== null && (typeof fieldValue === 'undefined' || fieldValue === null)) {
            fieldValue = defaultValue;
        }

        const fieldElement =
            FieldComponent !== null ? (
                <FieldComponent
                    {...definitionProps}
                    {...fieldProps}
                    name={name}
                    value={fieldValue}
                    onChange={(newValue) => onFieldChange(field, newValue)}
                    className={fieldClassName}
                />
            ) : null;

        return (
            <Fragment key={`field-${name || index}-${index + 1}`}>
                {!withoutFormGroup && fieldElement !== null ? (
                    <FormGroup
                        key={`field-${name || index}`}
                        {...definitionProps}
                        {...fieldProps}
                        horizontal={horizontal}
                        inline={inline}
                        className={classNames([groupClassName])}
                        labelClassName={classNames([labelClassName])}
                    >
                        {fieldElement}
                    </FormGroup>
                ) : (
                    fieldElement
                )}
                {siblingFields !== null && siblingFields.length > 0 ? (
                    <Fields fields={siblingFields} value={value} onChange={onChange} />
                ) : null}
            </Fragment>
        );
    });

    return (
        <div
            className={classNames([
                {
                    [className]: className !== null,
                },
            ])}
        >
            {fieldsHorizontal ? <FormRow>{content}</FormRow> : content}
        </div>
    );
};

Fields.propTypes = propTypes;
Fields.defaultProps = defaultProps;

export default Fields;
