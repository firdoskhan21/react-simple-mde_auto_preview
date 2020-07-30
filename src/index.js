import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

class OverlayVisible extends React.Component {
  state = {
    editorValue: "",
    markDownFocused: true
  };

  handleChange = value => {
    this.setState({ editorValue: value });
  };

  render() {
    return (
      <div id={"simple-mde"}>
        {this.state.markDownFocused === true ? (
          <div
          >
            <SimpleMDE
              value={this.state.editorValue}
              options={{
                autofocus: true,
                spellChecker: false,
                showIcons: [
                  "heading-bigger",
                  "heading-1",
                  "heading-2",
                  "heading-3"
                ],
                hideIcons: ["image", "side-by-side", "fullscreen"]
              }}
              events={{
                blur: e => {
                  console.log("Editor Blured!!!");
                  this.setState({ markDownFocused: false });
                },
                focus: e => {
                  console.log("Editor Focused!!!");
                  this.setState({ markDownFocused: true });
                }
                //... Add any codeMirror events
              }}
              onChange={this.handleChange}
            />
          </div>
        ) : (
          <div
            onClick={() => {
              console.log("PreviewClicked!!");
              this.setState({ markDownFocused: true });
            }}
          >
            <MarkdownPreview source={this.state.editorValue} />
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<OverlayVisible />, document.getElementById("container"));
