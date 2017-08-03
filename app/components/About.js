import React, { Component } from 'react';
import { Modal, Button, Accordion, PanelGroup, Panel } from 'react-bootstrap'

class About extends Component {
  getHeaderNode(){
    return (<div>
							<div className="col-md-3 col-sm-4 col-xs-4 pd-0">
									{`Room ${5}`}
							</div>
					</div>
    )
  }
  constructor(props){
    super(props)
    this.state ={
      arr: [1,2,3,4,5]
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h2>This is panel group of react bootstrap. Error- when we click on panel header it disappeares and further toggle is not possible</h2>
          {this.state.arr.map((item, i)=>{
            return (
              <PanelGroup defaultActiveKey="1" accordion>
                    <Panel key={i +1} header={this.getHeaderNode()} eventKey={(i+1).toString()}>
                      <p>Panel content will render here {item}</p>
                    </Panel> 
                  </PanelGroup>
            )
          })}
        </div>
      </div>
    );
  }
}

export default About;
