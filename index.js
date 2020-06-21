// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var b = new Array(5);
for(var i=0;i<a.length;i++){
	b[i] = a[i] * 2;
}
console.log(b);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join(' '));
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join('+'));
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join());

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function compare(val1,val2){
      if(val1 < val2){
         return -1;
      }
      else if(val1 > val2){
         return 1;
      }
      else{
         return 0;   
      }
}
console.log(a.sort(compare).reverse()); 


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
console.log(findMost(a));
function findMost(arr){
	var maxEle;
	var maxNum=1;
	var obj=arr.reduce(function (p,k){
		p[k] ? p[k]++ : p[k] = 1;
		if(p[k] > maxNum) {
			maxEle = k;
			maxNum++;
		}
		return p;
	},{});
	return maxEle;
}
