#include<iostream>
class Deletion
{
private: int a[100],n,ele,loc;
public: void input();
        void compute();
        void output();
};
void Deletion::input(){
  std::cout<<"How many elements"<<std::endl;
  std::cin>>n;
  std::cout<<"Enter the elements"<<std::endl;
  for(int i=0;i<n;i++)
  {
    std::cin>>a[i];
  }
  std::cout<<"Enter the position between o to "<<n-1;
  std::cin>>loc;
}
void Deletion::compute(){
  if(loc>n-1)
  {
    std::cout<<loc<<"is an invalid position"<<std::endl;
    exit(0);
  }
  else{
    ele=a[loc];
    for(int i=loc;i<n;i++)
    {
      a[i]=a[i+1];
      n=n-1;
    }
    std::cout<<"the element"<<ele<<"at position"<<loc<<"is removed successfully"<<std::endl;
  }
}
void Deletion::output()
{
  std::cout<<"the array after deletion is"<<std::endl;
  for(int i=0;i<n;i++)
  std::cout<<a[i]<<" ";
}
int main()
{
  Deletion d;
  d.input();
  d.compute();
  d.output();
}
