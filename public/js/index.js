feather.replace()

const elementID = (id) => {
    return document.getElementById(id)
}

function dark() {
    elementID('dark').classList.add('show-dark')
    document.body.setAttribute('style', 'overflow-y: hidden;')
}

function nDark() {
    elementID('dark').classList.remove('show-dark')
    document.body.setAttribute('style', 'overflow-y: auto;')
    nSearch()
    nCar()
}

function car() {
    dark()
    elementID('car').classList.add('show-car')
}

function nCar() {
    elementID('car').classList.remove('show-car')
    nDark()
}

function search() {
    dark()
    elementID('search').classList.add('show-search')
}

function nSearch() {
    elementID('search').classList.remove('show-search')
    nDark()
}