#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */

    int n;
    long sum=0;
    cin>>n;
    int arr[n];

    for(int i=0;i<n;i++){
        cin>>arr[i];
    }

    for(int i=0;i<n;i++){
        for(int j=0;j<arr[i];j++){
            long multThree = (arr[i]-1)/3;
            long multFive = (arr[i]-1)/5;
            long multFifteen = (arr[i]-1)/15;
            sum = (3*(multThree*(multThree+1))/2)+(5*(multFive*(multFive+1))/2)-(15*(multFifteen*(multFifteen+1))/2);
        }
        cout<<sum<<endl;
        sum=0;
    }


    return 0;
}
