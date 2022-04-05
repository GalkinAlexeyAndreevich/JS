export function createAppTitle(title){
    const appTitle = document.createElement('h1');

    appTitle.innerHTML = title;
    appTitle.style.textAlign = "center"

    return appTitle;
}