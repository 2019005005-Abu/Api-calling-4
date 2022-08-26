//4 ways to call api-XMLHttpRequest,fetch,axios,jquery
//add jquery library cdn
//ajax -asynchronous javascript and xml
console.clear();
const makeRequest=async(url)=>{
    try{
        const result= await $.ajax({
            url:url,
           })
            return result; 
    }catch(err){
        console.log(err);
    }
 
}
const getData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>{
        console.log(response);
    })
}
getData();

//createData
const makeRequest11=async(url,method,data)=>{
    try{
        const result= await $.ajax({
            url:url,
            method:method,
            data:data,
           })
            return result; 
    }catch(err){
        console.log(err);
    }
 
}
//
const createData=()=>{
    makeRequest11('https://jsonplaceholder.typicode.com/posts/1',"POST",{
        title:"foo",
        body:"bar",
        userId:1,
    })
    .then((response)=>{
        console.log(response);
    })
}
createData();

//update
const MakeRequest2= async (url,method,data)=>{
   try{
    const result=await $.ajax({
       url:url,
       method:method,
       data:data,
    })
  return result;
   }catch(err){
    console.log(err);
   }
}
const updateData=()=>{
    makeRequest11('https://jsonplaceholder.typicode.com/posts/1',"PUT",{
        title:"Abu Al Shahriar Rifat"
    }).then((err)=>{
        console.log(err);
    })
}
updateData();

//delete
const MakeRequest3= async(url,method,data)=>{
    try{
        const result=await $.ajax({
            url:url,
            method:method,
            url:url,
        })
     return result;
    }catch(err){
        console.log(err)
    }
}

 const DeleteData=()=>{
    MakeRequest3('https://jsonplaceholder.typicode.com/posts/1',"DELETE",{
     title:"foo",

    })
 }

 DeleteData();