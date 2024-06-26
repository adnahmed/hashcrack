import hash_info
import hash_namer
import hashes

nth = hash_namer.Name_That_Hash(hashes.prototypes)
popular = hash_info.HashInformation().popular


class HashType:
    """
    Every hash given to our program will be associated with one object.
    This object contains the possible type of hash
    and provides ways to print that hash.
    """

    def __init__(self, chash: str):
        self.chash = chash
        self.prototypes = nth.identify(chash)
        self.prototypes = self.sort_by_popular()
        self.hash_obj = {self.chash: self.prototypes}

    def get_prototypes(self):
        return self.prototypes

    def sort_by_popular(self):
        """
        Sorts the list by popular + everything else.
        We do this using the self.popular set. Sets have O(1) lookup, so it's cheap.
        If one named_tuple is in the popular set, we add it to the populars list and remove it from prototypes.

        We then return populars list + prototypes.
        """

        to_ret = []
        populars = []
        for i in self.prototypes:
            if i in popular:
                populars.append(i)
            else:
                to_ret.append(i)
        return populars + to_ret
