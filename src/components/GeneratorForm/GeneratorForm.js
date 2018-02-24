import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormSection from '../FormSection/FormSection.js';

class GeneratorForm extends Component {
  constructor(props) {
    super(props);
    this.state = { error : false }
  }

  render() {
    return (
      <form className="GeneratorForm">
        {this.state.error && "There's been an error!"}
        <row className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Words</h4>
          </div>
          <div className="col-md-8">
          
          </div>
        </row>
        <hr/>
      </form>
    )
  }
}

GeneratorForm.propTypes = {}

GeneratorForm.defaultProps = {}

export default GeneratorForm
