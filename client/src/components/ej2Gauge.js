import * as React from 'react';
import { useEffect, useState,  useCallback, useContext  } from 'react';
// import { SocketContext, socket } from '../context/socket';


import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-circulargauge';

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;

const TextPointer = ({socket}) => {

    const [angle, setAngle] = useState(5)
    const [timestamp, setTimestamp] = useState(10)
    
    const handleNewData = (data) => {
        console.log(JSON.stringify(data))
        setAngle(data.angle);
        setTimestamp(data.timestamp)
    };
    
    useEffect(() => {socket.on('connect', ()=>{
        socket.on("float_value", handleNewData); 
        socket.onAny((e,d)=>{console.log(e)})   
    })     
    
        return () => {
          socket.off("float_value", handleNewData);
        };
      },[socket]);


    const load = (a) => { };

    return (<div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section'>
                <CircularGaugeComponent load={load.bind(this)} centerY='75%' id='text-pointer' background='transparent'>
                    <AxesDirective>
                        <AxisDirective startAngle={270} endAngle={90} radius='120%' minimum={-50} maximum={50} rangeGap={0} majorTicks={{ width: 0 }} lineStyle={{ width: 0 }} minorTicks={{ width: 0 }} labelStyle={{ font: { size: '0px' } }}>
                            <PointersDirective>
                                <PointerDirective pointerWidth={10} radius='60%' needleStartWidth={1} needleEndWidth={1} value={angle} cap={{ radius: 0 }} animation={{ enable: true }}/>
                                <PointerDirective radius='85%' type='Marker' value={-35} text='Reverse' markerShape='Text' animation={{ enable: false }} textStyle={{ size: '18px', fontFamily: 'inherit' }}/>
                                <PointerDirective radius='85%' type='Marker' value={0} text='Neutral' markerShape='Text' animation={{ enable: false }} textStyle={{ size: '18px', fontFamily: 'inherit' }}/>
                                <PointerDirective radius='85%' type='Marker' value={35} text='Forward' markerShape='Text' animation={{ enable: false }} textStyle={{ size: '18px', fontFamily: 'inherit' }}/>
                            </PointersDirective>
                            <RangesDirective>
                                <RangeDirective start={-45} end={-25} radius='80%' startWidth={85} endWidth={85} color='#dd3800'/>
                                <RangeDirective start={-24.5} end={-10} radius='80%' startWidth={85} endWidth={85} color='#ffffff'/>
                                <RangeDirective start={-9.5} end={9.5} radius='80%' startWidth={85} endWidth={85} color='#ffba00'/>
                                <RangeDirective start={10} end={24.5} radius='80%' startWidth={85} endWidth={85} color='#ffffff'/>
                                <RangeDirective start={25} end={45} radius='80%' startWidth={85} endWidth={85} color='#8be724'/>
                                {/* <RangeDirective start={100.5} end={120} radius='80%' startWidth={85} endWidth={85} color='#64be00'/> */}
                            </RangesDirective>
                        </AxisDirective>
                    </AxesDirective>
                </CircularGaugeComponent>
            </div>
        </div>);
};
export default TextPointer;
