# Basic Javascript server / client for visualizing floats

## Server

Post JSON like {"angle": `<float>`, "timestamp": `<float> | <timestamp>`} to end point `<IP>:5000/data`.

## Client 

`<IP>:8080` displays a gauge component that responds to `angle` values in the interval [-35, 35].


