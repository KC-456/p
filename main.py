# PLEASE LET ME KNOW IF NONE OF THIS MAKES SENSE
# I WILL BE MORE THAN HAPPY TO EXPLAIN ! ! ! ! !
def choose_investment():
    global choice_1
    choice_1 = game.ask_for_string("what would you like to invest in?  NASDAQ or SnP", 6)
    game.splash("this is your investment option:  " + choice_1)
def play_game():
    while wallet > 0:
        choose_investment()
        # stock choice
        invest_in_stock()
        # investment & upd wallet
        if wallet <= 0:
            game.splash("you lose! you really thought you were gonna make a profit? HAHA!")
            break
def invest_in_stock():
    global stock_value, investment, result, wallet
    # stock selection and rand val assinment
    if choice_1 == "NASDAQ":
        stock_value = randint(1000, 50000)
    elif choice_1 == "SnP":
        # stock val for NAs
        stock_value = randint(1000, 50000)
    else:
        # same for SnP
        game.splash("choose something ya goober!")
        return
    # investment amnt
    investment = randint(500, 5000)
    game.splash("you're investing $" + ("" + str(investment)) + " in " + ("" + str(choice_1)))
    # win or lose
    result = randint(-1, 1)
    # -1 loss and 1 gain
    if result == 1:
        gain_or_loss = randint(100, 10000)
        # gain $100 and $10,000
        wallet += gain_or_loss
        game.splash("congratulations! you earned $" + ("" + str(gain_or_loss)) + " from your " + ("" + str(choice_1)) + " investment.")
    else:
        # Convert to string
        loss = randint(1000, 10000)
        # lose $1,000 and $10,000
        wallet += 0 - loss
        game.splash("LOL! you lost $" + ("" + str(loss)) + " from your " + ("" + str(choice_1)) + " investment")
    # conv to string
    game.splash("your current wallet amount is: $" + ("" + str(wallet)))
result = 0
investment = 0
stock_value = 0
choice_1 = ""
wallet = 0
wallet = 30000
# starting wallet amnt
game.splash("welcome to the Stock Game Investor!")
pause(200)
game.splash("you're start with $" + ("" + str(wallet)))
play_game()