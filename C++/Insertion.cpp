#include<iostream>
class Insertion
{
private: int n,a[100],ele,loc;
public: void input();
        void compute();
        void output();
};
void Insertion::input(){
  std::cout<<"How many elements ?:"<<std::endl;
  std::cin>>n;
  std::cout<<"Enter the elements"<<std::endl;
  for(int i=0;i<n;i++)
    std::cin>>a[i];
  std::cout<<"Enter the position between 0 to "<<n-1<<std::endl;
  std::cin>>loc;
  std::cout<<"Enter the element to be inserted"<<std::endl;
  std::cin>>ele;
}
void Insertion::compute(){
  if(loc>n){
    std::cout<<loc<<"is an invalid position"<<std::endl;
    exit(0);
  }
  else{
    for(int i=n-1;i>=loc;i--){
      a[i+1]=a[i];}
      a[loc]=ele;
    
  }
}
void Insertion ::output(){
  std::cout<<"the array after inserting an element"<<std::endl;
  for(int i=0;i<=n;i++)
  std::cout<<a[i]<<" "<<std::endl;
}
int main()
{
  Insertion i;
  i.input();
  i.compute();
  i.output();
  return 0;
}
