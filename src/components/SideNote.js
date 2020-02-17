import React from "react";
import "./SideNote.scss";

const SideNote = props => {
  return props.id && props.data ? (
    <div
      className={
        props.id === props.activeNote.index ? "sidenote-wrapper active" : "sidenote-wrapper"
      }
      onClick={() => {
        props.handleClick(props.id, props.data);
      }}
    >
      <div className={props.id === props.activeNote.index ? "sidenote-title" : "sidenote-preview"}>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.replace("<h2>", "").replace("<h5>", "")
          }}
        ></div>
      </div>
    </div>
  ) : null;
};

export default SideNote;
