import React from "react"
import {connect} from "react-redux"
import {Field, reduxForm} from "redux-form"
import {Input, Button} from "semantic-ui-react"

const InputField = ({ input, meta, ...rest }) =>
  <Input {...input} {...rest} />

    const renderField = (attribute, index) => {
      return (
        <Field
          label={attribute}
          name={attribute}
          component={InputField}
          type="text"
          key={index}
        />
      )
    }

let NodeForm = ({
  initialValues,
  handleSubmit,
  load,
  pristine,
  reset,
  submitting,
  handleCreate,
  addField,

}) => {
  console.log(initialValues)
  if (!initialValues || Object.keys(initialValues).length === 0) {
    return <Button primary onClick={(event) => handleCreate(event)}y>Create</Button>
  }

  return (
    <form
      style={{display: "flex", flexDirection: "column"}}
      onSubmit={handleSubmit}
    >
      {Object.keys(initialValues).map((attribute, index) =>
        attribute !=='id' && renderField(attribute, index)
      )}
      <div>
        <Button primary type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
        <Button
          secondary
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Reset
        </Button>
        <Button
          secondary
          type="button"
          onClick={addField}
        >
          Add Field
        </Button>
      </div>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
NodeForm = reduxForm({
  form: "NodeForm", // a unique identifier for this form
  enableReinitialize: true
})(NodeForm)

// You have to connect() to any reducers that you wish to connect to yourself
NodeForm = connect(state => ({}))(NodeForm)

export default NodeForm
