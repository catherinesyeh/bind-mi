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
target.value = target_str.substring(0, 500);

function backToTop() { // deal with back to top button
    offset = header.offsetHeight - 10;
    topButton.classList.toggle("active", window.scrollY > 0.8 * window.innerHeight);
    legend.classList.toggle("active", window.scrollY >= offset);
}

$('#submit-button').click(function () {
    $('#spin').addClass("visible");
    setTimeout(function () {
        var res = sw();
        if (res) {
            $('#see-matches').addClass("active");
        }
        $('#spin').removeClass("visible");
    }, 100);
});

$('#arrow').hover(function () {
    $('#see-matches').removeClass("active");
});