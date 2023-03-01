import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import { FormStyled, Label, Input } from './Form.styled';

const errorString = styled.div`
  color: red;
  font-size: 14px;
`;

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(5).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ contacts, onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (contacts.find(contact => contact.name === values.name)) {
      alert(`${values.name} is already in contacts`);
    } else {
      onSubmit(values);
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyled autoComplete="off">
        <Label>
          Name
          <ErrorMessage name="name" component={errorString} />
          <Input placeholder="Enter name" type="text" name="name" />
        </Label>
        <Label>
          Number
          <ErrorMessage name="number" component={errorString} />
          <Input placeholder="Enter number" type="tel" name="number" />
        </Label>
        <button type="submit">Add contact</button>
      </FormStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
