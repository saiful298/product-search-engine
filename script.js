const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText} `

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
}
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    data.forEach(slug => {
        console.log(slug);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadSlugDetail(${slug.slug})" class="card h-100">
                <img src="${slug.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h3 class="card-title">${slug.phone_name}</h3>
                <h6>Brand: ${slug.brand}</h6>
                <button  >Details</button>
                 </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}
const loadSlugDetail = slug => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data));
}
