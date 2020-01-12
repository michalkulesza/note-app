import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateEditor, activeNote, deleteNote, changeOption } from "../actions";
import { Editor } from "@tinymce/tinymce-react";

import IosListBoxOutline from "react-ionicons/lib/IosListBoxOutline";
import MdTrash from "react-ionicons/lib/MdTrash";

class MainPanel extends Component {
  render() {
    return (
      <div className="mainpanel-wrapper">
        <div className="mainpaneltop-wrapper">
          <div className="mainpaneltop-lefticons">
            <IosListBoxOutline
              className="icons-top"
              onClick={() => {
                this.props.changeOption(
                  "sidePanelCollapsed",
                  !this.props.options.sidePanelCollapsed
                );
              }}
            />
          </div>
          <div id="toolbar" className="mainpaneltop-middleicons"></div>
          <div className="mainpaneltop-righticons">
            <MdTrash
              className="icons-top"
              onClick={() => {
                if (this.props.active.index !== null) {
                  this.props.deleteNote(this.props.active.index);
                  setTimeout(() => {
                    if (this.props.editorValue[0] !== undefined) {
                      this.props.activeNote(
                        this.props.editorValue[0].id,
                        this.props.editorValue[0].data
                      );
                    } else {
                      this.props.activeNote(null, "", "Start by adding new note!");
                    }
                  }, 50);
                }
              }}
            />
          </div>
        </div>
        <div className="mainpanelmain-wrapper">
          <Editor
            init={{
              menubar: false,
              statusbar: false,
              fixed_toolbar_container: "#toolbar",
              inline: true,
              auto_focus: true,
              toolbar: "undo h2 h5 bold italic underline",
              type: "text"
            }}
            apiKey="x5w6l41k92h1oduks5ugse5o5ev5dn23xt16c061dazw32rd"
            value={this.props.active.data}
            onEditorChange={value => {
              let index = this.props.active.index;
              if (index !== null) {
                let title = this.props.active.title;
                this.props.activeNote(index, title, value);
                this.props.updateEditor(value, index, "data");
              }
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editorValue: state.UpdateReducer,
    active: state.ActiveNoteReducer,
    options: state.OptionsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateEditor,
      activeNote,
      deleteNote,
      changeOption
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);
