import React from 'react';
import { connect } from 'react-redux'

export class LoginPage extends React.Component {

    state = {
        error: undefined
    }

    authUser = () => {
        console.log('paco')
    }
    
    render() {
        return(
            <div>
            <div className='loginContainer'> 
                <img src='./images/logo.png' className='loginImage'/>
                <h1 className='loginTitle'> Iniciar sesión </h1>
                { !!!this.state.error ? (
                <div></div>
                ) : (
                <div className='loginError'>
                    <p> Usuario o contraseña incorrectos</p>
                </div>
                )}
                
                <div className='loginPanel'> 
                    <div className='loginForm'>
                        <p className='loginText'> Usuario</p>
                        <input className='loginInput' type='text' />
                        <p className='loginText'> Contraseña </p>
                        <input className='loginInput'  type='password' />
                        <button onClick={this.authUser} className='loginButton'> Acceder </button> 
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

// export default connect(mapStateToProps)(LoginPage)