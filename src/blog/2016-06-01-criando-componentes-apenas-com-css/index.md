---
path: "/criando-componentes-apenas-com-css"
date: "2016-06-01"
title: "Criando componentes apenas com css"
author: "Clóvis Neto"
tags: "css"
description: "Faaaaaaaaala galeraa! Depois de um bom tempo sem dar as caras, resolvir voltar com um assunto um pouco esquecido mas bastante importante..."
---

No dia 20 de abril, realizei uma talk bem descontraída sobre [Componentização com CSS na ThoughtWorks em Recife/PE](http://slides.com/clovisneto/deck#/1), não pude deixar de notar que a forma de como esta técnica facilita o desenvolvimento e ajuda na peformance, chamou a atênção de muitos dev's. Resolvi deixar algumas considerações finais sobre _**componentização com css**_

## Uma breve introdução

Apesar de ser desenvolvedor web, sempre fui um carinha apaixonado por front end, principalmente quando o assunto é relacionado à algum efeito Top of the Master.

Me recordo do primeiro desenho que vi com css foi o de [Bernad de Luna](http://bernarddeluna.com/), quando ele desenhou o [Homer Simpsons](http://bernarddeluna.com/project/pure-css-homer/) apenas com css. Depois veio [Felipe Fialho](https://www.felipefialho.com/) e fez um teclado, xadrez e um personagem de jogo de video game (não me recordo do nome... até na talk eu esqueci ¬¬').

Depois de um tempo brincando com desenhos e outras coisas feitas apenas com css, notei como o css nos possibilita a criação de diversas formas, mas eu queria mais que isso. Eu sabia que isto não iria ajudar em soluções reais para projetos, logo comecei a imaginar como aplicar estas técnicas "show" nos meus projetos do dia-a-dia.

## Conhecendo as técnicas

Nos meados de 2013~2014, estudando algumas propriedades do css, pude notar algo que me chamou atênção. Lembrei que existe uma propriedade específica para input's do tipo checkbox ou radio, então várias idéias começaram a brotar da minha mente.

Imaginei que se eu posso prever uma ação de clique num campo especifico (claro o <span>:checked</span> existe para quando um campo for checado), eu posso ir muito além de criar simples formulários bonitinhos e estilizados. Então comecei a criar acordeons, dropdowns (só para esudo porque isto também é possivel com o <span>:hover</span>), galerias, modals, carroséis e etc...

> Vale lembrar que também podemos obter uma determinada ação de clique atravês do <span>:target</span>

Sempre costumo antes de criar algo <span>"very fuck"</span> com css, pensar em toda a lógica que será utilizada.

<center><img src="/images/logica.gif" /></center>

## ãh? lógica com css???

Não, eu não pirei, shusahushua, imagine comigo, se você quer atribuir um estilo em um elemento quando uma determinada ação acontecer, como você faria? Usaria javascript?

Porque não da uma chance para o nosso amigo css? Vamos pensar um pouco...

## Criando o componente

Vejamos uma simples marcação html, com a estrutura de um modal:

```html
<input type="checkbox" id="modal" hidden />
<label for="modal">Teste-me</label>

<article id="my-modal-content">
  <header>
    <h3>Meu Modal</h3>
  </header>

  <p>You fuck man!</p>
</article>
```

> Note que escondemos o input com o atributo hidden do html

Agora vamos aplicar um estilo básico:

```css
* {
  margin: 0;
  padding: 0;
}

label {
  color: #fff;
  display: inline-block;
  padding: 10px;
  background: blue;
  cursor: pointer;
}

#my-modal-content {
  position: absolute;
  top: 30px;
  margin-left: -200px;
  left: 50%;
  background-color: #fff;
  width: 100%;
  border: solid 1px #f3f3f3;
  min-height: 170px;
  max-width: 400px;
  box-shadow: 2px 2px 3px rgba(204, 204, 204, 0.45);
  border-radius: 5px;
}

h3 {
  margin: 0;
  padding: 13px 0 11px;
  font-size: 24px;
  border-bottom: solid 1px #f3f3f3;
  font-weight: 300;
}

p {
  font-size: 18px;
  padding-top: 20px;
}

h3,
p {
  padding-left: 31px;
}
```

logo o estilo do nosso modal ficaria desta forma:

<style>
    #content-1 * { margin: 0; padding:0; }

    #content-1 label {
        cursor: pointer;
        color:#fff;
        display: inline-block;
        padding:10px;
        background: blue;
    }

    #content-1 .my-modal-content {
        position: absolute!important;
        top: -40px!important;
        margin-left: -200px!important;
        left: 50%!important;
        background-color: #fff!important;
        width: 100%!important;
        border: solid 1px #f3f3f3!important;
        min-height: 170px!important;
        max-width: 400px!important;
        -webkit-transition:ease-in-out all 0.5s!important;
        -moz-transition:ease-in-out all 0.5s!important;
        -ms-transition:ease-in-out all 0.5s!important;
        -o-transition:ease-in-out all 0.5s!important;
        transition:ease-in-out all 0.5s!important;
        box-shadow: 2px 2px 3px rgba(204, 204, 204, 0.45)!important;
        border-radius:5px!important;
    }

    #content-1 .my-modal-content h3 {
        margin: 0!important;
        padding: 13px 31px 11px!important;
        font-size: 24px!important;
        border-bottom: solid 1px #f3f3f3!important;
        font-weight: 300!important;
    }

    #content-1 .my-modal-content p {
        font-size: 18px!important;
        padding-top: 20px!important;
        padding-left: 31px!important;
    }

    #content-1 {
        margin-top: 60px;
        position: relative;
        padding: 20px;
        min-height: 200px;
    }
</style>

<div id="content-1">
    <input type="checkbox" id="modal" hidden="" />
    <label for="modal">Teste-me</label>
    <div class="my-modal-content">
        <header>
            <h3>Meu Modal</h3>
        </header>
        <p>You are the man!</p>
    </div>
</div>

Agora que tal estilizar os irmãos deste elemento apenas quando ele for checado?

Existe uma propriedade css que nos possibilita selecionar os irmãos de um determinado elemento, que é o acento <span>~</span> (til).

Colocarei um <span>opacity:0; visibility:hidden</span> no modal e uma transição para simular um efeito de fadeIn, para que fique escondido e com o pseudo elemento <span>:checked</span> faremos a mágicar acontecer!

```css
#my-modal-content {
  (...)opacity: 0;
  visibility: hidden;
  -webkit-transition: ease-in-out all 0.5s;
  -moz-transition: ease-in-out all 0.5s;
  -ms-transition: ease-in-out all 0.5s;
  -o-transition: ease-in-out all 0.5s;
  transition: ease-in-out all 0.5s;
}

input:checked ~ #my-modal-content {
  opacity: 1;
  visibility: visible;
}
```

Teriamos um efeito parecido com este:

<style>
    #modal-opened {
        opacity: 0;
        visibility: hidden;
    }

    input:checked ~ #modal-opened {
        opacity:1;
        visibility:visible;
    }
</style>
<div id="content-1">
    <input type="checkbox" id="modal2" hidden="" />
    <label for="modal2">Teste-me</label>
    <div class="my-modal-content" id="modal-opened">
        <header>
            <h3>Meu Modal</h3>
        </header>
        <p>You are the man!</p>
    </div>
</div>

Perceba como foi simples, fácil, prático e peformático criar o nosso componente.

<center><img src="surprised.gif" alt="surprised" /></center>

## E a peformance?

Não vou me estender muito em questão de peformance para o post não ficar muito grande, mas só para você ter idéia, um site foi testado no [GTMetrix](https://gtmetrix.com/) antes de usar componentes apenas com css. Os valores obtidos foram os seguintes:

- Page load time: 1.26s
- Total page size: 197KB
- Total number of requests: 8

Logo depois utilizamos componentes com css, embedamos o css e o carregamento dos icones foi descartado. Obtivemos os seguintes valores

- Page load time: 0.75s
- Total page size: 58.6KB
- Total number of requests: 5

Um impacto de peformance bastante considerável pois simples ajustes que muitas vezes esquecemos de fazer, como diminuir requisições, podem causar um impacto muito maior na perfomance de um projeto.

## Algumas fontes...

É sempre bom ter uma outra fonte de estudo. E como referência, não posso deixar de citar o site da [MDN (clique aqui)](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements). Também encontrei um post da hora no blog do [Felipe Fialho (clique aqui)](https://www.felipefialho.com/).

## Frameworks <3

Não é bem componentização, mas engloba tudo... [All Animation CSS3](http://all-animation.github.io/) é uma lib que contém várias animações css3 que pode nos auxiliar no desenvolvimento dos nossos componentes com animações css muito da hora.

"A parte boa da coisa sempre fica por ultimo", o Felipe Fialho (Fala felipão! já da pra cobrar pela citação do teu nome no post suhaushauha) criou o [Pure CSS Components](https://css-components.felipefialho.com/), uma lib muito bacana que reúne uma série de elementos componentizados com css, que vai desde um simples modal até um carrosel. Recentemente ela foi ré-escrita com o stylus. Vale apena conferir.

### Considerações Finais

Sem dúvida o css já nos ofereceu muito e ainda terá muiiiiito a nos oferecer, só basta usar a cabeça e por a criatividade em prática!

É isso ai galera, um enorme abraço e até a próxima :D
