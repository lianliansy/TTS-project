import React, { Component } from "react";
//import "../css/Note.css";
//import { createStore } from "redux";
//import noteReducer from "../reducers/NoteReducer";
//import { updateNoteBody, updateNoteTitle } from "../actions/NoteActions";

//const store = createStore(noteReducer);

class Note extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.state = {
      title: this.props.title,
      body: this.props.body,
      editMode: false,
      finishCheck: true
    };
  }

  render() {
    let titleElement, bodyElement, buttonArea, finishCheck;
    if (this.state.editMode) {
      titleElement = (
        <textarea
          ref="titleContent"
          className="title-textarea"
          defaultValue={this.state.title}
        />
      );
      bodyElement = (
        <textarea
          ref="bodyContent"
          className="body-textarea"
          defaultValue={this.state.body}
        />
      );
      buttonArea = (
        <div>
          <button
            className="btn btn-primary"
            onClick={this.handleSave.bind(this)}
          >
            Save
          </button>
        </div>
      );
    } else {
      titleElement = <h5>{this.state.title}</h5>;
      bodyElement = <p>{this.state.body}</p>;
      if (this.state.finishedMode) {
        buttonArea = (
          <div>
            <button
              className="btn btn-info"
              onClick={this.handleEdit.bind(this)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={this.handleDelete.bind(this)}
            >
              Delete
            </button>
            <button onClick={this.handleFinish.bind(this)}>unfinish</button>
          </div>
        );
      } else {
        buttonArea = (
          <div>
            <button
              className="btn btn-info"
              onClick={this.handleEdit.bind(this)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={this.handleDelete.bind(this)}
            >
              Delete
            </button>
            <button onClick={this.handleFinish.bind(this)}>finish</button>
          </div>
        );
      }
    }

    if (this.state.finishedMode) {
      finishCheck = <div>Done:✔️</div>;
    } else {
      finishCheck = <div>Done: </div>;
    }

    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            {titleElement}
            {bodyElement}
            {finishCheck}
            {buttonArea}
          </div>
        </div>
      </div>
    );
  }

  handleFinish() {
    this.setState({
      finishedMode: !this.state.finishedMode
    });
  }

  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }

  handleEdit() {
    this.setState({
      editMode: true
    });
  }

  handleSave() {
    store.dispatch(updateNoteTitle(this.refs.titleContent.value));
    store.dispatch(updateNoteTitle(this.refs.bodyContent.value));
    this.setState({
      title: this.refs.titleContent.value,
      body: this.refs.bodyContent.value,
      editMode: false
    });
  }
}

Note.defaultProps = {
  title: "A cool title",
  body: "A cool body"
};

export default Note;
