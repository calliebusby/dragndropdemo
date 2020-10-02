import * as React from 'react';
import './App.css';
import * as SRD from '@projectstorm/react-diagrams';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




export class Diagram {
  activeModel: SRD.DiagramModel;
  diagramEngine: SRD.DiagramEngine;

  constructor() {
    this.diagramEngine = SRD.default();
    this.activeModel = new SRD.DiagramModel();
    this.newModel();
  }

  public newModel() {
    this.diagramEngine.setModel(this.activeModel);
  }

  public getActiveDiagram(): SRD.DiagramModel {
    return this.activeModel;
  }

  public getDiagramEngine(): SRD.DiagramEngine {
    return this.diagramEngine;
  }
}

// export default Diagram;
