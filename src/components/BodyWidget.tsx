
import * as React from 'react';
import * as _ from 'lodash';
import { TrayWidget } from "./TrayWidget";
import { Diagram } from '../App';
import { TrayItemWidget } from './TrayItemWidget';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from './DemoCanvasWidget';
// import styled from '@emotion/styled';
import styled from "styled-components";

export interface BodyWidgetProps {
    app: Diagram;
}


    export const Body = styled.div`
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		min-height: 100%;
	`;

    export const Header = styled.div`
		display: flex;
		background: rgb(30, 30, 30);
		flex-grow: 0;
		flex-shrink: 0;
		color: white;
		font-family: Helvetica, Arial, sans-serif;
		padding: 10px;
		align-items: center;
	`;

    export const Content = styled.div`
		display: flex;
		flex-grow: 1;
	`;

    export const Layer = styled.div`
		position: relative;
		flex-grow: 1;
	`;


export class BodyWidget extends React.Component<BodyWidgetProps> {
    render() {
        return (
            <Body>
                <Header>
                    <div className="title">Storm React Diagrams - DnD demo</div>
                </Header>
                <Content>
                    <TrayWidget>
                        <TrayItemWidget model={{ type: 'in' }} name="In Node" color="rgb(192,255,0)" />
                        <TrayItemWidget model={{ type: 'out' }} name="Out Node" color="rgb(0,192,255)" />
                    </TrayWidget>
                    <Layer
                        onDrop={(event) => {
                            var data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
                            var nodesCount = _.keys(this.props.app.getDiagramEngine().getModel().getNodes()).length;

                            var node: DefaultNodeModel = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(0,192,255)');
                            if (data.type === 'in') {
                                node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(192,255,0)');
                                node.addInPort('In');
                            } else {
                                node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(0,192,255)');
                                node.addOutPort('Out');
                            }
                            var point = this.props.app.getDiagramEngine().getRelativeMousePoint(event);
                            node.setPosition(point);
                            this.props.app.getDiagramEngine().getModel().addNode(node);
                            this.forceUpdate();
                        }}
                        onDragOver={(event) => {
                            event.preventDefault();
                        }}>
                        <DemoCanvasWidget>
                            <CanvasWidget engine={this.props.app.getDiagramEngine()} />
                        </DemoCanvasWidget>
                    </Layer>
                </Content>
            </Body>
        );
    }
}
