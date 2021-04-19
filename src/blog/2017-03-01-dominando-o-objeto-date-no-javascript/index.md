---
path: "/dominando-o-objeto-date-no-javascript"
date: "2017-01-01"
title: "Dominando o objeto date no javascript"
author: "Clóvis Neto"
tags: "javascript, date-object"
description: "Faaaala galera, hoje trouxe novamente um post sobre js e desta vez o assunto principal é o objeto Date."
---

## Um pouco de história

![Hopper The Rabbit](/images/objeto-date.jpg)

O objeto date é representado pela quantidade de milisegundos desde o início da **Era Unix**

A **Era Unix** (Unix Epoch), ou Posix Time, teve início no dia **1 de janeiro de 1970** às 00:00:00 do Tempo Universal Coordenado, mais conhecido como UTC, referência a partir de onde se calculam os fusos horários do mundo inteiro.

Podemos obter a data atual, a partir da função construtora de Date, sem parâmetros. Ex:

```javascript
const today = new Date()

// Sat Jun 13 2015 14:41:41 GMT-0300 (Hora oficial do Brasil)
```

Para observar a representação em milisegundos, desde à Era Unix até a variável today, escrevemos à seguinte propriedade: <span>today.getTime()</span>. Também podemos criar uma data, passando como parâmetro o tempo em milisegundos ou em ISOString. Ex:

```javascript
const today = new Date(1434217927281),
  todayInISO = new Date("2015-06-13T17:50:25.057Z")
```

> O cálculo da data, é feito a partir de UTC +- 00:00, conhecido como Z, abreviação de Zulu Time. Logo se colocarmos a data do dia em que se comemora o Natal(dia 25/12) em milisegundos receberíamos no console Wed Dec 24 2015 22:00:00 GMT-0200 (BRST), pois a hora do Brasil em relação ao Greenwich Mean Time, varia de 2 à 5 horas.

## Alguns truques :D

No javascript, não é possível criar uma data a partir de uma máscara, mas existe a possibilidade de obter o tempo em milisegundos a partir desta máscara... Ex:

```javascript
// retorna 1434164400000
const today = Date.parse("2015/06/13")

//Sat Jun 13 2015 00:00:00 GMT-0300 (Hora oficial do Brasil)
new Date(today)
```

Existe a forma de criar uma data passando a string como parâmetro neste formato: <span>mês/dia/ano</span>. Ex:

```javascript
//Thu Dec 25 2014 00:00:00 GMT-0300 (Hora oficial do Brasil)
new Date("12/25/2014")
```

Note que se colocassemos a string no formato <span>dia/mês/ano</span>, receberíamos a mensagem de erro: <span class="error">"Invalid Date"</span>.

> Tenha cuidado, os formatos oficialmente aceitos como parâmetro são RFC 2822 e ISO 8601

## Criando uma data passando como parâmetro uma String RFC 2822 e ISO 8601

O formato RFC 2822 é o que costumamos ver no toString de Date (Thu Dec 25 2014 00:00:00 GMT-0300 (BRT)), nós podemos criar uma data a partir dele, desta forma:

```javascript
new Date("Thu Dec 25 2014")

//or
new Date("Thu Dec 25 2014 10:30:00")
```

Podemos criar a partir do ISO 8601, mas vale recitar que este formato é sensível à time zone, ex:

```javascript
//Wed Dec 24 2015 21:00:00 GMT-0300 (Hora oficial do Brasil)
new Date("2015-12-25")

//or
//Sat Dec 19 2015 07:30:00 GMT-0300 (Hora oficial do Brasil)
new Date("2015-12-19T10:30:00")
```

## Criando datas sem o timezone interferir

Observe que o time zone interferiu nas duas datas que criamos, até mesmo passando a hora em string. Para que isto não aconteça, podemos passar o time zone <span>-03:00</span> (no meu caso são 3 horas de atraso), dentro da nossa string... Ex:

```javascript
//Sat Dec 19 2015 10:30:00 GMT-0300 (Hora oficial do Brasil)
new Date("2015-12-19T10:30:00-03:00")
```

"Mas desta forma eu terei que saber qual é o meu atraso em relação ao Meridiano de Greenwich", é verdade, mas também existe outra forma de criar uma data sem especificar a time zone, **passando a própria data como parâmetro**. Ex:

```javascript
//Sat Jun 13 2015 00:00:00 GMT-0300 (Hora oficial do Brasil)
new Date(2015, 05, 13)

//or
//Sat Jun 13 2015 10:30:00 GMT-0300 (Hora oficial do Brasil)
new Date(2015, 05, 13, 10, 30, 0)
```

> É importante ressaltar que o mês no objeto data, vai de 0 até 11, por isso o mês 05 não é maio e sim junho

A partir do momento que criamos uma instância do objeto date, temos acesso a API do mesmo.

## API

### getYear e getFullYear

**Cuidado!** O javascript é uma linguagem criada na década de 90, então se queremos saber o ano atual devemos colocar <span>getFullYear()</span>. Ex:

```javascript
const today = new Date("2014-06-01")

//2014
today.getFullYear()

//retorna a quantidade de anos
//de 1990 até o ano especificado no parâmetro do new Date()
today.getYear()
```

### getMonth

Lembra da nota que foi colocada agora pouco: "É importante ressaltar que o mês no objeto data, vai de 0 até 11, por isso o mês 05 não é maio e sim junho" ? O <span>getMonth()</span> nos retorna o mês de 0 à 11. Ex:

```javascript
//Sat May 09 2015 21:00:00 GMT-0300 (Hora oficial do Brasil)
const today = new Date("2015-05-10")

today.getMonth() //4
```

### getDay e getDate

O <span>getDay()</span> retorna o dia da semana começando de 0, já o <span>getDate()</span> retorna o dia na data do calendário. Ex:

```javascript
const today = new Date("2015-05-10T10:03:00")

today.getDay() //6

today.getDate() //10
```

> Cuidado com o time zone, pois dependendo do caso o <span>getDate()</span> pode vim um dia antes.

Não vou me aprofundar muito na API do Date, para o post não ficar muito extenso, talvez eu crie um post só sobre o Date API, mas recomendo muuuuito como referência de estudo o [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) que separa uma seção bastante interessante sobre o Date.

_Valeeeu :D_
