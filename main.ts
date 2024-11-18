let NASDAQ = 0
let SnP = 0
game.splash("Welcome to the Stock Game Investor! ")
pause(500)
game.splash("What would you like to invest in?")
pause(500)
game.askForString("Here are your options! NASDAQ and SnP", 6)
//  if S&P true then splash their choice then ask how much they want to invest and their current wallet amount
if ("SnP") {
    true
    SnP = randint(10000, 1000000)
}

game.splash("you've chosen the S&P!")
pause(500)
game.splash("This is its current Value: " + "$" + ("" + SnP))
//  same stuff just for Nas
if ("NASDAQ") {
    true
    NASDAQ = randint(10000, 1000000)
}

game.splash("you've chosen NASDAQ")
pause(500)
game.splash("This is its current Value: " + "$" + ("" + NASDAQ))
