---
path: "/pare-de-usar-javascript-para-tudo"
date: "2016-02-08"
title: "Pare de usar javascript para tudo"
author: "Clóvis Neto"
tags: "css, javascript"
description: "Ontem estava navegando por alguns blogs e pude notar o quanto os dev's recorrem ao uso de javascript para tudo, até para criar simples animações cujo o resultado poderia ser obtido com CSS."
---

Javascript sem dúvida é uma linguagem fantástica e isto já foi mais que provado, mas será que realmente precisamos recorrer ao seu uso sempre? Quando estava navegando em alguns post, pude notar o quanto os desenvolvedores estão cada dia mais dependentes do javascript... E PORQUE NÃO DAMOS UMA CHANCE PARA O CSS TAMBÉM?!

Dentre os posts que fiquei muito puto me chamaram atenção, foi um em que o autor ensinava criar um menu off canvas com css3 mas que no final ele recorria a JS...

<center><img src="/images/putz.jpg"> <br /> Putz!</center>

Uma das coisas que me deixa mais entristecido na comunidade front end é como escanteamos o nosso bom CSS e esquecemos que sem ele, as páginas de hoje não teriam vida, estariamos sempre com layouts engessados e etc...

## Que tal um pouquinho mais de CSS?

Um dos exemplos que postei alguns dias atrás no meu facebook e nas comunidades foi o [CsSocker](http://clovisdasilvaneto.github.io/CsSocker/), um joguinho que desenvolvi usando apenas CSS3, sem imagens e javascript. Apesar de ser um jogo demonstrativo com apenas 2 estágios, um menu inicial, tela de instruções e gameover, pode-se notar claramente o números de exemplos fantâsticos que podemos obter com CSS3, basta apenas usar sua imaginação...

Voltando para casos reais, desenvolvi outro exemplo para mostrar que não precisamos usar JS para tudo. Imagine a seguinte situação:

Seu chefe estava navegando em um site de músicas e ao passar o mouse sobre um item do menu ele teve a incrível surpresa: O fundo do item ativo se deslocou até o item em que o ponteiro do seu mouse estava por cima... Logo o seu chefe pediu para você aplicar este mesmo estilo no site do cliente mais importante da empresa...
Com esta situação nos deparamos com 3 perfis de desenvolvedores:

- O amador - Vai logo procurar um plugin jQuery pra chegar ao resultado final.
- O famoso "faz na mão" - Ele sabe que este efeito é simples e não precisa de nenhum plugin, nem mesmo de jQuery... Faz com javascript puro.
- O 'Show Man' - Você! Que sempre está na ativa lendo meu blog, dev "fuck-you" que acabou notando que não é preciso usar essa dinâmica toda para poder obter o resultado final, ousou desafiar-se e fazer com CSS.

O menu citado acima pode ser obtido no exemplo que desenvolvi em meu codepen abaixo

<iframe height="265" style="width: 100%;" scrolling="no" title="Pure CSS menu-follow" src="https://codepen.io/clovisneto/embed/zrmgmr?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/clovisneto/pen/zrmgmr'>Pure CSS menu-follow</a> by clovis neto
  (<a href='https://codepen.io/clovisneto'>@clovisneto</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Não irei explicar detalhadamente para não desfocarmos o assunto do post, mas note que todas animações no exemplo citado foram feitas com css. Básicamente utilizei as técnicas de <span>:hover</span>, <span>:after</span> e <span>:before</span>, além de usar e abusar do seletor de irmão, o: <span>~</span> (til).

Voltando para o menu off canvas, o mesmo efeito podemos obter usando a técnica de :checked ou :target, eu particulamente prefiro o :checked por não dar merda na sua página, caso a mesma seja single page application... Vejamos abaixo como criar o menu off canvas com CSS REALMENTE:

#### Estrutura HTML:

```html
<input type="checkbox" id="menu" hidden />
<section class="canvas">
  <nav class="menu" role="navigation">
    <label for="menu"><i class="fa fa-close"></i></label>
    <ul>
      <li>
        <a href="#"><i class="fa fa-home"></i> Home</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-users"></i> Users</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-cog"></i> Configurations</a>
      </li>
    </ul>
  </nav>

  <label class="menu-icon" for="menu" role="menuitem">
    <span></span>
  </label>

  <h1>Olá mundo, eu sou um dev "Show Man"</h1>
  <p>
    Abra o menu acima e veja como podemos criar um menu off canvas usando apenas
    CSS3
  </p>

  <footer>
    Developer by <a href="http://clovisdasilvaneto.github.io">Clóvis Neto</a>
  </footer>
</section>
```

Usamos o checkbox para podermos obter a ação de clique do usuário, afim de pegar o canvas e mover no eixo X...

> Incluí também a fonte 'Raleway' do Google Fonts e a Font Awesome para dar um toque mais bonito ao nosso exemplo... Note que um pouco de acessibilidade não faz mal a ninguém...

#### Logo aplicando o CSS abaixo:

```css
* {
  margin: 0;
  padding: 0;
  color: #fff1f1;
  font-family: "Raleway";
}

body {
  background: #b486cc;
  font-size: 2em;
}

h1 {
  font-size: 2.4em;
  margin: 2rem 0 0.5em;
  text-shadow: 1px 1px 0 #3a3a3a;
}

p {
  font-size: 0.6em;
}

h1,
p {
  padding: 0 10%;
  text-align: center;
}

p,
a {
  font-weight: 300;
}

a {
  text-decoration: none;
}

label {
  cursor: pointer;
}

footer {
  padding: 0.5em 0;
  font-size: 0.5em;
  text-align: center;
  margin-top: 1.5em;
}

footer a {
  color: #b2ff06;
}

.canvas {
  padding-top: 1px;

  -webkit-transition: ease 0.5s all;
  -moz-transition: ease 0.5s all;
  -ms-transition: ease 0.5s all;
  -o-transition: ease 0.5s all;
  transition: ease 0.5s all;
}

.menu-icon {
  display: block;
  cursor: pointer;
  width: 38px;
  margin: 0.51em;
}

.menu-icon span,
.menu-icon:after,
.menu-icon:before {
  content: "";
  display: block;
  margin-top: 0.3rem;
  border: solid 3px #fff;
  width: 100%;
}

.menu-icon:hover span,
.menu-icon:hover:before,
.menu-icon:hover:after {
  border-color: rgba(255, 255, 255, 0.75);
}

.menu {
  height: 100vh;
  background: #594165;
  font-size: 1.3rem;
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  -ms-transform: translate3d(-100%, 0, 0);
  -o-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}

.menu ul {
  padding-top: 3.3em;
  margin: 0 2em;
  list-style: none;
}

.menu a {
  font-weight: 400;
  padding: 0.5rem 1rem;
  display: block;
}

.menu i {
  display: inline-block;
  margin-right: 0.5em;
}

.fa-close {
  font-weight: 100;
  position: absolute;
  top: 10px;
  right: 4px;
}

#menu:checked ~ .canvas {
  -webkit-transform: translateX(300px);
  -moz-transform: translateX(300px);
  -ms-transform: translateX(300px);
  -o-transform: translateX(300px);
  transform: translateX(300px);
}
```

Teriamos o resultado abaixo, vale à pena observar a técnica da pseudo classe <span>:checked</span> que é o que nos faz definir o estado do nosso canvas.

<iframe height="585" style="width: 100%;" scrolling="no" title="Beautiful Off Canvas Menu" src="https://codepen.io/clovisneto/embed/zrMOKZ?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/clovisneto/pen/zrMOKZ'>Beautiful Off Canvas Menu</a> by clovis neto
  (<a href='https://codepen.io/clovisneto'>@clovisneto</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Conclusão

Vamos parar um pouco de usar exageradamente a nossa querida linguagem javascript :D

Que tal olhar mais diferente para o nosso amigo CSS, você pode ficar surpreso com as mágicas fantásticas que esta incrível linguagem pode nos oferecer.
