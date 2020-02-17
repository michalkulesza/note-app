import React, { Component } from "react";
import "./SidePanel.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { activeNote, newNote } from "../actions";

import SideNote from "./SideNote";
import IosAddCircleOutline from "react-ionicons/lib/IosAddCircleOutline";

class SidePanel extends Component {
  render() {
    return (
      <div
        className={
          this.props.options.sidePanelCollapsed
            ? "sidepanel-wrapper uncollapsed"
            : "sidepanel-wrapper"
        }
      >
        <div className="sidepaneltop-wrapper">
          <div className="sidepaneltop-icons">
            <IosAddCircleOutline
              className="icons-top"
              onClick={() => {
                let newId = Math.random();
                this.props.newNote(newId, "New note", "This is a new note");
                this.props.activeNote(newId, "New note", "This is a new note");
              }}
            />
          </div>
        </div>
        <div className="sidepanelmain-wrapper">
          {this.props.notes.length > 0 ? (
            this.props.notes.map(note => {
              return (
                <SideNote
                  data={note.data}
                  key={note.id}
                  id={note.id}
                  activeNote={this.props.active}
                  handleClick={this.props.activeNote}
                />
              );
            })
          ) : (
            <SideNote title={"No notes"} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    active: state.ActiveNoteReducer,
    notes: state.UpdateReducer,
    options: state.OptionsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      activeNote,
      newNote
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
