import React, {useRef, useState, useEffect} from 'react';

// Scaling Constants for Canvas
const SCALE = 1;
const OFFSET = 0;
export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;
const heartSVG = "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
const SVG_PATH = new Path2D(heartSVG);
function useCanvas(){
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        const rect = canvasObj.getBoundingClientRect();
        console.log(rect);
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );

        // draw all coordinates held in state
        coordinates.forEach((coordinate)=>{draw(ctx, coordinate)});
    });

    return [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ];
}

function draw(ctx, location){
    console.log("attempting to draw")
    ctx.fillStyle = 'red';
    ctx.shadowColor = 'blue';
    ctx.shadowBlur = 15;
    ctx.save();
    ctx.scale(SCALE, SCALE);
    ctx.translate(location.x-97, location.y-167);
    ctx.rotate(225 * Math.PI / 180);
    ctx.fill(SVG_PATH);
    // .restore(): Canvas 2D API restores the most recently saved canvas state
    ctx.restore();
};


function Whiteboard(props){
    const [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ] = useCanvas();
    const handleCanvasClick=(event)=>{
        // on each click get current mouse location
        const currentCoord = { x: event.clientX-97, y: event.clientY-167 };
        // add the newest mouse location to an array in state
        setCoordinates([...coordinates, currentCoord]);
    };

    return(
        <>
            <div className={'card small-cards m-5 h-100 flex-grow-1 rounded-0'}>
                <div className={'card small-cards m-5 h-100 flex-grow-1 rounded-0 border-0'}>
                    <canvas className={'h-100 flex-grow-1'}
                        ref={canvasRef}
                        onClick={handleCanvasClick}
                    />
                </div>
            </div>
        </>
    );


}

export default Whiteboard;