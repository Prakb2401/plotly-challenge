const sample = `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`;

d3.json(sample).then(function(data1) {
console.log(data1)

var Names1;
Names1 = data1.names;
let dropdownMenu = d3.select("#selDataset");
Names1.forEach(name => dropdownMenu.append("option").text(name).property("value", name));
});


function optionChanged(id){
    d3.json(sample).then(function(data2){
    console.log(data2);
    var data_sample
    data_sample = data2.samples
    console.log(data_sample);
    var otu_ids = [];
    var otu_labels = []
    sample_values =[]
    for(let i = 0; x < data_sample.length; i++){
        if(data_sample[i].id == id){
            let otu_labels = data_sample[i].otulabels.slice(0,10).reverse();
            let sample_values = data_sample[i].sample_values.slice(0,10).reverse();
            let oru_ids = data_sample[i].otu_ids;
            let otu_labels2 = otu_labels;
            
        };
    };
    });
    
};