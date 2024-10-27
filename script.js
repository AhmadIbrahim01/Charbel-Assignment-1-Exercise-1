var rows = prompt("For rows: ");
var stars = 1

for (var i = rows; i > 0; i--) {
    console.log(" ".repeat(i) + "*".repeat(stars) + " ".repeat(i));
    stars += 2;
}

stars -= 2

for (var i = 2; i <= rows + 2; i++) {
    stars -= 2;
    if(stars >= 0){
        console.log(" ".repeat(i) + "*".repeat(stars) + " ".repeat(i));
    }
}
