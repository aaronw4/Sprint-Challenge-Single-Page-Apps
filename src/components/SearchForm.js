import React from "react";
import {withFormik, Form, Field} from 'formik';
import axios from 'axios';

function SearchForm() {
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

const myHandleSubmit = (values, {setStatus}) => {
 
  axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      let data = response.data.results;
      return data;      
    })
    .catch(err => console.log(err));
  
  //console.log(data);
  //let name = arr.map(char => char.name);
  //console.log(name)
};

const formikObj = {
  mapPropsToValues: myMapPropsToValues,
  handleSubmit: myHandleSubmit
}

const EnhancedForm = withFormik(formikObj)
const EnhancedSearchForm = EnhancedForm(SearchForm);

export default EnhancedSearchForm
