let container = document.querySelector('.container')

function fetchGlobal() {
    fetch("https://disease.sh/v3/covid-19/all")
        .then (res => res.json())
        .then (data => renderGlobal(data))
}

function renderGlobal(data) {
    let fragment = document.createDocumentFragment()
    let globalContainer = document.createElement('div');
    console.log(data)
    globalContainer.insertAdjacentHTML('afterbegin', `
            <div class="global-cards">
            <div class="global-card">
                <div class="global-card-top">
                    <p>Total Cases</p>
                    <img src="./images/total-cases-img.svg" alt="">
                </div>
                <p class="amount">${data.cases}</p>
                <p class="last-updated">last updated: ${data.updated}</p>
            </div>

            <div class="global-card vaccinations">
                <div class="global-card-top">
                    <p>Total Vaccinations</p>
                    <img src="./images/./total-vaccinations-img.svg" alt="">
                </div>
                <p class="amount">${data.tests}</p>
                <p class="last-updated">last updated: ${data.updated}</p>
            </div>

            <div class="global-card new-cases">
                <div class="global-card-top">
                    <p>New Cases</p>
                    <img src="./images/new-cases-img.svg" alt="">
                </div>
                <p class="amount">${data.todayCases}</p>
                <p class="last-updated">last updated: ${data.updated}</p>
            </div>

            <div class="global-card active-cases">
                <div class="global-card-top">
                    <p class="sub-title">Active Cases</p>
                    <img src="./images/active-cases.svg" alt="">
                </div>
                <p class="amount">${data.active}</p>
                <p class="last-updated">last updated: ${data.updated}</p>
            </div>
        </div>    
    `)
    fragment.appendChild(globalContainer)
    container.appendChild(fragment)   
}
fetchGlobal()