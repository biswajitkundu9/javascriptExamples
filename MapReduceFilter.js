let marks=[10,3,50,90]
let sum=0;


console.log(marks.filter(mark=>mark%2==0).map(mark=>mark*2).reduce((sum,totalMarks)=>sum+totalMarks,0));