import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GeneratorForm extends Component {
  constructor(props) {
    super(props);
    this.state = { error : false, generated : false, entropyLowerBound : 0, entropyUpperBound : 0, strength : "Unknown" }
  }

  render() {
    return (
      <form className="GeneratorForm">
        {this.state.error && 
        <div className="error-box">
          <h4 className="error-title">There's been some sort of error!</h4>
        </div>
        }
        <row className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Words</h4>
          </div>
          <div className="col-md-8">

            <div className="row form-row"><div className="col-md-12">
            <label className="small-caps-title" for="language-dropdown">Language
              <select className="number" id="language-dropdown">
                <option value="British">British English</option>
                <option value="American">American English</option>
              </select>
            </label>
            </div></div>

            <div className="row form-row"><div className="col-md-12">
            <label className="small-caps-title" for="number-of-words-dropdown">Number of Words
            <select className="number" id="number-of-words-dropdown">
                <option value="3">3</option>
                <option selected="selected" value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            </label>
            </div></div>

            <div className="row form-row">
            <div className="col-md-6">
            <label class="small-caps-title" for="minimum-word-length">Minimum Word Length
            <select class="number" id="minimum-word-length">
                <option value="3">3</option>
                <option selected="selected" value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            </label>
            </div>
            <div className="col-md-6">
            <label class="small-caps-title" for="maximum-word-length">Maximum Word Length
            <select class="number" id="maximum-word-length">
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option selected="selected" value="6">6</option>
                <option value="7">7</option>
            </select>
            </label>
            </div>
            </div>

          </div>
        </row>
        <hr/>

        <row className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Transformations</h4>
          </div>
          <div className="col-md-8">

            <div className="row form-row"><div className="col-md-12">
            <label class="small-caps-title" for="transformations-dropdown">Transformations to apply to words
            <select class="u-full-width" id="transformations-dropdown">
                <option value="alternate_word_case">alternate WORD case</option>
                <option value="capitilise_each_word">Capitalise First Letter</option>
                <option value="capitilise_all_other">lOWERCASE fIRST lETTER</option>
            </select>
            </label>
            </div></div>

          </div>
        </row>
        <hr/>

        <row className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Seperator</h4>
          </div>
          <div className="col-md-8">

            <div className="row form-row"><div className="col-md-12">
            <label class="small-caps-title" for="seperator-dropdown">Character Set
            <select class="u-full-width" id="seperator-dropdown">
                <option selected="selected" value="random">Random</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="|">|</option>
                <option value="[">[</option>
                <option value="]">]</option>
                <option value="=">=</option>
            </select>
            </label>
            </div></div>

          </div>
        </row>
        <hr/>

        <row className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Digit Padding</h4>
          </div>
          <div className="col-md-8">

          <div className="row form-row">
            <div className="col-md-6">
            <label class="small-caps-title" for="digits-before">Digits Before
            <select class="number" id="digits-before">
                <option selected="selected" value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            </label>
            </div>
            <div className="col-md-6">
            <label class="small-caps-title" for="digits-after">Digits After
            <select class="number" id="digits-after">
                <option selected="selected" value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            </label>
            </div>
            </div>

          </div>
        </row>
        <hr/>

        <row className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Password Padding</h4>
          </div>
          <div className="col-md-8">

          <div className="row form-row">
            <div className="col-md-6">
            <label class="small-caps-title" for="padding-characters-before">Characters Before
            <select class="number" id="padding-characters-before">
                <option selected="selected" value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            </label>
            </div>
            <div className="col-md-6">
            <label class="small-caps-title" for="padding-characters-after">Characters After
            <select class="number" id="padding-characters-after">
                <option selected="selected" value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            </label>
            </div>
            </div>

            <div className="row form-row"><div className="col-md-12">
            <label class="small-caps-title" for="password-padding-set">Character Set
            <select class="u-full-width" id="password-padding-set">
                <option selected="selected" value="random">Random</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="|">|</option>
                <option value="[">[</option>
                <option value="]">]</option>
                <option value="=">=</option>
            </select>
            </label>
            </div></div>

          </div>
        </row>
        <hr/>

        <row className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Statistics</h4>
          </div>
          <div className="col-md-8">

            <div class="row">
              <div class="col-md-6">
              <h1 class="small-caps-title">Entropy</h1>
              <h1 class="stats-text">
                {this.state.entropyLowerBound} bits <small><br/>to<br/></small> {this.state.entropyUpperBound} bits
              </h1>
              </div>
              <div class="col-md-6">
              <h1 class="small-caps-title">Strength</h1>
              <h1 class="stats-text" id="strength-text">
                {this.state.strength}
              </h1>
              </div>
            </div>

          </div>
        </row>

        <div className="generate-button-wrapper">
          <button type="submit" className="btn btn-generate">Generate</button>
        </div>

        {this.state.generated && 
        <div class="generated-password-wrapper">
                <h4>Your password is</h4>
                <h1>{this.state.generatedPassword}</h1>
        </div>
        }

      </form>
    )
  }
}

GeneratorForm.propTypes = {}

GeneratorForm.defaultProps = {}

export default GeneratorForm
