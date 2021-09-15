import React from 'react';
import { Bubble, Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Select from '../../../api/Select';

import './style.css';

function Graph() {
    const X_AXIS = 'Adjusted Production';
    const Y_AXIS = 'Patients seen';

    Chart.register(ChartDataLabels);

    const data = {
        labels: "Africa",
        datasets: [{
            label: ["Affinity Dental"],
            backgroundColor: "rgba(255,221,50,0.2)",
            borderColor: "rgba(255,221,50,1)",
            data: [{
                x: 1450000,
                y: 2700,
                r: 35,
                label: "Affinity Dental"
            }]
        }, {
            label: ["Bug Bunny Dental"],
            backgroundColor: "rgba(193,46,12,0.2)",
            borderColor: "rgba(193,46,12,1)",
            data: [{
                x: 2100000,
                y: 2600,
                r: 35,
                label: "Bug\nBunny\nDental"
            }]
        }, {
            label: ["Ferengi Teeth"],
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "#000",
            data: [{
                x: 1200000,
                y: 1000,
                r: 35,
                label: "Ferengi Teeth"
            }]
        }, {
            label: ["Klingon Smiles"],
            backgroundColor: "rgba(60,186,159,0.2)",
            borderColor: "rgba(60,186,159,1)",
            data: [{
                x: 2000000,
                y: 700,
                r: 35,
                label: "Klingon Smiles"
            }]
        }, {
            label: ["Awesome Smiles"],
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "#000",
            data: [{
                x: 3800000,
                y: 2700,
                r: 35,
                label: "Awesome\nSmiles"
            }]
        }, {
            label: ["Bluetooth Dental"],
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "#000",
            data: [{
                x: 4400000,
                y: 1200,
                r: 35,
                label: "Bluetooth\nDental"
            }],
            clip: { left: false, top: false, right: false, bottom: false }
        }]
    };

    const options = {
        plugins: {
            legend: false,
            datalabels: {
                color: '#000000',
                font: {
                    size: 10,
                    family: 'Sans-serif'
                },
                offset: 4,
                textAlign: 'center'
            }
        },
        layout: {
            padding: 10,
        },
        responsive: true,
        mainAspectRatio: true,
        scales: {
            x: {
                min: 500000,
                max: 5000000,
                display: true,
                beginAtZero: true,
                title: {
                    display: true,
                    text: X_AXIS
                },
                ticks: {
                    stepSize: 500000,
                    callback: function (value, index, values) {
                        return '$' + (Math.abs(value) / 1.0e+6).toFixed(1) + "M";
                    },
                    major: {
                        enabled: true
                    },
                    color: (context) => context.tick && context.tick.major && '#FF0000',
                    font: function (context) {
                        if (context.tick && context.tick.major) {
                            return {
                                weight: 'bold'
                            };
                        }
                    }
                }
            },
            y: {
                display: true,
                max: 3500,
                beginAtZero: true,
                title: {
                    display: true,
                    text: Y_AXIS
                },
                ticks: {
                    major: {
                        enabled: true
                    },
                    color: (context) => context.tick && context.tick.major && '#FF0000',
                    font: function (context) {
                        if (context.tick && context.tick.major) {
                            return {
                                weight: 'bold'
                            };
                        }
                    }
                }
            }
        }
    };

    const x_options = ["Adjusted Production"];
    const y_options = ["Patients Seen"];

    return (
        <div className="graph">
            <div className="graph_filters">
                <Select options={x_options} border={true} />
                <p>To</p>
                <Select options={y_options} border={true} />
            </div>
            <div style={{ position: 'relative' }}>
                <Bubble
                    height={220}
                    width={360}
                    data={data}
                    options={options}
                />
            </div>

        </div>
    )
}

export default Graph;
