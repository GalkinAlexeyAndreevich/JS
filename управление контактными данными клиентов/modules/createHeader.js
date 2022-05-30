export function createHeader(){
    const header = document.createElement('header')
    const divLogoInput = document.createElement('div')
    const logoLink = document.createElement('a')
    const logo = document.createElement('img')
    const divInput = document.createElement('div')
    const input = document.createElement('input')

    divLogoInput.classList.add('divLogoInput')

    logoLink.href = '#'
    logoLink.classList.add('header__logo')
    logo.src = 'img/logo.svg'
    logoLink.append(logo)

    divInput.classList.add('div__header__input')
    input.classList.add('input')
    input.classList.add('header__input')
    input.placeholder = 'Введите запрос'
    divInput.append(input)

    divLogoInput.append(logoLink,divInput)
    header.append(divLogoInput)

    return header
}