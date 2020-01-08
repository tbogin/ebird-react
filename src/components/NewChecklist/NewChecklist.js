import React from 'react';
import './NewChecklist.scss';

class NewChecklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speciesName: '',
      numberSeen: 0,
      checklistItems: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({speciesName: event.target.name, numberSeen: event.target.name});
    const name = event.target.name;
    const value = name.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Submitted');
    event.preventDefault();

    // this.setState({
    //   speciesName: '',
    //   numberSeen: 0,
    // });
  }

  render() {
    return (
      <div className="NewChecklist">
        <div className="row">
          <div className="col">
            New checklist
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* <ChecklistBirdsSeen birdsSeen={this.state.checklistItems} /> */}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form>
              <label>
                Species
                <input name="speciesName" type="text" onChange={this.handleChange} />
              </label>
              <label>
                Number seen
                <input name="numberSeen" type="number" onChange={this.handleChange} />
              </label>
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewChecklist;