/**
 * Mon premier javascript
 * @author Alexandre Rufer
 * @version 0.0.1
 * @since 2023-08-29
 */
"use strict";

//Récupérer tous les paragraphes du document
let tabPara = document.querySelector("p");

//Récupérer le premier bouton avec la classe ajouter
let btAjouter = document.querySelector(".ajouter");

//Récupérer le champ article
let txtArticle = document.querySelector("#article");

//Récupère la première liste à puce avec la classe articles
let ulArticles = document.querySelector("ul.articles");

//Affiche les contenues
console.log(tabPara, btAjouter, txtArticle, ulArticles);

//Ecoute le clique sur le bouton ajouter
btAjouter.addEventListener("click", () => {
    ulArticles.innerHTML += "<li>" + txtArticle.value + "</li>";
    //vide le champ de texte
    txtArticle.value = "";
});


