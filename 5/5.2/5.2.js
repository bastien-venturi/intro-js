function askTvSerie() {
  let tvSerie = {};

  tvSerie.name = prompt("Enter the name of your favorite TV series:");
  tvSerie.productionYear = prompt("Enter the production year of the TV series:");

  tvSerie.castMembers = [];
  while (true) {
      let member = prompt("Enter a cast member's name (leave empty to finish):");
      if (member === "") {
          break;
      }
      tvSerie.castMembers.push(member);
  }

  return tvSerie;
  
}

function randomizeCast(tvSerie) {
  let randomizedCast = [...tvSerie.castMembers];
  for (let i = randomizedCast.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [randomizedCast[i], randomizedCast[j]] = [randomizedCast[j], randomizedCast[i]];
  }

  return {
      ...tvSerie,
      castMembers: randomizedCast
  };
}

let displayTvSerie = askTvSerie();
console.log("Original TV Series:");
console.log(JSON.stringify(displayTvSerie, null, 2));

let displayRandomTvSerie = randomizeCast(displayTvSerie);
console.log("\nRandomized TV Series Cast:");
console.log(JSON.stringify(displayRandomTvSerie, null, 2));