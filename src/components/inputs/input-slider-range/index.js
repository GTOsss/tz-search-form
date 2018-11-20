import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Range } from 'rc-slider';
import { addSpaceToNumber } from '@utils/string';

import 'rc-slider/assets/index.css';
import './input-slider-range.scss';

class InputSliderRange extends Component {
  static transformValue = (value) => `${addSpaceToNumber(value[0])} - ${addSpaceToNumber(value[1])}`;

  constructor(props) {
    super(props);

    const { defaultValue } = this.props;
    this.state = { currentValue: InputSliderRange.transformValue(defaultValue) };
  }

  onChange = (value) => {
    const { input: { onChange } } = this.props;
    onChange(value);
    this.setState({ currentValue: InputSliderRange.transformValue(value) });
  };

  render() {
    const { currentValue } = this.state;
    const { defaultValue, min, max } = this.props;
    return (
      <div className="input-slider-range">
        <div className="input-slider-range__screen">
          {currentValue}
        </div>
        <Range
          onChange={this.onChange}
          min={min}
          max={max}
          defaultValue={defaultValue}
        />
      </div>
    );
  }
}

InputSliderRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.arrayOf(PropTypes.number),
  input: PropTypes.objectOf(PropTypes.any),
};

InputSliderRange.defaultProps = {
  min: 958400,
  max: 362900000,
  defaultValue: [1000000, 15000000],
  input: {},
};

export { InputSliderRange };
