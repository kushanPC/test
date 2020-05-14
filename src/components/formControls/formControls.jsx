import React, { Component } from 'react';
import cx from 'classnames';
import styles from './formControls.module.scss';

export const Input = ({ input, meta, ...props }) => {
  const check = (meta.touched && meta.error);
  return (
    <div className={styles.inputWrap}>
      <div className={cx(styles.formControl, { [styles.error]: check })}>
        <input {...input} {...props} />
      </div>
      <span className={styles.textError}>{check && meta.error}</span>
    </div>
  );
};


export const RadioButton = ({
  text, input, meta, ...props
}) => (

  <label>
    <div className={styles.radioButtonBlock}>
      <input
        {...input}
        {...props}
        className={styles.radioButton}
      />

      <div className={styles.round} />
      <span>{text}</span>
    </div>

  </label>

);


export class FieldFileInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.handleChange.bind(this);
  }

  handleChange(event, input) {
    event.preventDefault();
    const imageFile = event.target.files[0];

    if (imageFile) {
      this.fileName = imageFile.name;
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();

      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
    }
  }

  render() {
    const {
      input, meta,
    } = this.props; // whatever props you send to the component from redux-form Field
    const check = (meta.touched && meta.error);

    const inputLongText = () => (
      this.fileName.length > 19
        ? `${this.fileName.slice(0, 19)}...`
        : this.fileName
    );
    return (
      <div className={styles.inputFileWrap}>
        <label htmlFor="uploadGPEG" className={cx(styles.labelFileInput, { [styles.error]: check })}>

          <span className={cx(styles.placeholder, { [styles.uploadedText]: this.fileName })}>
            {this.fileName
              ? inputLongText()
              : 'No file chosen'}
          </span>
          <input
            id="uploadGPEG"
            className={styles.fileInput}
            name={input.name}
            accept="image/jpeg, image/png"
            type={this.props.type}

            onChange={(event) => this.handleChange(event, input)}
          />

        </label>

        <span className={styles.textError}>{check && meta.error}</span>
      </div>
    );
  }
}
