import React, { useState, Fragment } from 'react';
import "../App.css"
import ReactFlow, { ReactFlowProvider, addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';



const initialElements = [
    /*Node*/
    { id: '1 ', targetPosition: 'left', type: 'text', data: { label: 'INPUT' }, position: { x: -200, y: -150 }, style: { border: '1px solid black', background: 'none', width: 111, height: 40, font: { size: '100%' } } },
    { id: '2', targetPosition: 'left', type: 'text', data: { label: 'OUTPUT' }, position: { x: 188, y: -150 }, style: { border: '1px solid black', background: 'none', width: 111, height: 40, font: { size: '100%' } } },
    { id: '3', targetPosition: 'left', type: 'text', data: { label: 'UC' }, position: { x: -200, y: -150 }, style: { border: '2px solid black', background: 'none', width: 500, height: 40, font: { size: '100%' } } },
    { id: '4', targetPosition: 'left', type: 'text', data: { label: '' }, position: { x: -200, y: -150 }, style: { border: '2px solid black', background: 'none', width: 500, height: 1000, font: { size: '100%' } } },
    { id: '5', type: 'text', data: { label: '' }, position: { x: -90, y: -150 }, style: { border: '2px solid black', background: 'none', width: 280, height: 1000, font: { size: '100%' } } },

    { id: '6', sourcePosition: 'right', type: 'default', data: { label: 'Driver' }, position: { x: -185, y: -100 }, style: { border: '1px solid black', background: 'none', width: 80, height: 40, font: { size: '100%' } } },
    { id: '7', sourcePosition: 'right', type: 'default', data: { label: 'Enviromental data and Invehicle sensors data' }, position: { x: -185, y: -5 }, style: { border: '0px solid black', background: 'none', width: 80, height: 40, font: { size: '5%' } } },
    { id: '7-a', sourcePosition: 'left', type: 'default', data: { label: '' }, position: { x: -185, y: -5 }, style: { border: '1px solid black', background: 'none', width: 80, height: 100, font: { size: '100%' } } },

    { id: '8', targetPosition: 'left', type: 'default', data: { label: 'IgnitionON' }, position: { x: 8, y: -100 }, style: { border: '1px solid black', background: 'none', width: 80, height: 40, font: { size: '5%' } } },
    { id: '9', targetPosition: 'left', type: 'default', data: { label: 'Detect Lane Mark' }, position: { x: 8, y: -10 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
    { id: '9-a', type: 'default', data: { label: '' }, position: { x: 8, y: -10 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },

    { id: '10',  type: 'default', data: { label: 'Set SafeSpeed And Distance' }, position: { x: -13, y: 70 }, style: { border: '1px solid black', background: 'none', width: 120, height: 50, font: { size: '5%' } } },

    { id: '11',  type: 'default', data: { label: 'Detect Oncomming Traffic And Surrounding Obstacles' }, position: { x: -38, y: 150 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },

    /*links*/
    { id: 'link-1', type: 'straight', style: { stroke: 'green', }, source: '6', target: '8', animated: true },
    { id: 'link-2', type: 'straight', style: { stroke: 'green', }, source: '7', target: '9', animated: true },
    { id: 'link-3', type: 'straight', style: { stroke: 'blue', }, source: '8', target: '9-a', animated: true },
    { id: 'link-6', type: 'straight', style: { stroke: 'blue', }, source: '12', target: '13', animated: true },
    { id: 'link-7', type: 'straight', style: { stroke: 'blue', }, source: '13', target: '14', animated: true },
    { id: 'link-7', type: 'straight', style: { stroke: 'blue', }, source: '9', target: '10', animated: true },
    { id: 'link-7', type: 'straight', style: { stroke: 'blue', }, source: '10', target: '11', animated: true },
   

]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}

function UC_Flow() {

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
                    style={{ width: '120%', height: '120vh' }}
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
                <br />


            </div>
            <h4>Urban Chauffeur</h4>

        </div>
    )
}

export default UC_Flow;