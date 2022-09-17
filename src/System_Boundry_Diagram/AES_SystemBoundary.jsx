import React, { useState, Fragment } from 'react';
import Driver from '../Icons/Driver';
import "../App.css"
import Enviromental_Data from '../Icons/Enviromental_data';
import Vehicle_system from '../Icons/Vehicle_system';
import HMI from '../Icons/HMI';
import ReactFlow, {ReactFlowProvider, addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';



const initialElements = [
    /*Node*/
    {id: '1-a', type: 'default', data:{label: ''}, position: {x:0,y:-50} ,style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}}},
    {id: '1-b', type: 'default', data:{label: ''}, position: {x:60,y:-50} ,style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}}},
    {id: '1', type: 'default', data:{label: 'Driver'}, position: {x:0,y:-50} ,style:{border:'1px solid black',width:120,height:40,font:{size:'100%'}}},
    {id: '2-a', type: 'default', data:{label: ''}, position: {x:0,y:50},style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}} },
    {id: '2-b', type: 'default', data:{label: ''}, position: {x:60,y:50},style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}} },
    {id: '2', type: 'default', data:{label: 'HMI'}, position: {x:0,y:50},style:{border:'1px solid black',width:120,height:40,font:{size:'100%'}} },
    {id: '3-a',sourcePosition: 'right', targetPosition: 'left', type: 'default', data:{label: ''}, position: {x:0,y:150},style:{border:'0px solid black',width:120,height:40,font:{size:'100%'}} },
    {id: '3-b',sourcePosition: 'right', targetPosition: 'left', type: 'default', data:{label: ''}, position: {x:0,y:190},style:{border:'0px solid black',width:120,height:40,font:{size:'100%'}} },
    {id: '3-c',sourcePosition: 'right', targetPosition: 'left', type: 'default', data:{label: ''}, position: {x:0,y:230},style:{border:'0px solid black',width:120,height:40,font:{size:'100%'}} },
    {id: '3-d', type: 'default', data:{label: ''}, position: {x:0,y:150},style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}} },
    {id: '3-e', type: 'default', data:{label: ''}, position: {x:60,y:150},style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}} },
    {id: '3', type: 'default', data:{label: 'Automatic Emergency Steering(AES)'}, position: {x:0,y:150},style:{border:'1px solid black',width:120,height:120,font:{size:'100%'}} },










    /*links*/
    { id: 'link-1', type: 'straight',style: { stroke: 'red' },label:'HMI Inputs', source: '2-a', target: '1-a', animated:true},
    { id: 'link-2', type: 'straight',style: { stroke: 'red' },label:'HMI Inputs', source: '3-d', target: '2-a', animated:true},
    { id: 'link-2', type: 'straight',style: { stroke: 'green' },label:'Warning', source: '1-b', target: '2-b', animated:true},
    { id: 'link-3', type: 'straight',style: { stroke: 'green' },label:'Disable AES', source: '2-b', target: '3-e', animated:true},








]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}

function System_Boundary(){

    const [AES_SB_elements, setElements] = useState(initialElements);
    const [name, setName] = useState("")

    const addNode = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            position: { x: 10, y: 10 }
        }));
    };

    const onConnect = (params) => setElements(e => addEdge(params, e));

    return (
        <div id="img">
               <ReactFlowProvider>
                <ReactFlow
                  className='kk'
                    elements={AES_SB_elements}
                    onLoad={onLoad}
                    style={{ width: '100%', height: '90vh' }}
                    onConnect={onConnect}
                    connectionLineStyle={{ stroke: "#FFCC00", strokeWidth: 5 }}
                    connectionLineType="bezier"
                    snapToGrid={true}
                    snapGrid={[16, 16]}
                >
                    <Background
                        color="#0000"
                        gap={16}
                    />

                    <Controls />
                </ReactFlow>
                </ReactFlowProvider>
                <div >
                    <br/>
     
                   
                </div>
                <h4>Automatic Emergency Steering</h4>
           
        </div>
    )
}

export default System_Boundary;