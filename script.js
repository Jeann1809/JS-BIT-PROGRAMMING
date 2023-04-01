let n = parseInt(prompt("Ingrese un numero"))
let divisores = 0;
d_divisores(n);
primo(divisores);

function d_divisores(numero) {
  divisores = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores += 1;
      true;
    }
  }
}

function primo(divisor) {
  if (divisor < 3) {
    console.log(`El numero ${n} es primo`);
    signum(n);
  } else {
    console.log(`El numero ${n} no es primo`);
    signum(n);
  }
}

function signum(number) {
  divisores = 0;
  while (divisores >= 3 || divisores === 0) {
    number++;
    d_divisores(number);
  }
  console.log(`El siguiente numero primo es ${number}`);
}
