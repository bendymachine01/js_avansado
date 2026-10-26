# Funciones en JavaScript

## 1. ¿Qué son las funciones?

Las funciones son bloques de código que sirven para realizar una tarea. Se pueden utilizar varias veces sin tener que repetir las mismas instrucciones.

### Ejemplo

```javascript
function saludar() {
    console.log("Hola");
}
saludar();
```

#### Explicación

Se crea una función llamada `saludar` y después se ejecuta para mostrar un mensaje.

## 2. Declarar y llamar funciones

Para crear una función se utiliza la palabra `function`, luego se escribe su nombre y se colocan paréntesis. Las instrucciones van dentro de las llaves.

### Ejemplo

```javascript
function mensaje() {
    console.log("Estoy aprendiendo JavaScript");
}
mensaje();
```

#### Explicación

La función muestra un mensaje cuando se llama.

## 3. Parámetros y argumentos

Los parámetros reciben información dentro de una función. Los argumentos son los valores que se le pasan cuando se utiliza.

### Ejemplo

```javascript
function saludar(nombre) {
    console.log("Hola " + nombre);
}
saludar("Daniel");
```

#### Explicación

`nombre` es el parámetro y `"Daniel"` es el argumento.

## 4. La instrucción return

`return` sirve para devolver un resultado que se puede utilizar en otra parte del programa.

### Ejemplo

```javascript
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(5, 3);
console.log(resultado);
```

#### Resultado

```text
8
```

## 5. Funciones con varios parámetros

Una función puede recibir varios datos para realizar una operación.

### Ejemplo

```javascript
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(4, 5));
```

#### Resultado

```text
20
```

## 6. Funciones anónimas

Son funciones que no tienen un nombre propio y que se pueden guardar en una variable.

### Ejemplo

```javascript
const restar = function(a, b) {
    return a - b;
};
console.log(restar(10, 4));
```

#### Resultado

```text
6
```

## 7. Funciones flecha

Las funciones flecha permiten escribir funciones de una forma más corta. Se utiliza el símbolo `=>`.

### Ejemplo

```javascript
const cuadrado = numero => numero * numero;
console.log(cuadrado(5));
```

#### Resultado

```text
25
```

## 8. Alcance de las variables

El alcance indica en qué parte del código se puede utilizar una variable.

### Ejemplo

```javascript
function ejemplo() {
    let mensaje = "Hola mundo";
    console.log(mensaje);
}
ejemplo();
```

#### Explicación

La variable `mensaje` se utiliza dentro de la función `ejemplo`.

## 9. Funciones con condiciones

Las funciones pueden utilizar condiciones como `if` y `else` para tomar decisiones.

### Ejemplo

```javascript
function determinarEstado(nota) {
    if (nota >= 3) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
console.log(determinarEstado(4));
console.log(determinarEstado(2));
```

#### Resultado

```text
Aprobado
Reprobado
```

## 10. Funciones en nuestro proyecto

Nuestro proyecto es un sistema de calificaciones que permite ingresar tres notas, calcular el promedio y mostrar si el estudiante aprobó o reprobó.

### Función calcularPromedio

```javascript
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}
```

#### Explicación

Recibe las tres notas y devuelve el promedio.

### Función determinarEstado

```javascript
function determinarEstado(promedio) {
    if (promedio >= 3) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
```

#### Explicación

Comprueba si el promedio es igual o mayor que 3 para determinar el estado del estudiante.

### Función mostrarResultado

```javascript
function mostrarResultado(promedio, estado) {
    document.getElementById("resultado").innerHTML =
        "<h2>Resultados</h2>" +
        "<p>Promedio: " + promedio.toFixed(2) + "</p>" +
        "<p>Estado: " + estado + "</p>";
}
```

#### Explicación

Muestra el promedio y el estado en la página web.

### Función ejecutarEjemplo

Esta función obtiene las notas ingresadas, verific
INDEX
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Funciones en JavaScript</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Sistema de calificaciones</h1>

    <p>Escribe las tres notas del estudiante:</p>

    <label for="nota1">Nota 1:</label>
    <input type="number" id="nota1" min="0" max="5" step="0.1" value="4">

    <br><br>

    <label for="nota2">Nota 2:</label>
    <input type="number" id="nota2" min="0" max="5" step="0.1" value="3.5">

    <br><br>

    <label for="nota3">Nota 3:</label>
    <input type="number" id="nota3" min="0" max="5" step="0.1" value="5">

    <br><br>

    <button onclick="ejecutarEjemplo()">Calcular promedio</button>

    <div id="resultado">
        <p>Aquí aparecerá el resultado.</p>
    </div>

    <script src="script.js"></script>

</body>
</html>
JS
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function determinarEstado(promedio) {
    if (promedio >= 3) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

function mostrarResultado(promedio, estado) {
    document.getElementById("resultado").innerHTML =
        "<h2>Resultados</h2>" +
        "<p>Promedio: " + promedio.toFixed(2) + "</p>" +
        "<p>Estado: " + estado + "</p>";
}

function ejecutarEjemplo() {
    const campo1 = document.getElementById("nota1").value;
    const campo2 = document.getElementById("nota2").value;
    const campo3 = document.getElementById("nota3").value;

    const resultado = document.getElementById("resultado");

    if (campo1 === "" || campo2 === "" || campo3 === "") {
        resultado.innerHTML = "<p>Debes ingresar las tres notas.</p>";
        return;
    }

    const nota1 = Number(campo1);
    const nota2 = Number(campo2);
    const nota3 = Number(campo3);

    if (
        !Number.isFinite(nota1) ||
        !Number.isFinite(nota2) ||
        !Number.isFinite(nota3) ||
        nota1 < 0 || nota1 > 5 ||
        nota2 < 0 || nota2 > 5 ||
        nota3 < 0 || nota3 > 5
    ) {
        resultado.innerHTML =
            "<p>Las notas deben estar entre 0 y 5.</p>";
        return;
    }

    const promedio = calcularPromedio(nota1, nota2, nota3);
    const estado = determinarEstado(promedio);

    mostrarResultado(promedio, estado);
}