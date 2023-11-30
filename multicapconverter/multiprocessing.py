class multiprocessing:  # Fake multiprocessing, not multiprocessing at all
    def __init__(self, target, args):
        self.target = target
        self.args = args

    def start(self):
        self.target(*self.args)

    def join(self):
        pass

__pragma__ ('kwargs')
@staticmethod
def Process(target, args):
    return multiprocessing(target, args)
__pragma__ ('nokwargs')