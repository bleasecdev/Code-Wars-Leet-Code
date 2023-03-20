# Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

# Valid inputs examples:
# Examples of valid inputs:
# 1.2.3.4
# 123.45.67.89
# Invalid input examples:
# 1.2.3
# 1.2.3.4.5
# 123.456.78.90
# 123.045.067.089

def is_valid_IP(strng):
    count = 0
    answer = False
    output = []
    if strng == "0.0.0.0":
        return True
    if strng == '':
        return False
    if strng[strng.index('.') + 1] == '0':
        return False
    for char in strng:
        if char == ' ':
            answer = False
            break
        if char == '.':
            count+=1
    if count == 3:
        array = strng.split('.')
        for num in array:
            if num.isalpha() == True:
                answer = False
                break
            else:
                output.append(int(num))
    for value in output:
        count - count
        count+=1
        if value not in range(0,256):
            answer = False
        if count == len(output):
            answer = True
    return answer

