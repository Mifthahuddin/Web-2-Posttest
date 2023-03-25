function pasvalues(){
    var fname = document.getElementById("nm").value
    localStorage.setItem("textvalues", fname);
    return false;
}
