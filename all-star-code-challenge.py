def str_count(strng, letter):
    # Your code here ;)
    count = 0
    for char in strng:
        if char == letter:
            count+=1
    return count