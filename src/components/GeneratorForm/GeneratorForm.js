import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GeneratorForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      error : false,
      generated : false,
      entropy : 0,
      strength : "Unknown",
      lengthLowerBound : 0,
      lengthUpperBound : 0,
      coverage : 0
    };
  }

  updateStats(formData) {
    const numberOfWords = Number(formData.get('number-of-words'));
    const minWordLength = Number(formData.get('minimum-word-length'));
    const maxWordLength = Number(formData.get('maximum-word-length'));

    const digitPadding = Number(formData.get('digits-before')) + Number(formData.get('digits-after'));
    const characterPadding = Number(formData.get('characters-before')) + Number(formData.get('characters-after'));

    const seperatorSet = formData.get('seperator-set') == 'Random' ? ['+', '-', '|', '[', ']', '='] : [formData.get('seperator-set')];
    const paddingSet = formData.get('password-padding-set') == 'Random' ? ['+', '-', '|', '[', ']', '='] : [formData.get('password-padding-set')];

    const dictionarySize = 30000;

    const entropy = Math.log2(
      Math.pow(dictionarySize, numberOfWords) * seperatorSet.length * paddingSet.length * (digitPadding == 0 ? 0 : 10)
    ).toFixed(2);

    const totalCharacterSetSize = (
      52 + (digitPadding == 0 ? 0 : 10) + seperatorSet.length + paddingSet.length - (seperatorSet == paddingSet ? seperatorSet.length : 1)
    );
    
    this.setState({
      lengthLowerBound: numberOfWords * minWordLength + (numberOfWords - 1) + digitPadding + characterPadding,
      lengthUpperBound: numberOfWords * maxWordLength + (numberOfWords - 1) + digitPadding + characterPadding,
      coverage : totalCharacterSetSize,
      entropy : entropy
    });
  }

  submitForm() {
    return (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      this.updateStats(formData);

      

      this.setState({generated:true, generatedPassword: formData.get('language')})
    }
  }

  render() {
    return (
      <form className="GeneratorForm" onSubmit={this.submitForm()}>

        {this.state.error && 
          <div className="error-box">
            <h4 className="error-title">There's been some sort of error!</h4>
          </div>}

        {this.state.generated && 
        <div className="generated-password-wrapper">
                <h4>Your generated password is</h4>
                <h1 className="generated-password"><code>{this.state.generatedPassword}</code></h1>
        </div>
        }

        {this.state.generated &&
        <div><div className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Statistics</h4>
          </div>
          <div className="col-md-8">

            <div className="row">
              <div className="col-md-6">
              <h1 className="small-caps-title">Entropy</h1>
              <h1 className="stats-text">
                {this.state.entropy} bits
              </h1>
              </div>
              <div className="col-md-6">
              <h1 className="small-caps-title">Strength</h1>
              <h1 className="stats-text" name="strength-text">
                {this.state.strength}
              </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
              <h1 className="small-caps-title">Length</h1>
              <h1 className="stats-text">
                {this.state.lengthLowerBound} <small>to</small> {this.state.lengthUpperBound} characters
              </h1>
              </div>
              <div className="col-md-6">
              <h1 className="small-caps-title">Coverage</h1>
              <h1 className="stats-text" name="strength-text">
                {this.state.coverage} characters
              </h1>
              </div>
            </div>

          </div>
        </div><hr/></div>
        }

        <div className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Words</h4>
          </div>
          <div className="col-md-8">

            <div className="row form-row"><div className="col-md-12">
            <label className="small-caps-title" >Language
              <select className="number" name="language">
                <option value="British">British English</option>
                <option value="American">American English</option>
              </select>
            </label>
            </div></div>

            <div className="row form-row"><div className="col-md-12">
            <label className="small-caps-title" >Number of Words
            <select className="number" name="number-of-words">
                <option value="3">3</option>
                <option defaultValue="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            </label>
            </div></div>

            <div className="row form-row">
            <div className="col-md-6">
            <label className="small-caps-title" >Minimum Word Length
            <select className="number" name="minimum-word-length">
                <option value="3">3</option>
                <option selected defaultValue="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            </label>
            </div>
            <div className="col-md-6">
            <label className="small-caps-title" >Maximum Word Length
            <select className="number" name="maximum-word-length">
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option selected defaultValue="6">6</option>
                <option value="7">7</option>
            </select>
            </label>
            </div>
            </div>

          </div>
        </div>
        <hr/>

        <div className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Transformations</h4>
          </div>
          <div className="col-md-8">

            <div className="row form-row"><div className="col-md-12">
            <label className="small-caps-title" >Transformations to apply to words
            <select className="u-full-wnameth" name="transformations">
                <option value="alternate_word_case">alternate WORD case</option>
                <option value="capitilise_each_word">Capitalise First Letter</option>
                <option value="capitilise_all_other">lOWERCASE fIRST lETTER</option>
            </select>
            </label>
            </div></div>

          </div>
        </div>
        <hr/>

        <div className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Seperator</h4>
          </div>
          <div className="col-md-8">

            <div className="row form-row"><div className="col-md-12">
            <label className="small-caps-title" >Character Set
            <select className="u-full-wnameth" name="seperator-set">
                <option defaultValue="random">Random</option>
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
        </div>
        <hr/>

        <div className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Digit Padding</h4>
          </div>
          <div className="col-md-8">

          <div className="row form-row">
            <div className="col-md-6">
            <label className="small-caps-title" >Digits Before
            <select className="number" name="digits-before">
                <option defaultValue="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            </label>
            </div>
            <div className="col-md-6">
            <label className="small-caps-title" >Digits After
            <select className="number" name="digits-after">
                <option defaultValue="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            </label>
            </div>
            </div>

          </div>
        </div>
        <hr/>

        <div className="row form-row">
          <div className="col-md-4">
              <h4 className="small-caps-title section-title">Password Padding</h4>
          </div>
          <div className="col-md-8">

          <div className="row form-row">
            <div className="col-md-6">
            <label className="small-caps-title" >Characters Before
            <select className="number" name="characters-before">
                <option defaultValue="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            </label>
            </div>
            <div className="col-md-6">
            <label className="small-caps-title" >Characters After
            <select className="number" name="characters-after">
                <option defaultValue="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            </label>
            </div>
            </div>

            <div className="row form-row"><div className="col-md-12">
            <label className="small-caps-title" >Character Set
            <select className="u-full-wnameth" name="password-padding-set">
                <option defaultValue="random">Random</option>
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
        </div>

        <div className="generate-button-wrapper">
          <button type="submit" className="btn btn-generate">Generate</button>
        </div>

      </form>
    )
  }
}

GeneratorForm.propTypes = {}

GeneratorForm.defaultProps = {}

export default GeneratorForm
