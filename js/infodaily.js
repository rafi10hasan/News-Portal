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
        
         <li><a onclick="loadNewsPage('${category.category_id}')" class="nav-link text-black" href="#">${category.category_name}</a></li>
    
         
         `
      ulContainer.appendChild(List)
      
        }
        
     }

     categoriesLoaded();   
    
 }
 catch(error){
    console.log(error);
 }
 
 
 const loadNewsPage=(news_id)=>{
    const url=`https://openapi.programming-hero.com/api/news/category/${news_id}`;
    toggleSpinner(true)
    fetch(url)
   .then(res => res.json())
   .then(data =>displayNewsPage(data.data))

}


const displayNewsPage=(newsData)=>{
        const newsDetailsContainer = document.getElementById('display-news');
        newsDetailsContainer.innerHTML = ''
        
        newsData.forEach(news => {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="row g-0 mb-5 mt-5 p-3 border-0 bg-light shadow-sm">
                        <div class="col-md-4 p-3">
                            <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8 mt-4">
                            <div class="card-body">
                                <h5 class="card-title fw-semibold">${news.title}</h5>
                                <p class="card-text">${news.details.slice(0,550)}...</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex">
                                        <img class="pe-2 img-fluid " style="height: 50px; width:50px;" src="${news.image_url}" alt="">
                                        <div>
                                        <h6>${news.author.name}</h6>
                                        <h6>${news.author.published_date}</h6>
                                        </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center">
                                       <i class="fa-solid fa-eye"></i>
                                            <h6>${news.total_view}</h6>
                                        </div>
                                        <div class="d-flex">
                                           <i class="fa-solid fa-star"></i>
                                           <i class="fa-solid fa-star"></i>
                                           <i class="fa-solid fa-star"></i>
                                           <i class="fa-solid fa-star"></i>
                                           <i class="fa-solid fa-star"></i>
                                           
                                        </div>
                                        <div>
                                        <button onclick="loadNewsDetails"('${news._id}')" href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">news Details</button>
                                        </div>

                                    </div>
    
                            </div>
                        </div>
                    </div>
            
            `;
            newsDetailsContainer.appendChild(div);

           
        })
        toggleSpinner(false)
        const itemFounded=document.getElementById('item-founded');
        itemFounded.innerHTML=`
         <p>${newsData.length} items found for category</p>
        `
    }


    const toggleSpinner = isLoading => {
        const loaderSection = document.getElementById('loader');
        if(isLoading){
            loaderSection.classList.remove('d-none')
        }
        else{
            loaderSection.classList.add('d-none');
        }
    }

    const loadNewsDetails=(details_id)=> {

        console.log(details_id)
    //     const url=`https://openapi.programming-hero.com/api/news/${details_id}`;
    //     fetch(url)
    //    .then(res => res.json())
    //    .then(data =>displayNewsDetails(data.data))
    
    }

 

loadNewsPage('01')


 