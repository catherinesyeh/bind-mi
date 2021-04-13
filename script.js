brython(); // initialize again just in case

var header = document.getElementById("header");

var topButton = document.getElementById("back-to-top");
var legend = document.getElementById("key");

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
target.value = target_str.substring(0, 550);

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

$('#submit-button').click(function () {
    $('#spin').addClass("visible");
    setTimeout(function () {
        var res_all = sw();
        var res = res_all[0];
        if (res) {
            var pos = res_all[1];
            var scores = res_all[2];
            printStats(pos, "p");
            printStats(scores, "s");
            $('#see-matches').addClass("active");
        }
        $('#spin').removeClass("visible");
    }, 100);
});

$('#arrow').hover(function () {
    $('#see-matches').removeClass("active");
});