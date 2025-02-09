from BinaryHeap import BinHeap

class HuffmanNode(object):
    def __init__(self, left=None, right=None, root=None):
        self.left = left
        self.right = right
        self.root = root     # Why?  Not needed for anything.
    def children(self):
        return((self.left, self.right))

freq = [
    (8.167, 'a'), (1.492, 'b'), (2.782, 'c'), (4.253, 'd'),
    (12.702, 'e'),(2.228, 'f'), (2.015, 'g'), (6.094, 'h'),
    (6.966, 'i'), (0.153, 'j'), (0.747, 'k'), (4.025, 'l'),
    (2.406, 'm'), (6.749, 'n'), (7.507, 'o'), (1.929, 'p'), 
    (0.095, 'q'), (5.987, 'r'), (6.327, 's'), (9.056, 't'), 
    (2.758, 'u'), (1.037, 'v'), (2.365, 'w'), (0.150, 'x'),
    (1.974, 'y'), (0.074, 'z') ]

def create_tree(frequencies):
    p = BinHeap()
    for value in frequencies:    # 1. Create a leaf node for each symbol
        p.insert(value)             #    and add it to the priority queue
    while p.qsize() > 1:         # 2. While there is more than one node
        l, r = p.delMin(), p.delMin()  # 2a. remove two highest nodes
        node = HuffmanNode(l[1], r[1]) # 2b. create internal node with children
        p.insert((l[0]+r[0], node)) # 2c. add new node to queue      
    return p.delMin()               # 3. tree is complete - return root node




def walk_tree(node, prefix):
    if isinstance(node, HuffmanNode):
        walk_tree(node.left, "0" + prefix +  "")
        walk_tree(node.right, "1"+ prefix + "" )
    else:
        print "%s %s"%(node, prefix)
    
    


from heapq import heappush, heappop, heapify
from collections import defaultdict
 
def encode(symb2freq):
    """Huffman encode the given dict mapping symbols to weights"""
    heap = [[wt, [sym, ""]] for sym, wt in symb2freq.items()]
    heapify(heap)
    while len(heap) > 1:
        lo = heappop(heap)
        hi = heappop(heap)
        for pair in lo[1:]:
            pair[1] = '0' + pair[1]
        for pair in hi[1:]:
            pair[1] = '1' + pair[1]
        heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])
    return sorted(heappop(heap)[1:], key=lambda p: (len(p[-1]), p))
 
txt = "yashaswita"
symb2freq = defaultdict(int)
for ch in txt:
    symb2freq[ch] += 1
# in Python 3.1+:
# symb2freq = collections.Counter(txt)
huff = encode(symb2freq)
print "Symbol\tWeight\tHuffman Code"
for p in huff:
    print "%s\t%s\t%s" % (p[0], symb2freq[p[0]], p[1])
   
   
frequecies = list((y,x) for x,y in symb2freq.iteritems())
print "-------"
print(frequecies)
walk_tree(create_tree(frequecies)[1], "")
print "--------"
    
    
from collections import Counter

#####################################################################

class Node(object):
  def __init__(self, pairs, frequency):
    self.pairs = pairs
    self.frequency = frequency

  def __repr__(self):
    return repr(self.pairs) + ", " + repr(self.frequency)

  def merge(self, other):
    total_frequency = self.frequency + other.frequency
    for p in self.pairs:
      p[1] = "1" + p[1]
    for p in other.pairs:
      p[1] = "0" + p[1]
    new_pairs = self.pairs + other.pairs
    return Node(new_pairs, total_frequency)

#####################################################################

def huffman_codes(s):
  frequency_table = Counter(s)
  initial_table = []
  for k, v in frequency_table.items():
    initial_table.append([k, v])
  initial_table = sorted(initial_table, key = lambda p : p[1])
  # print(initial_table)
  table = []
  for entry in initial_table:
    ch = entry[0]
    freq = entry[1]
    table.append(Node([[ch, ""]], freq))
  # print(table)
  while len(table) > 1:
    first_node = table.pop(0)
    second_node = table.pop(0)
    new_node = first_node.merge(second_node)
    # print new_node
    table.append(new_node)
    table = sorted(table, key = lambda n : n.frequency)
  # print(table)
  return dict(map(lambda p: (p[0], p[1]), table[0].pairs))

#####################################################################

print(huffman_codes('yashaswita'))


