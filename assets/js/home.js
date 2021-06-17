var categoryColor = document.getElementsByClassName('show-category');

var categories = ['work', 'personal', 'school', 'cleaning', 'other'];
var color = ['#a6179a', '#0d7fbd', '#077275', '#2d8024', 'orange'];

for(let i=0; i<categoryColor.length; i++){
    let text = (categoryColor[i].innerText).trim().toLowerCase();
    let j = 0;
    for(; j<categories.length; j++){
        if(categories[j] == text)
            break;
    }
    categoryColor[i].style.backgroundColor = color[j];
}