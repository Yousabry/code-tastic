import * as React from "react";
import Editor from "@monaco-editor/react";
import { Button, Modal } from "react-bootstrap";
import { IPerson } from "./IPerson";
import { FilterStartFlag } from "./FilterDefaultValue";

export class FilterCodeEditor extends React.Component<
  FilterCodeEditorProps,
  FilterCodeEditorState
> {
  constructor(props: FilterCodeEditorProps) {
    super(props);
    this.state = {
      darkMode: false,
      unsavedCode: this.props.code,
      editPopoverOpen: false,
    };
  }

  closePopover = () => {
    this.setState({ editPopoverOpen: false });
  };

  getCleanCode = (): string => {
    let s: string = this.state.unsavedCode;

    let i: number = s.indexOf(FilterStartFlag);

    s = s.slice(i + FilterStartFlag.length);
    s = s.slice(0, -1);

    return s;
  };

  saveAndClose = () => {
    try {
      // update function in parent
      let newFunction: any = new Function("person", this.getCleanCode());

      this.props.onSave(this.state.unsavedCode, newFunction);
    } catch (err) {
      console.error(err);
      this.props.showError();
    }

    this.closePopover();
  };

  cancelAndClose = () => {
    // delete changes
    this.setState({ unsavedCode: this.props.code });
    this.closePopover();
  };

  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={() => this.setState({ editPopoverOpen: true })}
        >
          {this.props.buttonName}
        </Button>
        {this.state.editPopoverOpen && (
          <Modal
            size="xl"
            show={true}
            onHide={this.closePopover}
            dialogClassName="Popover"
          >
            <Modal.Header>
              <Modal.Title>{this.props.buttonName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Editor
                height="400px"
                defaultLanguage="typescript"
                theme={this.state.darkMode ? "vs-dark" : "light"}
                defaultValue={this.props.code}
                onChange={(newVal: string | undefined) => {
                  this.setState({ unsavedCode: newVal || "" });
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={this.saveAndClose}
                disabled={this.props.code === this.state.unsavedCode}
              >
                Save
              </Button>
              <Button variant="danger" onClick={this.cancelAndClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}

export interface FilterCodeEditorProps {
  buttonName: string;
  code: string;
  onSave: (newCode: string, f: (person: IPerson) => boolean) => void;
  showError: () => void;
}

export interface FilterCodeEditorState {
  darkMode: boolean;
  unsavedCode: string;
  editPopoverOpen: boolean;
}
