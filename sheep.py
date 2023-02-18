#Consider an array/list of sheep where some sheep may be 
# missing from their place. We need a function that counts the 
# number of sheep present in the array (true means present).

def count_sheeps(sheep):
  # TODO May the force be with you
    count = 0
    for _ in sheep:
        if _ == True:
            count+=1
    return count 

print(count_sheeps([True,  True,  True,  False,
  True,  True,  True,  True ,
  True,  False, True,  False,
  True,  False, False, True ,
  True,  True,  True,  True ,
  False, False, True,  True]))