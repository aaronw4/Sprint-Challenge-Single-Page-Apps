import React, { useState, useEffect } from "react";
import {withFormik, Form, Field} from 'formik';

function SearchForm(props) {

  const [name, setName] = useState('');

  useEffect(() => {
    if (props.status) {
      setName(props.status);
    }
  }, [props.status])
 
  return (
    <section className="search-form">
      <Form className='form'>
        <Field type='text' name='search' className='input'></Field>
        <button type='submit' className='submit'>Search</button>
      </Form>
    </section>
  );
}

const myMapPropsToValues = props => {
  const returnObj = {
    search: props.search || ''
  };
  return returnObj;
}

const myHandleSubmit = (values) => {
  console.log(values);
}

const formikObj = {
  mapPropsToValues: myMapPropsToValues,
  handleSubmit: myHandleSubmit
}

const EnhancedForm = withFormik(formikObj)
const EnhancedSearchForm = EnhancedForm(SearchForm);

export default EnhancedSearchForm
