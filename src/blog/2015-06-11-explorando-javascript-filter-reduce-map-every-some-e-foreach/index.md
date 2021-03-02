---
path: "/explorando-javascript-filter-reduce-map-every-some-e-foreach"
date: "2015-06-11"
title: "Explorando o javascript. filter, forEach, map, reduce, every e some"
author: "Clóvis Neto"
tags: "javascript"
description: "
Agora sim JS e um pouco de código! E para começar, nada melhor que estudar o core da nossa linda linguagem javascript"
---

## O Problema...

Se você atua à algum tempo na área, já pode ter passado por uma situação onde você precisa iterar um array só para verificar se existe alguma propriedade em um determinado indice, ou então somar alguma propriedade do mesmo.

_E ai? Qual seria a forma mais peformática de se execultar tal tarefa?_

## O forEach

O método forEach é bastante parecido com o for antigo, básicamente faz o mesmo que ele, mas numa forma bem mais elegante, vejamos abaixo um exemplo de uma iteração num determinado array usando o for e outra iteração usando forEach

```javascript
const users = [
  { name: "clóvis", id: 1, active: true },
  { name: "silva", id: 2, active: false },
  { name: "neto", id: 3, active: true },
]

for (const i = 0; i < users.length; i++) {
  console.log(users[i].name)
}

//olha que diferença...
users.forEach(function (user) {
  console.log(user.name)
})
```

> Tudo que é mais simples, acaba sendo mais interessante de se usar no dia-a-dia ;)

Conhecendo este jeito lindo e simples de se trabalhar com o for (falo 'for' me referindo a forEach), vários dev's estagnados não se perguntam se existem ainda uma melhor forma de iterar um array para cada situação especifica, e outras séries de operações do array são simplesmente ignoradas por eles. Infelizmente este é o cenário atual que acontece aqui no Brasil :'( , mas vamos continuar o post...

## Filtrando o array com o <span>filter</span>

Imagine o seguinte array:

```javascript
let users = [
  { name: "clóvis", id: 1, active: true },
  { name: "silva", id: 2, active: false },
  { name: "neto", id: 3, active: true },
]
```

Agora pense, que você queira trazer apenas os objetos que tenham como propriedade o <span>active:true</span>, como os dev's de agências desatualizados fariam? (nada contra)

```javascript
const data = []

//repara no começo de um hadouken
users.forEach(function (user) {
  if (user.active) {
    data.push(user)
  }
})
```

Sempre que me deparo com situações assim, imagino duas respostas, rs

**\- Dev. desatualizado:**

"Maan, beleza... você conseguiu terminar o seu projeto, se preocupa com isso não pow, TÁ RODANDO shaushua."

**\- Dev. de verdade:**

"Tem como fazer melhor!..."

Vejamos com o filter como ficaria:

```javascript
// cade o hadouken??
users = users.filter(function (user) {
  return user.active
})
```

O método filter() cria um novo array com todos os elementos que passaram ao teste, no nosso caso o user que contém a propriedade <span>active</span>.

## Every

O método every, testa todo os elementos da array passam no teste executado pela função em que fornecemos. Ex:

```javascript
const monthlyPayment = [
  { month: "jan", payday: true },
  { month: "fev", payday: true },
  { month: "mar", payday: true },
  { month: "abr", payday: true },
  { month: "mai", payday: true },
]

let payments = monthlyPayment.every(function (month) {
  return month.payday
})

//payments == true ;)
```

## Some

O método some faz basicamente o mesmo que o every, a única diferença é que ele testa se algum elemento do array passa no teste executado pela função que foi fornecida... Ex:

```javascript
const monthlyPayment = [
  { month: "jan", payday: true },
  { month: "fev", payday: false },
  { month: "mar", payday: false },
  { month: "abr", payday: false },
  { month: "mai", payday: true },
]

let payments = monthlyPayment.some(function (month) {
  return month.payday
})

//payments == true ;)
```

## Map

Através do map, podemos criar um novo array, derivando-se do array atual.

Imagine que seu chefe lhe trouxe um punhado cheio jóias e bijuterias ("ah jura?") e lhe pediu para você retirar apenas as jóias de ouro e guardar numa caixa. O método map faz exatamente isto, ele pecorre o array, trazendo apenas o valor retornado. Ex:

```javascript
const monthlyPayment = [
  { name: "jan", payday: true },
  { name: "fev", payday: false },
  { name: "mar", payday: false },
  { name: "abr", payday: false },
  { name: "mai", payday: true },
]

let months = monthlyPayment.map(function (month) {
  return month.name
})

//months == ['jan', 'fev', 'mar', 'abr', 'maio'])
```

## Reduce

Podemos criar uma acumulação de valores no array utilizando o método reduce. Ex:

```javascript
const monthlyPayment = [
  { name: "jan", payday: 1400 },
  { name: "fev", payday: 100 },
  { name: "mar", payday: 1300 },
  { name: "abr", payday: 400 },
  { name: "mai", payday: 800 },
]

let result = monthlyPayment.reduce(function (currentSum, currentMonth) {
  return currentSum + currentMonth.payday
}, 0)

//result == 4000)
```

> note que após o fechamento da função, colocamos um '0' para que o primeiro valor seja igual à 0. Logo quando entrarmos no primeiro loop, do método reduce, o currentSum será igual à 0, e nos loops seguinte o currentSum será a soma dos dias pagos('payday').

Um bom material para podermos estudar o core da linguagem é a documentação da MDN, apartir deste conteúdo, você pode estar se aprofundando mais na linguagem javascript, segue abaixo:

[Clica aqui :p](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Conclusão

É muuuiito importante ficar ligado nestes métodos e nos que virão, pois a partir deles deixamos nosso código limpo, fácil de entender e bastante peformático.

_Obrigado e até o próximo post \o/_
