#Search Using Boolean Variable
#starts with found as false then goes on comparing it with variable
#if value is ok then found value is True
found = False
print("Before",found)
for value in [9,14,12,3,74,15] :
    if value == 3 :
        found = True
    print(found,value)
print('After',found)