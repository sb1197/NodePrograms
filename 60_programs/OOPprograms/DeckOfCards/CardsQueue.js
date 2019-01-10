/*/**********************************************************************************
 *  Purpose         : Generates distinct cards From deck of cards using Queue.
 *  @file           : CardsQueue.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 09-01-2019
 **********************************************************************************/

var read = require('readline-sync');
const queueUsingLinked = require('./Queue');
var utility = require('../../utility/Utility');
var queue = new queueUsingLinked.Queue;
var util = require('util');

function cardsSort()
{
    for (let i = 1; i < 5; i++) 
    {
        queue.enqueue(i);
    }
    //queue.display();
    var suit = ["♣️", "♦️", "❤️", "♠️"];
    var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace"];			
    // initialize deck
    var n = suit.length * cards.length;
    var deck = [n];
    for (let i = 0; i < cards.length; i++) 
    {
        for (let j = 0; j < suit.length; j++)
        {
            deck[suit.length*i + j] = suit[j] +" "+ cards[i];
        }
    }	    
    // shuffle the cards to get random cards
    for (let i = 0; i < n; i++)
    {
        var r = i + parseInt(Math.random() * (n-i));
        var temp = deck[r];
        deck[r] = deck[i];
        deck[i] = temp;
    }	
    console.log(deck);
    var n = 13;
    var x=0;
    for(let index = 0;index<4;index++)
    {  console.log();
        console.log(index+1," Person card is ");
        for (let i = 0; i < n; i++) 
        {   
            util.print(deck[i+x]+" ");
        }
        x=x+13;	        
    }
    console.log();
}
cardsSort();
