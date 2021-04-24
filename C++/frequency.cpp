#include<iostream>

class frequency{
  private: int a[100],n,ele,count;
  public: void input();
          void compute();
          void output();
};

void frequency::input(){
  std::cout<<"How many elements?"<<std::endl;
  std::cin>>n;
  std::cout<<"Enter the Array Elements"<<std::endl;
  for(int i=0;i<n;i++){
    std::cin>>a[i];
  }
  std::cout<<"Enter the element to be searched"<<std::endl;
  std::cin>>ele;
}
void frequency::compute(){
  count=0;
  for(int i=0;i<n;i++){
    if(a[i]==ele)
    {
      count++;
    }
  }
}
void frequency::output(){
  if(count>0)
  std::cout<<ele<<" occurs "<<count<<" times"<<std::endl;
  else
  std::cout<<ele<<" does not occur"<<std::endl;
}
int main()
{
  frequency f;
  f.input();
  f.compute();
  f.output();
  return 0;
}
