import * as React from 'react';
import { Gauge } from '@mui/x-charts';

export default function ShiftGauge()  {
    return (
        <div>
            <Gauge width={100} height={100} value={0} valueMin={-50} valueMax={50} startAngle={-110} endAngle={110}  />
        </div>
    )
}
