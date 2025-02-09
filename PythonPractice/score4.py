# Python results on my Arch Linux Celeron E3400:
#
# - Normal python 2.7            96.4 seconds
# - PyPy 1.8...                  14.1 seconds
# - Shedskin 0.9                 10.2 seconds
# - PyPy 1.8 translating to C     0.7 seconds

from sys import argv, exit

# remove this "psyco" part if you use Shedskin
try:
    import psyco
    psyco.full()
except:
    pass

WIDTH = 7
HEIGHT = 6
ORANGE_WINS = 1000000
YELLOW_WINS = -ORANGE_WINS


# pypy requires globals to be stored in singletons
class Globals:
    pass
g = Globals()
g.g_max_depth = 7
g.g_debug = False


class Cell:
    Barren = 0
    Orange = 1
    Yellow = -1


def score_board(board):
    counters = [0] * 9

    # Horizontal spans
    for y in xrange(HEIGHT):
        score = board[y][0] + board[y][1] + board[y][2]
        for x in xrange(3, WIDTH):
            score += board[y][x]
            counters[score + 4] += 1
            score -= board[y][x - 3]

    # Vertical spans
    for x in xrange(WIDTH):
        score = board[0][x] + board[1][x] + board[2][x]
        for y in xrange(3, HEIGHT):
            score += board[y][x]
            counters[score + 4] += 1
            score -= board[y - 3][x]

    # Down-right (and up-left) diagonals
    for y in xrange(HEIGHT - 3):
        for x in xrange(WIDTH - 3):
            score = 0
            for idx in xrange(4):
                yy = y + idx
                xx = x + idx
                score += board[yy][xx]
            counters[score + 4] += 1

    # up-right (and down-left) diagonals
    for y in xrange(3, HEIGHT):
        for x in xrange(WIDTH - 3):
            score = 0
            for idx in xrange(4):
                yy = y - idx
                xx = x + idx
                score += board[yy][xx]
            counters[score + 4] += 1

    if counters[0] != 0:
        return YELLOW_WINS
    elif counters[8] != 0:
        return ORANGE_WINS
    else:
        return (counters[5] + 2 * counters[6] + 5 * counters[7] -
                counters[3] - 2 * counters[2] - 5 * counters[1])


def drop_disk(board, column, color):
    for y in xrange(HEIGHT - 1, -1, -1):
        if board[y][column] == Cell.Barren:
            board[y][column] = color
            return y
    return -1


def load_board(args):
    new_board = [[Cell.Barren] * WIDTH for _ in xrange(HEIGHT)]
    for i, arg in enumerate(args[1:]):
        if arg[0] == 'o' or arg[0] == 'y':
            new_board[ord(arg[1]) - ord('0')][ord(arg[2]) - ord('0')] = \
                Cell.Orange if arg[0] == 'o' else Cell.Yellow
        elif arg == "-debug":
            g.g_debug = True
        elif arg == "-level" and i < (len(args) - 2):
            g.g_max_depth = int(args[i + 2])
    return new_board


def ab_minimax(maximize_or_minimize, color, depth, board):
    if depth == 0:
        return (-1, score_board(board))
    else:
        best_score = -10000000 if maximize_or_minimize else 10000000
        bestMove = -1
        for column in xrange(WIDTH):
            if board[0][column] != Cell.Barren:
                continue
            rowFilled = drop_disk(board, column, color)
            if rowFilled == -1:
                continue
            s = score_board(board)
            if s == (ORANGE_WINS if maximize_or_minimize else YELLOW_WINS):
                bestMove = column
                best_score = s
                board[rowFilled][column] = Cell.Barren
                break

            move, score = ab_minimax(not maximize_or_minimize,
                                     Cell.Yellow if color == Cell.Orange else Cell.Orange,
                                     depth - 1, board)
            board[rowFilled][column] = Cell.Barren
            if depth == g.g_max_depth and g.g_debug:
                print "Depth %d, placing on %d, score:%d" % (depth, column, score)
            if maximize_or_minimize:
                if score >= best_score:
                    best_score = score
                    bestMove = column
            else:
                if score <= best_score:
                    best_score = score
                    bestMove = column

        return (bestMove, best_score)


def main(args):
    board = load_board(args)
    score_orig = score_board(board)

    if score_orig == ORANGE_WINS:
        print "I win."
        return -1
    elif score_orig == YELLOW_WINS:
        print "You win."
        return -1
    else:
        move, score = ab_minimax(True, Cell.Orange, g.g_max_depth, board)

        if move != -1:
            print move
            drop_disk(board, move, Cell.Orange)
            score_orig = score_board(board)
            if score_orig == ORANGE_WINS:
                print "I win."
                return -1
            elif score_orig == YELLOW_WINS:
                print "You win."
                return -1
            else:
                return 0
        else:
            print "No move possible."
            return -1


def target(*_):
    '''Pypy information about entrypoint'''
    return main, None


if __name__ == "__main__":
    exit(main(argv))
