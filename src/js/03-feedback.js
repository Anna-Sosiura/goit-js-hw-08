import throttle from "lodash.throttle";
const formData={}
const refs={
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onInput, 500));
function onInput(e) {
    // trot();
    formData[e.target.name]=e.target.value;
    console.log(formData);
    localStorage.setItem('feedback-form-state',JSON.stringify(formData));
};

populateTextarea()

function onFormSubmit(evt){
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem('feedback-form-state')
}

function populateTextarea(){
    const savedInput= localStorage.getItem('feedback-form-state');
    if (savedInput){
        // console.log(savedInput);
        // console.log(JSON.parse(savedInput));
        const saveValue=(JSON.parse(savedInput))
        refs.email.value=saveValue.email;
        refs.textarea.value=saveValue.message;
    }
}