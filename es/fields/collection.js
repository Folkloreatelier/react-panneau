import FieldsCollection from '../lib/FieldsCollection';

import Select from './SelectField';
import Text from './TextField';
import Color from './ColorField';
import Code from './CodeField';
import Slider from './SliderField';
import Date from './DateField';

var fields = {
    Select: Select,
    Text: Text,
    Color: Color,
    Code: Code,
    Slider: Slider,
    Date: Date
};

var fieldsCollection = new FieldsCollection(fields);

export default fieldsCollection;