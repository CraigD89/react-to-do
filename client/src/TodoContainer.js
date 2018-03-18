import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import MenuPanel from "./components/MenuPanel";
import TagPanel from "./components/TagPanel";
import TodoPanel from "./components/TodoPanel";

class TodoContainer extends Component {
  state = {};
  render() {
    return (
      <Grid fluid>
        <Row>
          {/* <MenuPanel />
          <TagPanel /> */}
          <TodoPanel />
        </Row>
      </Grid>
    );
  }
}

export default TodoContainer;
