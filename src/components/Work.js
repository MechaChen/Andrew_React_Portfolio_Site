import React from "react";

const Work = props => (
  <React.Fragment>
    <h1>Perfect Work is here.</h1>
    <p>{`My ${props.match.params.id}st work is here.`}</p>
  </React.Fragment>
);

export default Work;
