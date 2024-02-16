function hideElementById(idRemove){
    const element = document.getElementById(idRemove)
    element.classList.add('hidden')
}
function showElementById(idShow){
    const element = document.getElementById(idShow)
    element.classList.remove('hidden')
}
function getAlphabet() {
    const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetArray = alphabetString.split("");

    const ramdomNumber = Math.random()*25;
    const ramdomIndex = Math.round(ramdomNumber);

    const ramdamLetter = alphabetArray[ramdomIndex];
    return ramdamLetter;
}
function addKeyWordBg(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('bg-[#FFA500]')
}
function removeKeyWordBg(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('bg-[#FFA500]')
}
function convertInt(ID){
     const getElementID = document.getElementById(ID);
     const getElementText = getElementID.innerText;
     const getElementNumber = parseInt(getElementText);

     return getElementNumber;
}
function setValue(ID, value){
    const getID = document.getElementById(ID);
    getID.innerText = value;
}

