// Linking JSON and URL
const sample = `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`;
// Console log data
d3.json(sample).then(function(data1) {
console.log(data1)
// setting up variables and dropdown with names
var Names1;
Names1 = data1.names;
let dropdownMenu = d3.select("#selDataset");
Names1.forEach(name => dropdownMenu.append("option").text(name).property("value", name));
});
// console.log(Names1)
// If option in dropdown changes the rest of the website will change
function optionChanged(id){
    d3.json(sample).then(function(data1){
    console.log(data1);
    var data_sample
    data_sample = data1.samples
    console.log(data_sample);
    var otu_ids = [];
    var otu_labels = []
    sample_values =[]
    // for loop to set up variables for plots
    for(let i = 0; i < data_sample.length; i++){
        if(data_sample[i].id == id){
            // All variables for visualizations slice and reverse.
            let otu_labels = data_sample[i].otu_labels.slice(0,10).reverse();
            let sample_values = data_sample[i].sample_values.slice(0,10).reverse();
            let otu_ids = data_sample[i].otu_ids;
        //putting metadata into demographic info panel
        let demo = d3.select("#sample-metadata").text(``);
        data1.metadata.forEach(i => {
            if(i.id == id) {
                console.log(Object.keys(i));
                Object.keys(i).forEach(x =>{
                    key = x;
                    info=(i[x]);
                    let demo2 =d3.select("#sample-metadata").append("ul").text(`${key} : ${info}`)
                })
            }
           
        })
        // bubble plot setup
        let Bubble_plot= {
            x: otu_ids,
            y: sample_values,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids
            },
            text: otu_labels
        }
        let Bubble_plot2 = [Bubble_plot];
        // bubble plot attribues 
        let bubbleAttributes = {
            title: "OTUs by each sample",
            xaxis: {title: 'OTU ID'},

        };
        // bubble plot creation
        Plotly.newPlot("bubble", Bubble_plot2, bubbleAttributes);



        // bar chart setup
        let Barchart = {
            x: sample_values,
            y: otu_ids,
            text: otu_labels,
            type: "bar",
            marker: {
                color: "black",
            },
            orientation: "h"
        };
        // bar chart attributes
        let BarAttributes = {
            title: "Top 10 OTU per sample",
            yaxis:{title: "OTU ID", type: "category"}
        };
        let Barchart2 = [Barchart];
        // Bar chart creation
        Plotly.newPlot("bar", Barchart2, BarAttributes)
        };
    };
    });
    
};