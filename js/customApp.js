let classToggle = (element, toggleAtt) => {
    let rs_element = document.querySelectorAll(".rs__func");
    for (var i = 0; i < rs_element.length; i++) {
        if (rs_element[i].classList.contains(toggleAtt)) {
            rs_element[i].classList.remove(toggleAtt)
        }
    }
    $(element).toggleClass(toggleAtt);
}