

var checkCollapse1 = true;

function collapseBtn1() {
    if (checkCollapse1) {
        document.getElementById("collapse-Btn1").classList.remove("inverseCollapse");
        document.getElementById("collapse-Btn1").classList.remove("resetCollapse");
        document.getElementById("inner-list1").classList.remove("hideList");
        document.getElementById("inner-list1").classList.remove("showList");

        document.getElementById("collapse-Btn1").classList.add("inverseCollapse");
        document.getElementById("inner-list1").classList.add("showList");

        checkCollapse1 = false;
    }
    else if (!checkCollapse1) {
        document.getElementById("collapse-Btn1").classList.remove("inverseCollapse");
        document.getElementById("collapse-Btn1").classList.remove("resetCollapse");
        document.getElementById("inner-list1").classList.remove("hideList");
        document.getElementById("inner-list1").classList.remove("showList");

        document.getElementById("collapse-Btn1").classList.add("resetCollapse");
        document.getElementById("inner-list1").classList.add("hideList");

        checkCollapse1 = true;
    }
    
}

var checkCollapse2 = true;

function collapseBtn2() {
    if (checkCollapse2) {
        document.getElementById("collapse-Btn2").classList.remove("inverseCollapse");
        document.getElementById("collapse-Btn2").classList.remove("resetCollapse");
        document.getElementById("inner-list2").classList.remove("hideList");
        document.getElementById("inner-list2").classList.remove("showList");

        document.getElementById("collapse-Btn2").classList.add("inverseCollapse");
        document.getElementById("inner-list2").classList.add("showList");

        checkCollapse2 = false;
    }
    else if (!checkCollapse2) {
        document.getElementById("collapse-Btn2").classList.remove("inverseCollapse");
        document.getElementById("collapse-Btn2").classList.remove("resetCollapse");
        document.getElementById("inner-list2").classList.remove("hideList");
        document.getElementById("inner-list2").classList.remove("showList");

        document.getElementById("collapse-Btn2").classList.add("resetCollapse");
        document.getElementById("inner-list2").classList.add("hideList");

        checkCollapse2 = true;
    }
    
}