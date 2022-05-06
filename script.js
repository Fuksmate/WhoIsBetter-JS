const getID = (e) => {
    console.log(e.target.id);
    return e.target.id;
}
document.querySelectorAll(".box").forEach(box => box.addEventListener("onload", getID))