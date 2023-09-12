function askTvSerie() {
    let tvSerie = {};

    tvSerie.name = prompt("Enter the name of your favorite TV series:");
    tvSerie.productionYear = parseFloat(prompt("Enter the production year of the TV series:"));
  
    tvSerie.castMembers = [];
    while (true) {
      let Member = prompt("Enter a cast member's name (leave empty to finish):");
      if (Member === "") {
        break;
      }
      tvSerie.castMembers.push(Member);
    }

    return tvSerie;
}

let displayTvSerie = askTvSerie();
console.log(JSON.stringify(displayTvSerie, null, 2));
