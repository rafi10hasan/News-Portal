//category section loaded

 try{
    const categoriesLoaded= () =>{
        const url='https://openapi.programming-hero.com/api/news/categories';
        fetch(url)
       .then(res => res.json())
       .then(data => displayCategory(data.data.news_category))
    }
    
    const displayCategory=(categories) =>{
        console.log(categories)
        const ulContainer=document.getElementById('ul-container');
    
        for(const category of categories){
          console.log(category)
           const List=document.createElement('li');
           List.classList.add('nav-item')
         List.innerHTML=`
        
         <li><a onclick="showNewsPage(${category.category_id})" class="nav-link text-black" href="#">${category.category_name}</a></li>
    
         
         `
      ulContainer.appendChild(List)
      
        }
        
     }

     categoriesLoaded();   
    
 }
 catch(error){
    console.log(error);
 }
 
 
 const showNewsPage=(news_Id)=>{
    const url=`https://openapi.programming-hero.com/api/news/category/${news_Id}`;
    fetch(url)
   .then(res => res.json())
   .then(data =>(data))

}




 