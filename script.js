function checkBrython() {
    if (typeof window.sw != 'function') {
        brython(); // initialize if function not defined yet
    }

}

var header = document.getElementById("header");

var topButton = document.getElementById("back-to-top");
var legend = document.getElementById("key");

// for plotting
var pos = []
var scores = []

window.addEventListener("scroll", function () {
    changeOpacity(header);
    backToTop();
})

function changeOpacity(elem) {
    if (window.scrollY < window.innerHeight) {
        elem.style.opacity = 1 - (window.scrollY / (window.innerHeight));
    } else {
        elem.style.opacity = 0;
    }
}

var query = document.getElementById("query-field");
var target = document.getElementById("target-field");

query.value = "TGAGGTAGTAGGTTGTATAGTT";
target_str = "CGCAGCACAAGCTCAGGACATGGAGGTGCCGGATGCAGGAAGGAGGTGCAGACGGAAGGAGGAGGAAGGAAGGACGGAAGCAAGGAAGGAAGGAAGGGCTGCTGGAGCCCAGTCACCCCGGGACCGTGGGCCGAGGTGACTGCAGACCCTCCCAGGGAGGCTGTGCACAGACTGTCTTGAACATCCCAAATGCCACCGGAACCCCAGCCCTTAGCTCCCCTCCCAGGCCTCTGTGGGCCCTTGTCGGGCACAGATGGGATCACAGTAAATTATTGGATGGTCTTGATCTTGGTTTTCGGCTGAGGGTGGGACACGGTGCGCGTGTGGCCTGGCATGAGGTATGTCGGAACCTCAGGCCTGTCCAGCCCTGGGCTCTCCATAGCCTTTGGGAGGGGGAGGTTGGGAGAGGCCGGTCAGGGGTCTGGGCTGTGGTGCTCTCTCCTCCCGCCTGCCCCAGTGTCCACGGCTTCTGGCAGAGAGCTCTGGACAAGCAGGCAGATCATAAGGACAGAGAGCTTACTGTGCTTCTACCAACTAGGAGGGCGTCCTGGTCCTCCAGAGGGAGGTGGTTTCAGGGGTTGGGGATCTGTGCCGGTGGCTCTGGTCTCTGCTGGGAGCCTTCTTGGCGGTGAGAGGCATCACCTTTCCTGACTTGCTCCCAGCGTGAAATGCACCTGCCAAGAATGGCAGACATAGGGACCCCGCCTCCTGGGCCTTCACATGCCCAGTTTTCTTCGGCTCTGTGGCCTGAAGCGGTCTGTGGACCTTGGAAGTAGGGCTCCAGCACCGACTGGCCTCAGGCCTCTGCCTCATTGGTGGTCGGGTAGCGGCCAGTAGGGCGTGGGAGCCTGGCCATCCCTGCCTCCTGGAGTGGACGAGGTTGGCAGCTGGTCCGTCTGCTCCTGCCCCACTCTCCCCCGCCCCTGCCCTCACCCTACCCTTGCCCCACGCCTGCCTCATGGCTGGTTGCTCTTGGAGCCTGGTAGTGTCACTGGCTCAGCCTTGCTGGGTATACACAGGCTCTGCCACCCACTCTGCTCCAAGGGGCTTGCCCTGCCTTGGGCCAAGTTCTAGGTCTGGCCACAGCCACAGACAGCTCAGTCCCCTGTGTGGTCATCCTGGCTTCTGCTGGGGGCCCACAGCGCCCCTGGTGCCCCTCCCCTCCCAGGGCCCGGGTTGAGGCTGGGCCAGGCCCCTCTGGGACGGGGACTTGTGCCCTGTCAGGGTTCCCTATCCCTGAGGTTGGGGGAGAGCTAGCAGGGCATGCCGCTGGCTGGCCAGGGCTGCAGGGACACTCCCCCTTTTGTCCAGGGAATACCACACTCGCCCTTCTCTCCAGCGAACACCACACTCGCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTGTCCAGGGGACGCCACACTCCCCCTTCTCTCCAGGGGACGCCACACTCGCCCTTCTCTCCAGGGGACGCCACACTCGCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTGTCCAGGGGACGCCACACTCGCCCTTCTCTCCAGGGGACGCCACACTGGCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTGTCCAGGGGACGCCACACTCCCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTCTCCAGGGGACGCCACACTGGCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTGTCCAGGGGACGCCACACTCGCCCTTCTCTCCAGGGGACGCCACACTCGCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTGTCCAGGGGACGCCACACTCGCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTCTCCAGGGGACGCCACACTCCCCCTTCTGTCCAGGGGACGCCACACTCGCCCTTCTCTCCAGGGGACGCCACACTCGCCCTTCTCTCCAGGGGACGCCACACTCGCCCTTCTCTCCAGGGGACGCCACACTTGCCCTTCTGTCCAGGGAATGCCACACTCCCCCTTCTCCCCAGCAGCCTCCGAGTGACCAGCTTCCCCATCGATAGACTTCCCGAGGCCAGGAGCCCTCTAGGGCTGCCGGGTGCCACCCTGGCTCCTTCCACACCGTGCTGGTCACTGCCTGCTGGGGGCGTCAGATGCAGGTGACCCTGTGCAGGAGGTATCTCTGGACCTGCCTCTTGGTCATTACGGGGCTGGGCAGGGCCTGGTATCAGGGCCCCGCTGGGGTTGCAGGGCTGGGCCTGTGCTGTGGTCCTGGGGTGTCCAGGACAGACGTGGAGGGGTCAGGGCCCAGCACCCCTGCTCCATGCTGAACTGTGGGAAGCATCCAGGTCCCTGGGTGGCTTCAACAGGAGTTCCAGCACGGGAACCACTGGACAACCTGGGGTGTGTCCTGATCTGGGGACAGGCCAGCCACACCCCGAGTCCTAGGGACTCCAGAGAGCAGCCCACTGCCCTGGGCTCCACGGAAGCCCCCTCATGCCGCTAGGCCTTGGCCTCGGGGACAGCCCAGCTAGGCCAGTGTGTGGCAGGACCAGGCCCCCATGTGGGAGCTGACCCCTTGGGATTCTGGAGCTGTGCTGATGGGCAGGGGAGAGCCAGCTCCTCCCCTTGAGGGAGGGTCTTGATGCCTGGGGTTACCCGCAGAGGCCTGGGTGCCGGGACGCTCCCCGGTTTGGCTGAAAGGAAAGCAGATGTGGTCAGCTTCTCCACTGAGCCCATCTGGTCTTCCCGGGGCTGGGCCCCATAGATCTGGGTCCCTGTGTGGCCCCCCTGGTCTGATGCCGAGGATACCCCTGCAAACTGCCAATCCCAGAGGACAAGACTGGGAAGTCCCTGCAGGGAGAGCCCATCCCCGCACCCTGACCCACAAGAGGGACTCCTGCTGCCCACCAGGCATCCCTCCAGGGATCCCTCATTGTCCACAACTGCTGGAGAACAGAGGGCTCCGTGTCTGGCTGTCCCACAGTGAGCAGCAGTGAGCGCATCTGAAGTCTGAGCTGCTGAGACCCCCTCCTGCAGGAACCCATCTTCTGGCAAAAACCTGAACTGAGGATCACCCTCTGCCCACACCCACAGGGGCCCATCCTGGTGGCTCCTCCAGTGCCAGGCTCTGCCCCATCAGGGTCTGGGGTCTCAGCCAGATTTGTGTCCAGGGCAGGGAGGCTGCAGAGGTTAGGTTGGGTCCAGCACAGGACAGGGCTGGAGAGCACAGCCAAGGAAGGTCGGGTCCGTCTCCTCCCCTCTGACCTCGGACGTCTCGCCTGTCAAATGGCGTGAGTTCGTATCCACCCCACGGGGTCGCCGTGAGGTGAACGAGACAGTCATTTTCATAGTCCGTGTGGAACAGGCACCCGCTGAGTGCTCAGGGATGGCCCTTGGCAGCCACGTGGAGGCCAGCGCAGGCCACCTGTTAGTGACTGTCACCATACCATGGGGGAGGGCAGCTGTGTTGAGACCCACCTCTCACCTCCGGACGCAGAGCCCCCCCTCGGACACCCACTGTGTCTCCAACTGCTCCGCACACAGCCGGCACTTGGCACCGGTGACGTCATGGGGTGGCTGCACACATCACAATAGGGCCCCGCGCAGGTCAGCTGGGCCTGGAGTCAGCGTCCTCCACCCCCTGAACTGGCAGCATGTGTGTGCACGTGTATGTGGGTGAACGTGTGCGT";
target.value = target_str.substring(0, 700);

function backToTop() { // deal with back to top button
    offset = header.offsetHeight - 10;
    topButton.classList.toggle("active", window.scrollY > 0.8 * window.innerHeight);
    legend.classList.toggle("active", window.scrollY >= offset);
}

var pos_stats = document.getElementById("pos-stats");
var align_stats = document.getElementById("align-stats");

function addStat(output, key, val) {
    s = document.createElement('p');
    s.innerHTML = "<i><b>" + key + ":</b></i> " + val.toFixed(1);
    output.appendChild(s);
}

function printStats(data, key) {
    var output = pos_stats;
    if (key == "s") {
        output = align_stats;
    }
    output.innerHTML = "";

    var min = ss.min(data);
    addStat(output, "min", min);
    var max = ss.max(data);
    addStat(output, "max", max);
    var range = max - min;
    addStat(output, "range", range);
    var median = ss.max(data);
    addStat(output, "median", median);
    var mean = ss.mean(data);
    addStat(output, "mean", mean);
    var sd = ss.standardDeviation(data);
    addStat(output, "sd", sd);
}

var graph = document.getElementById("graph");

function plotHist() { // histogram
    graph.innerHTML = "";
    var trace = {
        x: pos,
        type: 'histogram',
        nbinsx: 20,
        marker: {
            color: "rgba(53, 79, 82, 0.7)",
            line: {
                color: "rgba(53, 79, 82, 1)",
                width: 1
            }
        },
        opacity: 0.6 
    };
    var title = "Distribution of Target Start Positions (n = " + pos.length + ")";
    var layout = {
        title: "<b>" + title + "</b>",
        font: {
            family: 'Poppins',
            color: '#1c1b20'
        },
        yaxis: {
            title: '<b>Frequency</b>',
        },
        xaxis: {
            title: '<b>Target Start Position</b>',
        }
    };
    var config = { responsive: true };
    var data = [trace];
    Plotly.newPlot('graph', data, layout, config);
}

function plotScatter() { // scatterplot
    graph.innerHTML = "";
    y = []
    text = []
    // round to 1 decimal place
    for (var i = 0; i < scores.length; i++) {
        y.push(Math.round(scores[i] * 10) / 10);
        text.push("Match #" + (i + 1));
    }
    var trace = {
        x: pos,
        y: y,
        mode: 'markers',
        type: 'scatter',
        marker: {
            color: "rgba(53, 79, 82, 0.7)",
        },
        text: text
    };
    var title = "Target Start Position v.s. Score of Local <br>SW Alignments (n = " + pos.length + ")";
    var layout = {
        title: "<b>" + title + "</b>",
        font: {
            family: 'Poppins',
            color: '#1c1b20'
        },
        yaxis: {
            title: '<b>Alignment Score</b>',
        },
        xaxis: {
            title: '<b>Target Start Position</b>',
        },
        'hovermode': 'closest'
    };
    var config = { responsive: true };
    var data = [trace];
    Plotly.newPlot('graph', data, layout, config);
}

var results = document.getElementById("results");
var matches = document.getElementById("matches");

function printOutput(res) {
    results.classList.remove("visible");
    matches.innerHTML = "";

    var num = Object.keys(res).length;
    var num_matches = document.createElement('h2');
    num_matches.innerHTML = "Top " + num + " Matches";
    num_matches.classList.add("smooth-trans");
    matches.appendChild(num_matches);

    for (var r in res) {
        var entry = res[r][0].$string_dict;

        var match = document.createElement('div');
        var heading = document.createElement('p');
        heading.innerHTML = r;
        heading.classList.add("heading");

        var target = document.createElement('p');
        target.innerHTML = entry["target"][0];
        var align = document.createElement('p');
        align.innerHTML = entry["alignment"][0];
        var query = document.createElement('p');
        query.innerHTML = entry["query"][0];
        match.appendChild(heading);
        match.appendChild(target);
        match.appendChild(align);
        match.appendChild(query);
        matches.appendChild(match);
    }

    results.classList.add("visible");
}

// run the algorithm!
$('#submit-button').click(function () {
    $('#spin').addClass("visible");
    setTimeout(function () {
        var res_all = window.sw();
        var success = res_all[0];
        if (success) {
            $('#graph').removeClass("visible");
            output = res_all[1];
            res = output[0].$string_dict;
            printOutput(res);
            pos = output[1];
            scores = output[2];
            printStats(pos, "p");
            printStats(scores, "s");
            plotHist();
            $('#graph').addClass("visible");
            $('#hist-button').addClass("active");
            $('#scatter-button').removeClass("active");
            $('#see-matches').addClass("active");
        }
        $('#spin').removeClass("visible");
    }, 100);
});

$('#arrow').hover(function () {
    $('#see-matches').removeClass("active");
});

var style_str = "position: absolute; right: 0px; width: 100%;"
function moveModebar(move) {
    var bar = document.getElementsByClassName("modebar-container")[0];
    if (move) {
        bar.setAttribute('style', style_str + 'top: 80px !important');
    } else {
        bar.setAttribute('style', style_str + 'top: 65px !important');
    }
}

// change graphs
$('#scatter-button').click(function () {
    $('#graph').removeClass("visible");
    setTimeout(function () {
        plotScatter();
        moveModebar(true);
    }, 100);
    $('#scatter-button').toggleClass("active");
    $('#hist-button').toggleClass("active");
    $('#graph').addClass("visible");
});

$('#hist-button').click(function () {
    $('#graph').removeClass("visible");
    setTimeout(function () {
        plotHist();
        moveModebar(false);
    }, 100);
    $('#scatter-button').toggleClass("active");
    $('#hist-button').toggleClass("active");
    $('#graph').addClass("visible");
});

// resize graph if window size changes
$(window).resize(function () {
    Plotly.relayout('graph', {});
});

checkBrython(); // run once for good measure