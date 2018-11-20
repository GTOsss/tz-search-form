import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

class InputSelect extends Component {
  onChange = (value) => {
    const { input: { onChange } } = this.props;
    onChange(value);
  };

  render() {
    const { ...props } = this.props;
    return (
      <ReactSelect onChange={this.onChange} {...props} />
    );
  }
}


InputSelect.propTypes = {

};

InputSelect.defaultProps = {

};

export { InputSelect };
