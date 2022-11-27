// variables
const rating = document.getElementById('rating');

const ratingsList = document.querySelector('ol');

const thanks = document.getElementById('thanks');

let selected = ''; // the selected rate element

let rate; // the rate itself

// hiding thanks

thanks.style.display = 'none';

// choosing the rate

ratingsList.addEventListener('click', (eve) => {
    const target = eve.target;
    if(selected === ''){ // setting the selected rate for the first time
        target.classList.add('selected');
        selected = eve.target;
        return;
    }else if(selected === eve.target){ // uncheck the rate if clicked while checked
        selected.classList.remove('selected');
        selected = '';
        return;
    }
    // uncheck the old rate and check the new
    selected.classList.remove('selected');
    selected = eve.target;
    selected.classList.add('selected');
    return;
});

// submitting and getting the rate ++ hiding ratings and showing the thanks section
document.getElementById("submit")
.addEventListener('click', () => {
    if(selected === ''){ // validating the submission
        alert('Cannot submit unless you choose a rate');
        return;
    }
    rate = selected.innerHTML;
    // dynamically changing the p depending on the selected rate
    document.getElementById('unique').innerHTML = `You selected ${rate} out of 5` 
    rating.style.display = 'none'; // hiding the first section
    thanks.style.display = 'block'; // showing the second section
});

