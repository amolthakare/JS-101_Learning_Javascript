var curr_num=0;
var prev_sum=0;
var sum=0;
var N=4;

while(curr_num<=N){
  prev_sum=sum;
  sum=prev_sum+curr_num;
  curr_num++;
}
console.log(sum);