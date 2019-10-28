document.getElementById("image1").addEventListener("mouseover", function(event) {change(this.id)});
function change(id) {
document.getElementById(id).addEventListener("mouseover", function(event) {this.style=`border: solid 3px red`});
// ajout une bordure rouge au survol de la souris
document.getElementById(id).addEventListener("mouseout", function(event) {this.style=`border: none`});
// annule la bordure
}