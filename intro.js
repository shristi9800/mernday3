//console.log('hello world');
//var message= 'hello world';
//var age=10;
//age="done";//
//function env(){

//console.log(message);
//var message="hello";
//console.log(message);
//messahe="else";
//console.log(message);
//}
//console.log(message);
//env();

//let message="hello";
//message="else";
//console.log(message)



//const message="hello";

//console.log(message);


//let age='shristi';
//console.log(typeof(age));

//let arr= ['a','b','c','d'];
//arr[0]='abcd';
//console.log(arr);


//let str="12";
//let age=20;
//let ans=age+str;
//let ans=20-(-12);
//console.log(ans);


//let str='12.12';
//let p= parseInt(str);
//let n= Number(str);
//console.log(p,n);


//let a='12';
//let b=12;
//if(a==b)
//{
  //console.log('yes');
//}
 // else
//{
    //console.log('no');


 // }
 // if(a===b)
//{
  //console.log('yes');
//}
  //else
  //{
    //console.log('no');
//}

//const str =' shristi';
//const uname='my name is:';
//const ans= uname +str;
//console.log(ans);


//const str =' shristi';
//const uname='my name is:';
//const ans= `${uname} ${str}`;
//console.log(ans);



//function print(str='nothing is here'){
  //console.log(str);
//}
//print();

// function sum(a,b)
// {
//   console.log(a+b);
// }
// sum(10);

//function declaration
// function print(){
// console.log('--');
// }
// //function assignment declaration
// const a= function print(){
//   console.log('--');
// }

// //anonymous function assignment
// const b= function print(){--
// }

// //arrow function assignment
// let c = ()=> {
//   console.log('--');
// }
// print ();
// a();
// b();
// c();




// const obj=new Object();
// obj[1]='one';
// obj[12]='twelve';
// obj[name]='shristi';
// console.log(obj);

// const obj={
//   1: 'one',
//   12: 'twelve',
//   'name':'shristi',
// };
// console.log(obj);


// const obj={
//   1: 'one',
//  firstname: 'shristi',
//  lastname: 'bhatt',
//   'age':20,
//   'address': 'delhi',
// };
// const fulname1=obj.firstname+obj.lastname;

// console.log(fullname1);

const obj={
  1: 'one',
 firstname: 'shristi',
 lastname: 'bhatt',
  'age':20,
  'address': 'delhi',
};

const x= prompt('pls tell the property u want to know');
console.log(obj[x]);