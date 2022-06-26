const renderContainer = document.querySelector('.countries-cards')
const mainContainer = document.querySelector('.container')

function fetchCountries() {
    fetch("https://disease.sh/v3/covid-19/countries")
        .then (response => response.json())
        .then (result => renderCountries(result))
}

function renderCountries(infos) {
    
    const countriesContainer = document.createElement('div')
    countriesContainer.classList.add('countries-container')
    const countriesFragment = document.createDocumentFragment()

    infos.forEach(info => {
        console.log(info)
        countriesContainer.insertAdjacentHTML('afterbegin', `
                <div class="countries-cards">
                <div class="countries-card">
                    <h6 class="title">United States of America</h6>
                    <div class="flag_total-cases">
                        <img class="flag" src=${info.countryInfo.flag} alt="">
                        <div class="total-cases">
                            <p class="countries-total-cases">Total Cases</p>
                            <div class="total-cases-img">
                                <img src="./images/vaccinations-img-2.svg" alt="">
                                <p class="countries-amount">${info.cases}</p>
                            </div>
                        </div>
                    </div>
                    <div class="countries-card-main">
                        <div class="main-top">
                            <div class="main-vaccinations">
                                <img src="./images/heart_check.svg" alt="">
                                <div class="vaccinations-text">
                                    <p>Total Vaccinations</p>
                                    <p class="amount">${info.tests}</p>
                                </div>
                            </div> 
                            <div class="main-vaccinations">
                                <img src="./images/active-cases.svg" alt="">
                                <div class="vaccinations-text">
                                    <p>Active Cases</p>
                                    <p class="amount">${info.active}</p>
                                </div>
                            </div>   
                        </div>
                        <div class="main-bottom">
                            <div class="main-vaccinations">
                                <img src="./images/new-cases-img.svg" alt="">
                                <div class="vaccinations-text">
                                    <p>New Cases</p>
                                    <p class="amount">${info.todayCases}</p>
                                </div>
                            </div> 
                            <div class="main-vaccinations">
                                <img class="coffin-img" src="./images/coffin.svg" alt="">
                                <div class="vaccinations-text">
                                    <p>Total Death</p>
                                    <p class="amount">${info.deaths}</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <p class="countries-card-update">last updated: ${info.updated}</p>
                </div>
            </div>
        `)
        countriesFragment.appendChild(countriesContainer)
    });
    // renderContainer.appendChild(countriesFragment)
    mainContainer.appendChild(countriesFragment)
}
fetchCountries()