/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import SelectField from '../SelectField';

export default {
    title: 'Fields/Select',
    component: SelectField,
};

const options = ['One', 'Two', 'Three'];

const Container = (props) => {
    const [value, setValue] = useState(null);
    return <SelectField {...props} value={value} onChange={setValue} />;
};

export const Normal = () => <Container options={options} />;
export const WithoutReset = () => <Container options={options} withoutReset placeholder="Without reset..." />;
export const MultiSelect = () => <Container options={options} isMulti placeholder="Multi select..." />;
export const Searchable = () => <Container options={options} isMulti isSearchable placeholder="Multi select searchable..." />;