import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Checkbox, Button, InputSelect, InputSliderRange } from '@components/inputs';
import formStyle from '@styles/blocks/form.scss';
import style from '@styles/blocks/search-form.scss';
import cx from 'classnames';

const countRoomsOptions = [
  { label: 'Студия', value: 'studio' },
  { label: '1-комнатная', value: '1' },
  { label: '2-комнтаная', value: '2' },
  { label: '3-комнатная', value: '3' },
  { label: '4-комнатная', value: '4' },
  { label: '5-комнтаная', value: '5' },
  { label: '6-комнатная', value: '6' },
];

const SearchForm = ({ handleSubmit, isLoading }) => (
  <form className={cx(formStyle.formDefault, style.searchForm)} onSubmit={handleSubmit}>
    <div className={style.wrapInputs}>
      <div className={style.wrapCheckboxes}>
        <Field id="mortgage" name="mortgage" component={Checkbox}>Ипотека</Field>
        <Field id="installment" name="installment" component={Checkbox}>Рассрочка</Field>
      </div>
      <div className={style.wrapSelectAndPrice}>
        <Field name="countRooms" component={InputSelect} isMulti options={countRoomsOptions} />
        <Field name="price" component={InputSliderRange} />
      </div>
    </div>
    <Button
      disabled={isLoading}
      className={style.buttonSubmit}
      type="submit"
    >
      {'Подобрать'}
    </Button>
  </form>
);

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};

SearchForm.defaultProps = {
  handleSubmit: undefined,
  isLoading: false,
};

export default reduxForm({
  form: 'SearchForm',
  initialValues: { mortgage: false, installment: false },
})(SearchForm);
