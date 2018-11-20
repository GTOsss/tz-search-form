import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Checkbox, Button } from '@components/inputs';

const SearchForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field id="mortgage" name="mortgage" component={Checkbox}>Ипотека</Field>
    <Field id="installment" name="installment" component={Checkbox}>Рассрочка</Field>
    <Button type="submit">Подобрать</Button>
  </form>
);

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
};

SearchForm.defaultProps = {
  handleSubmit: undefined,
};

export default reduxForm({ form: 'SearchForm' })(SearchForm);
