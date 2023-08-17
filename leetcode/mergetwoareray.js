let data = [2,1,3];
let data1 = [4,1,2,0];

var mergeTwoLists = function(list1, list2) {
    
    for(let i=0;i<=list2.length-1;i++){
        list1.push(list2[i])
      }  
    for(let i=0; i<=list1.length-1;i++){
        if(list1[i]>list1[i+1]){
            let temp;
            temp=list1[i];
            list1[i]=list1[i+1]
            list1[i+1]=temp;
            i=-1
        }
    }
    return list1
   };

console.log(mergeTwoLists(data,data1))