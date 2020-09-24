window.onload = function(){

    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
                    'v','w','x','y','z' ]
    
    var cities = [ 'hyderabad' , 'delhi' , 'kolkata', 'mumbai', 'chennai', 'jaipur',
                 'lucknow', 'ahmedabad', 'varanasi', 'ranchi', 'guwahati', 'pune', 'noida' ]
    
    var lives = 7
    showButtons()
    

    
    var word = []

    var selectedWord = selectWord()
    // console.log(selectedWord);

    createQstn()

    showStatus()

    //Show Button
    function showButtons(){
        // let button = document.getElementById('button')
        // let letter = document.getElementById('letter')
        var buttonsRow = document.getElementById('buttons-row')
        buttonsRow.innerHTML = null

        for(i=0; i< letters.length; i++){
            var button = document.createElement('button')
            button.classList.add('button', 'btn', 'btn-light', 'mx-1', 'my-1')
            button.id = 'letterBtn'
            
            
            let letter = document.createElement('div')
            letter.className = 'letter'
            letter.innerHTML = letters[i]

            button.appendChild(letter)
            button.value = letters[i]
            buttonsRow.appendChild(button)
            check(button,i);
        }

    }

    //Play
    function check(button,i){
        button.onclick = function(){
            var flag = 0
            // console.log('Clicked');
            // console.log(letters[i]);
            if(lives > 0){
                for(j = 0; j< selectedWord.length; j++){

                    if(letters[i] == selectedWord[j])
                    {
                        word[j] = letters[i]
                        flag = 1
                        createQstn()
                        
                    }
    
                }
            }
            if(flag == 0){
                lives = lives-1;
                showStatus()
            }
            button.setAttribute('disabled','true')
            
            // console.log(word);
            
        }
    }

    //Select random word
    function selectWord(){
        const i = Math.floor(Math.random()*cities.length)
        word = []
        for(j = 0;j < cities[i].length; j++){
            word.push('_')
        }
        
        return cities[i]
    }

    function createQstn(){
        const qstn = document.getElementById('qstn')
        qstn.innerHTML = null
        for(i=0;i<word.length;i++){
            qstn.innerHTML = qstn.innerHTML + ' ' + word[i]
        }
    }

    function showStatus(){
        var status = document.getElementById('status')
        if(lives > 0){
            status.innerHTML = 'You have ' + lives + ' lives left'
        }
        else{
            status.innerHTML = 'Game Over'
        }
    }

    //Reset
    const resetbtn = document.getElementById('reset')

    resetbtn.addEventListener('click',() => {
        selectedWord = selectWord()
        showButtons()
        // console.log(selectedWord);
        createQstn()
        lives = 7
        showStatus()

    })

}