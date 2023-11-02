//*primeira opção:

const nome = "Logan";
const XP = 10000;

const xpToNivel = {
  1000: "Ferro",
  2000: "Bronze",
  5000: "Prata",
  7000: "Ouro",
  8000: "Platina",
  9000: "Ascendente",
  10000: "Imortal",
};

let nivel = "Radiante";

for (const xp in xpToNivel) {
  if (XP <= xp) {
    nivel = xpToNivel[xp];
    break;
  }
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

/*Segunda opção:

const nome = "Logan"; 
const XP = 10000; 

let nivel;

switch (true) {
  case XP < 1000:
    nivel = "Ferro";
    break;
  case XP >= 1001 && XP <= 2000:
    nivel = "Bronze";
    break;
  case XP >= 2001 && XP <= 5000:
    nivel = "Prata";
    break;
  case XP >= 6001 && XP <= 7000:
    nivel = "Ouro";
    break;
  case XP >= 7001 && XP <= 8000:
    nivel = "Platina";
    break;
  case XP >= 8001 && XP <= 9000:
    nivel = "Ascendente";
    break;
  case XP >= 9001 && XP <= 10000:
    nivel = "Imortal";
    break;
  default:
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);*/

/* terceira opção:

// Variáveis
const nome = "Logan"; 
const XP = 10000; 

let nivel;

if (XP < 1000) {
  nivel = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
  nivel = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
  nivel = "Prata";
} else if (XP >= 6001 && XP <= 7000) {
  nivel = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
  nivel = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
  nivel = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

*/
