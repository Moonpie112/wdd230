const input = document.querySelector ('#favchap');
const button = document.querySelector('button'); 
const list = document.querySelector('#list');

function displayList(item){
    const li = document.createElement('li');
         const deleteButton = document.createElement('button');

         li.textContent = input.value;
         deleteButton.textContent = '❌'

         li.append(deleteButton);

         list.append(li);

         deleteButton.addEventListener('click', () => {
             list.removeChild(li);
             input.focus();
         });
         input.value = '';
};


function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1); //removes the last character (the x) from the chapter name

    chaptersArray = chaptersArray.filter((item) => item !== chapter); //returns everything except the chapter to be removed

    setChapterList(); //updates the LocalStorage
};

button.addEventListener('click', () => {
    if (input.value.trim() == '')  { //checks if it's blank
        input.focus() // If it is, it activates the text
    } else {
        displayList(input.value); 
        chaptersArray.push(input.value); //pushes the input (the chapter) to the array
        setChapterList(); //updates the LocalStorage with the new array
        input.value = '';
        input.focus()
    }
});

// button.addEventListener('click', () => {
//     if (input.value.trim() == '') { 
//         input.focus()
//     } else {
//         
//     }
// });

// Storing the data

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});





