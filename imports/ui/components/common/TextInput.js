import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

// TextInput component - reusable form component
class TextInput extends PureComponent {
  render = () => {
    const { name, label, placeholder, value, onChange, error, type='text' } = this.props;
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
      wrapperClass += ' ' + 'has-error';
    }
    return (
      <div className="row">
        <div className={wrapperClass}>
          <label htmlFor={name}>{label}</label>
          <input type={type}
                 name={name}
                 placeholder={placeholder}
                 value={value}
                 className="form-control"
                 onChange={onChange}
          />
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
