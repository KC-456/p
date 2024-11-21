//  PLEASE LET ME KNOW IF NONE OF THIS MAKES SENSE
//  I WILL BE MORE THAN HAPPY TO EXPLAIN ! ! ! ! !
function choose_investment() {
    
    choice_1 = game.askForString("what would you like to invest in?  NASDAQ or SnP", 6)
    game.splash("this is your investment option:  " + choice_1)
}

function play_game() {
    while (wallet > 0) {
        choose_investment()
        //  stock choice
        invest_in_stock()
        //  investment & upd wallet
        if (wallet <= 0) {
            game.splash("you lose! you really thought you were gonna make a profit? HAHA!")
            break
        }
        
    }
}

function invest_in_stock() {
    let gain_or_loss: number;
    let loss: number;
    
    //  stock selection and rand val assinment
    if (choice_1 == "NASDAQ") {
        stock_value = randint(1000, 50000)
    } else if (choice_1 == "SnP") {
        //  stock val for NAs
        stock_value = randint(1000, 50000)
    } else {
        //  same for SnP
        game.splash("choose something ya goober!")
        return
    }
    
    //  investment amnt
    investment = randint(500, 5000)
    game.splash("you're investing $" + ("" + ("" + investment)) + " in " + ("" + ("" + choice_1)))
    //  win or lose
    result = randint(-1, 1)
    //  -1 loss and 1 gain
    if (result == 1) {
        gain_or_loss = randint(100, 10000)
        //  gain $100 and $10,000
        wallet += gain_or_loss
        game.splash("congratulations! you earned $" + ("" + ("" + gain_or_loss)) + " from your " + ("" + ("" + choice_1)) + " investment.")
    } else {
        //  Convert to string
        loss = randint(1000, 10000)
        //  lose $1,000 and $10,000
        wallet += 0 - loss
        game.splash("LOL! you lost $" + ("" + ("" + loss)) + " from your " + ("" + ("" + choice_1)) + " investment")
    }
    
    //  conv to string
    game.splash("your current wallet amount is: $" + ("" + ("" + wallet)))
}

let result = 0
let investment = 0
let stock_value = 0
let choice_1 = ""
let wallet = 0
wallet = 30000
//  starting wallet amnt
game.splash("welcome to the Stock Game Investor!")
pause(200)
game.splash("you're start with $" + ("" + ("" + wallet)))
play_game()
