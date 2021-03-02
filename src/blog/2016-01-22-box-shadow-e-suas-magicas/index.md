---
path: "/box-shadow-e-suas-magicas"
date: "2016-01-22"
title: "Box shadow e suas mágicas"
author: "Clóvis Neto"
tags: "css"
description: "Após um bom tempo brincando, criando e desenhando formas com css, acabei descobrindo algumas técnicas bastantes interessantes e que podem ser aplicadas tanto em ilustrações como em web sites, sistemas ou portais."
---

<center><img src="/images/cssocker.jpg" alt="CsSocker" /></center>

Se você acompanha minhas postagens no twitter ou facebook, com certeza já ouviu falar de um joguinho que estou desenvolvendo apenas com css, onde nenhuma imagem será utilizada e nenhuma linha de javascript no código fonte será encontrada (apenas o do Google Analytics, claro :p).

## A propriedade box-shadow

Uma das "pseudo class" css que mais gosto e uso muito é a do estado de <span>:hover</span> e quando comecei a estudar a fundo a propriedade <span>box-shadow</span>, esses dois se incaixaram perfeitamente.

Abaixo temos um exemplo bastante simples de como usar essas duas obras de artes:

<style>
    .btn-simple {
        width: 100px;
        height: 100px;
        margin: 30px auto;
        text-align: center;
        background: #2e9fff;
        border-radius: 4px;
        line-height: 100px;
        cursor: pointer;
        color: #fff;
    }

    .trs-5 {
        -webkit-transition:all cubic-bezier(0.25, 0.1, 0.23, 0.79) 0.5s, box-shadow cubic-bezier(0.25, 0.1, 0.23, 0.79) 0.5s;
        -moz-transition:all cubic-bezier(0.25, 0.1, 0.23, 0.79) 0.5s, box-shadow cubic-bezier(0.25, 0.1, 0.23, 0.79) 0.5s;
        -ms-transition:all cubic-bezier(0.25, 0.1, 0.23, 0.79) 0.5s, box-shadow cubic-bezier(0.25, 0.1, 0.23, 0.79) 0.5s;
        -o-transition:all cubic-bezier(0.25, 0.1, 0.23, 0.79) 0.5s, box-shadow cubic-bezier(0.25, 0.1, 0.23, 0.79) 0.5s;
        transition:all cubic-bezier(0.25, 0.1, 0.23, 0.79) 0.5s, box-shadow cubic-bezier(0.25, 0.1, 0.23, 0.79) 0.5s;
    }

    #on-side {
        box-shadow:inset 0 0 0 #00DFFF;
    }

    #on-side:hover {
        -webkit-transform:scale(1.2);
        -ms-transform:scale(1.2);
        -o-transform:scale(1.2);
        -moz-transform:scale(1.2);
        transform:scale(1.2);
        box-shadow:inset 0 -100px 0 0 #00DFFF, 0 8px 6px -6px #000;
    }
</style>

<div class="btn-simple trs-5" id="on-side">Hover-me</div>

## O Problema

Após descobrir que para chegar ao resultado como o botão à cima, vários dev's param e partem para aprender outras propriedades css, não se aprofundam em cada propriedade especifica, seu conhecimento sempre é superficial, por isso geralmente costumo dizer que ninguém sabe css, pois é fácil de mais.

Para perceber algumas mágicas do box-shadow, vamos voltar um pouco no tempo...

## O tempo de agência

Lembra daquele tempo que você recebia os layouts malucos que o design fazia no photoshop em que o conteudo sempre iria ter dois bg's que nunca se alinhavam em grid nenhum? Se não entendeu, veja a figura abaixo

<center><img src="/images/layout-maluco.jpg" alt="Layout Maluco" /><br>**Figura 1:** Layout maluco</center>

Agora lhe pergunto oque você fária para chegar a este resultado? Adicionaria uma div com <span>position: absolute</span>, né espertinho? Podemos chegar ao mesmo resultado com um html e css bem mais enxuto adicionando apenas um box-shadow e aumentando o padding do elemento:

<center><img src="/images/layout-maluco2.jpg" alt="Layout Maluco" /><br>**Figura 2:** Layout maluco um pouco mais elegante</center>

```html
<h1 class="banner">Meu layout maluco</h1>
<div class="content-crazy">
  <h2>Layout Maluco</h2>
  <br />
  <p>
    It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
    opposed to using 'Content here, content here', making it look like readable
    English. Many desktop publis
  </p>
</div>
```

```css
.content-crazy {
  (...)padding: 2em 20em 4em 32em;
  box-shadow: inset 470px 0 #2eb983;
}
```

> Perceba que acrescentamos apenas duas linhas no css.

## Dúplicar formas

Outra técnica bastante "show", é a possibilidade de dúplicar elementos apartir da sua forma original. Um exemplo bem objetivo é as nuvens do CsSocker, onde desenho um círculo e dúplico o mesmo para que as suas réplicas formem uma nuvem.

Abaixo 3 simples passos para formar uma nuvem pequena:

<style type="text/css">
    .circle {
        background: #2e9fff;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        margin: 30px auto;
    }
</style>
<div class="circle">
</div>

<center>**Figura 3:** Circulo
</center>

Replicando com a propriedade box-shadow podemos chegar a uma nuvem amigável:

<style>
    .shadow {
        box-shadow: 63px -14px 0 #2e9fff;
        -webkit-transform: translateX(-70px);
        -moz-transform: translateX(-70px);
        -ms-transform: translateX(-70px);
        -o-transform: translateX(-70px);
        transform: translateX(-70px);
    }
</style>
<div class="circle shadow">
</div>
<center>**Figura 4:** Circulos formando uma nuvem
</center>
<br />
<style>
    .nuvem {
        box-shadow:63px -14px 0 #2e9fff, 123px 0px 0 #2e9fff, 63px 10px 0 #2e9fff;
        -webkit-transform: translateX(-70px);
        -moz-transform: translateX(-70px);
        -ms-transform: translateX(-70px);
        -o-transform: translateX(-70px);
        transform: translateX(-70px);
    }
</style>
<div class="circle nuvem">
</div>
<center>**Figura 5:** Nuvem formada a partir de box-shadow
</center>

> Muitos elementos do CsSocker foram feitos a partir desta técnica de réplicação, como exemplo temos também as cercas do campo que estão por trás das barras.

Um exemplo fantástico é a[ monaliza em css](https://codepen.io/jaysalvat/pen/HaqBf), que foi feito a partir de um conversor de imagens para css. Note que os traços gerados da pintura, foram todos criados por meio do <span>box-shadow</span>

Seguindo este conceito, podemos chegar a resultados incríveis... É só usar a imaginação!

Sobre o CsSocker, eu ainda não terminei mas irei criar vários posts relacionados a ele e ao desenvolvimento de jogos com css ;)

_Fiquem ligados!! (y)_
