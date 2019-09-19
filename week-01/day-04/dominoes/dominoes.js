'use strict';

const Domino = require('./domino');

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

function swap(index1, index2){
  let temp = dominoes[index1];
  dominoes[index1] = dominoes[index2];
  dominoes[index2] = temp;
  console.log(index1, index2);
  
}

var IIFE = function arrangeDominoes() {
  for(let i = 0; i < dominoes.length; i++){
    for(let j = i + 1; j < dominoes.length; j++){
      
      dominoes[i].values[1] === dominoes[j].values[0] && swap(i + 1, j)
    }
  }
  
}()

console.log(dominoes.toString());