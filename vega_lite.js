var vg_1 = "https://raw.githubusercontent.com/loha69/FIT3179-Assignment-2/refs/heads/main/Multilinechart.vg.json";
vegaEmbed("#multi_chart", vg_1).then(function(result){}).catch(console.error);

var vg_2 = "https://raw.githubusercontent.com/loha69/FIT3179-Assignment-2/refs/heads/main/Map.vg.json";
vegaEmbed("#map_chart", vg_2).then(function(result){}).catch(console.error);

var vg_3 = "https://raw.githubusercontent.com/loha69/FIT3179-Assignment-2/refs/heads/main/Trendline.vg.json";
vegaEmbed("#Trendline_chart", vg_3).then(function(result){}).catch(console.error);

var vg_4 = "https://raw.githubusercontent.com/loha69/FIT3179-Assignment-2/refs/heads/main/combined.vg.json";
vegaEmbed("#combine_chart", vg_4).then(function(result){}).catch(console.error);