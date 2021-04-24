def findSmallestEle(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1,len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    print(smallest_index)
    return smallest_index

def SelectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallestEle(arr)
        newArr.append(arr.pop(smallest))
    return newArr

print(SelectionSort([9,8,6,5]))
