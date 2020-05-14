import React from 'react';

import { reduxForm, Field } from 'redux-form';

import cx from 'classnames';
import styles from './register.module.scss';
import buttonStyle from '../../components/button/button.module.scss';
import { Input, RadioButton, FieldFileInput } from '../../components/formControls/formControls';

import {
  required,
  nameValidate,
  emailValidate,
  phoneValidate,
  validateImageWidth,
  validateImageHeight,
  validateImageFormat,
  validateImageMaxWeight,
} from './utils/validators';

const validateImageMinWidth70 = validateImageWidth(null, 70);

const validateImageMinHeight70 = validateImageHeight(null, 70);

const validateImageMaxWeight5000 = validateImageMaxWeight(5000);

function Register(props) {
  const onSubmit = (data) => {
    const {
      name, position, email, phone, image,
    } = data;
    const formData = new FormData();
    formData.append('position_id', position);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', image);
    props.register(formData);
  };
  return (
    <div className={styles.register}>
      <h2 id="register" className={styles.title}>Register to get a work</h2>
      <p className={styles.description}>
        Attention! After successful
        registration and alert, update the
        list of users in the block from the top
      </p>

      <LoginReduxForm positions={props.positions} onSubmit={onSubmit} />
    </div>
  );
}
function RegisterForm(props) {
  const { handleSubmit } = props;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputBlock}>
        <span className={styles.inputTitle}>Name</span>
        <Field
          placeholder="Your name"
          type="text"
          name="name"
          component={Input}
          validate={[required, nameValidate]}
        />
      </div>
      <div className={styles.inputBlock}>
        <span className={styles.inputTitle}>Email</span>
        <Field
          placeholder="Your email"
          type="mail"
          name="email"
          component={Input}
          validate={[required, emailValidate]}
        />
      </div>
      <div className={styles.inputBlock}>
        <span className={styles.inputTitle}>Phone number</span>
        <Field
          pattern="+[0-9]{12}"
          placeholder="+380 XX XXX XX XX"
          type="tel"
          name="phone"
          component={Input}
          validate={[required, phoneValidate]}
        />
        <span className={styles.phoneDescription}>Еnter phone number in open format</span>
      </div>

      <p className={styles.radioButtonsTitle}>Select your position</p>

      <div className={styles.radioButtons}>

        {props.positions.map((position) => (
          <Field key={position.id} className={styles.radioButton} text={position.name} name="position" component={RadioButton} type="radio" value={String(position.id)} />
        ))}

      </div>
      <p className={styles.inputFileTitle}>Photo</p>
      <Field
        name="image"
        type="file"
        component={FieldFileInput}
        validate={[
          required,
          validateImageFormat,
          validateImageMaxWeight5000,
          validateImageMinWidth70,
          validateImageMinHeight70,
        ]}
      />
      <button type="submit" className={cx(buttonStyle.button, buttonStyle.primary)}>
        <span className={buttonStyle.text}>Sing up now</span>
      </button>

    </form>
  );
}

const LoginReduxForm = reduxForm({ form: 'register', initialValues: { position: true } })(RegisterForm);


export default Register;
