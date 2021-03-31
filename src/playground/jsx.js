// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'This some info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    render();
}


const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    
};

const render = () => {
    const template = (
        <div> 
            <h1> {app.title} </h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {(app.options.length > 0) ? <p>Here are your options</p> : <p>No options</p>}
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={() => {app.options = []; render();}}> Remove All </button>
            <ol>
                {
                    app.options.map( (option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button> Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

}

const appRoot = document.getElementById("app");

render();

// let alredyPress = false;

// const rerender = () => {
//     const template = (
//         <div> 
//             <h1> Visibility Toggle </h1>
//             <button onClick={ () => {alredyPress = !alredyPress; rerender();}}>{alredyPress ? 'Hide details' : 'Show details'}</button>
//             {alredyPress ? <p> Hey. These are some details you can now see! </p> : undefined}
//         </div>
//     );

//     ReactDOM.render(template, appRoot)
// };

// rerender();

// let count = 0;



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1> Count: {count} </h1>
//             <button onClick={() => {console.log('addOne'); count++; renderCounterApp();}}> +1 </button>
//             <button onClick={() => {console.log('minusOne'); count--; renderCounterApp();}}> -1 </button>
//             <button onClick={() => {console.log('reset'); count = 0; renderCounterApp();}}> reset </button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// const multiplier = {
//     numbers: [0,1,2,3,4,5,6,7,8,9],
//     multiplieBy: 7,
//     multiply() {
//         return this.numbers.map( (number) => this.multiplieBy * number);
//     }
// }
// console.log(multiplier.multiply)

//renderCounterApp();