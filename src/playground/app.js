class IndecisionApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: this.props.options
        };
    } 

    componentDidMount() {
        try {
         const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options) {
            this.setState( () => ({options}));   
        }
        }catch(e) {

        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions() {
        this.setState( () => ({options: []}));
    }
    
    handlePick() {
        const option = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[option])
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add'
        }else if (this.state.options.indexOf(option) > -1) {
            return 'This option alredy exists'
        }
        this.setState( (prevState) => ({options: prevState.options.concat(option)}))
    }

    handleDeleteOption(optionText) {
        this.setState((prevState) => ({options: prevState.options.filter( (option) => option !== optionText)}));
    }

    render() {

        const subtitle = 'Put your life in the hands of a computer';

        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleAddOption={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = { options: []}

const Header = (props) => {  
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = {title: 'Indecision'};

const Action = (props) => {
    
    return (
        <div>
            <button 
            disabled={!props.hasOptions} 
            onClick={props.handlePick}> 
            What should I do? 
            </button>
        </div>
    );
}

const Options = (props) => {
        
    return(
        <div>
            <button 
            onClick={
                props.handleAddOption}> 
            Remove All 
            </button>
            {
                
                props.options.map( (option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)
            }
            
        </div>
    );
}

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button onClick={ () => {props.handleDeleteOption(props.optionText)}}> Remove </button>
        </div>
    );
}

class AddOption extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        this.setState( () => ({error}))
    }
    
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button> Add Option </button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

// ReactDOM.render(<IndecisionApp /> , document.getElementById('app'))


class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const str = localStorage.getItem('count');
        console.log(str);
        const count = parseInt(str);
        this.setState( () => ({count}));
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('count',this.state.count);
    }

    handleAddOne() {
        this.setState( (prevState) => ({count: prevState.count + 1}));
    }

    handleMinusOne() {
        this.setState( (prevState) => ({count: prevState.count - 1}));
    }

    handleReset() {
        this.setState(() => ({count: 0}));
    }

    render() {
        return(
            <div>
                <h1> Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
};

ReactDOM.render(<Counter count={25}/>, document.getElementById('app'));

// class VisibilityToggle extends React.Component {

//     constructor(props) {
//         super(props);
//         this.handleVisible = this.handleVisible.bind(this);
//         this.state = {
//             visible : false
//         }
//     }
    
//     handleVisible() {
//         this.setState( (prevState) => ({ visible: !prevState.visible}));
//     }

//     render() {
//         return(
//             <div>
//                 <h1> Visibility Toggle </h1>
//                 <button onClick={this.handleVisible}> {this.state.visible ? 'Hide Details' : 'Show Details'} </button>
//                 { this.state.visible && (<p>Here are some details you can see now!</p>)}
//             </div>
//         );
//     }
// };

// ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))