import React, { Component } from "react";

class SideNote extends Component {
  render() {
    return this.props.id && this.props.data ? (
      <div
        className={
          this.props.id === this.props.activeNote.index
            ? "sidenote-wrapper active"
            : "sidenote-wrapper"
        }
        onClick={() => {
          this.props.handleClick(this.props.id, this.props.data);
        }}
      >
        <div
          className={
            this.props.id === this.props.activeNote.index ? "sidenote-title" : "sidenote-preview"
          }
        >
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.data.replace("<h2>", "").replace("<h5>", "")
            }}
          ></div>
        </div>
      </div>
    ) : null;
  }
}

export default SideNote;
