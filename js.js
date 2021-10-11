// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function $(element) {
    return document.querySelector(element)
}

var checkCollapse1 = true;

function collapseBtn1() {
    if (checkCollapse1) {
        $("#collapse-Btn1").classList.remove("inverseCollapse");
        $("#collapse-Btn1").classList.remove("resetCollapse");
        $("#inner-list1").classList.remove("hideList");
        $("#inner-list1").classList.remove("showList");

        $("#collapse-Btn1").classList.add("inverseCollapse");
        $("#inner-list1").classList.add("showList");

        checkCollapse1 = false;
    }
    else if (!checkCollapse1) {
        $("#collapse-Btn1").classList.remove("inverseCollapse");
        $("#collapse-Btn1").classList.remove("resetCollapse");
        $("#inner-list1").classList.remove("hideList");
        $("#inner-list1").classList.remove("showList");

        $("#collapse-Btn1").classList.add("resetCollapse");
        $("#inner-list1").classList.add("hideList");

        checkCollapse1 = true;
    }

}

var checkCollapse2 = true;

function collapseBtn2() {
    if (checkCollapse2) {
        $("#collapse-Btn2").classList.remove("inverseCollapse");
        $("#collapse-Btn2").classList.remove("resetCollapse");
        $("#inner-list2").classList.remove("hideList");
        $("#inner-list2").classList.remove("showList");

        $("#collapse-Btn2").classList.add("inverseCollapse");
        $("#inner-list2").classList.add("showList");

        checkCollapse2 = false;
    }
    else if (!checkCollapse2) {
        $("#collapse-Btn2").classList.remove("inverseCollapse");
        $("#collapse-Btn2").classList.remove("resetCollapse");
        $("#inner-list2").classList.remove("hideList");
        $("#inner-list2").classList.remove("showList");

        $("#collapse-Btn2").classList.add("resetCollapse");
        $("#inner-list2").classList.add("hideList");

        checkCollapse2 = true;
    }

}

// ----------Get Value From UL List -------------------//
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var ul1 = document.getElementById('inner-list1');
ul1.onclick = function (event) {
    var target = getEventTarget(event);
    $("#searchbar").value = target.innerHTML;
};

var ul2 = document.getElementById('inner-list2');
ul2.onclick = function (event) {
    var target = getEventTarget(event);
    $("#searchbar").value = target.innerHTML;
};
