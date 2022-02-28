const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText} `

    fetch(url)
        .then(res => res.json())
        .then(dataList => displaySearchResult(dataList.data));
}
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    data.forEach(slug => {
        // console.log(slug);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div  class="card h-100">
                <img src="${slug.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h3 class="card-title">${slug.phone_name}</h3>
                <h6>Brand: ${slug.brand}</h6>
                <button onclick="loadMobileDetail('${slug.slug}')" >Details</button>
                 </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}
const loadMobileDetail = slugId => {
    // console.log(slugId)
    const url = `https://openapi.programming-hero.com/api/phone/${slugId}`;
    fetch(url)
        .then(res => res.json())
        .then(dataList => allMobileDetail(dataList.data));
}
const allMobileDetail = slug => {
    console.log(slug);
    const mobileDetails = document.getElementById('mobile-details');
    mobileDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${slug.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h3 class="card-title">${slug.name}</h3>
        <h5>${slug.releaseDate}</h5>
        <h6>WLAN= ${slug.others.WLAN}</h6>
        <h6>Radio= ${slug.others.Radio}</h6>
        <h6>USB= ${slug.others.USB}</h6>
        <h6>GPS= ${slug.others.GPS}</h6>
        <h6>NFC= ${slug.others.NFC}</h6>
        <h6>Memory= ${slug.mainFeatures.memory}</h6>
        <h6>ChipSet= ${slug.mainFeatures.chipSet}</h6>
        <h6>Storage= ${slug.storage}</h6>
        <h6>Bluetooth= ${slug.others.Bluetooth}</h6>
        <h6>Display Size= ${slug.mainFeatures.displaySize}</h6>
      </div>
    `;
    mobileDetails.appendChild(div);
}
