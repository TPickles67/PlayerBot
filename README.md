# PlayerBot

This bot allows 2 players to play Magic: The Gathering's Commander format locally.

The app will be a simulated 3rd Player at the table. This "player" will act as a barrier that needs to be removed before each player may attack the other directly.

It will begin with a health pool of 40HP, same as the Player, and have access to a table of outcomes that will be selected when the "Roll for Event" button is pressed. The Events will not happen back-to-back, and the number of events can be changed as needed.

Currently, the bot has access to the following table:

v0.1
1-3 = Exile all nonland permanents. PlayerBot takes 10 damage.
4-7 = Sacrifice all creatures. PlayerBot takes 10 damage.
8-16 = Player with the highest total Attack and Defense sacrifice target permanent. PlayerBot played 2 spells and drew a second card.
17-19 = PlayerBot played 1 spell, drew two extra cards and played an additional land.
20 = Player with the lowest total Attack and Defense may scry 4 then draw two cards, the player with the highest may scry 2 and draw 1.

Changes to make for 0.2:
Add Spell Dice
Add all other die
Change variables to be less specific

Programmed by: Tommy Pickles
Designed by: lucky_i_am
             Tommy Pickles