/*/**********************************************************************************
 *  Purpose         : Generates distinct cards From deck of cards.
 *  @file           : DeckOfCards.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 05-01-2019
 **********************************************************************************/

var util = require('util');
var suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace"];			
// initialize deck
var n = suit.length * cards.length;
var deck = [n];
for (let i = 0; i < cards.length; i++) 
{
	for (let j = 0; j < suit.length; j++)
	{
	    deck[suit.length*i + j] = cards[i] +  suit[j];
    }
}	    
console.log("Deck elements are :");
for (let i = 0; i < deck.length; i++) 
{ 
    util.print(deck[i]+" ");	        
}
console.log();
// shuffle the cards to get random cards
for (let i = 0; i < n; i++)
{
    var r = i + parseInt(Math.random() * (n-i));
	var temp = deck[r];
	deck[r] = deck[i];
	deck[i] = temp;
}	    
// print shuffled deck
for (let i = 0; i < 4; i++) 
{
	console.log("\n* Person "+(i + 1)+"*");
    for (let j = 0; j < 9; j++)
    {
        util.print(deck[i + j * 4]);
        console.log();     
	}
}