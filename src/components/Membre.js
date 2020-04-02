import React, { Fragment } from 'react';

//component stateless, a savoir un composant qui ne dispose pas d'etat
//possibilite d'ajouter une fonction en JS au sein des {}

// const Membre = () => {
//     const name = 'laurent';

//     return (
//     <h2>Membre de ma famille: {name.toUpperCase()}</h2>
//     )
// }

// export default Membre;


//explication concernant l'utilisation des props 
const Membre = ({name, age, children, hideName, handleNameChange, handleAgeChange}) => {
    return (
    <Fragment>
    <div
    style={{
        backgroundColor: age > 10 ? 'blue' : 'purple', 
        marginRight: '30%',
        marginLeft: '30%',
        marginBottom: '26px',
        padding: '50px',
        borderRadius: '15px',
        color: 'white',
        boxShadow: '10px 5px 5px grey' 
    }}
    >
        <h2
            style={{
                textAlign: 'center'
            }}
        >{name} : {age} years old</h2>
        <div className='form'>
            <input value={ name } onChange={ handleNameChange } type='text'/>
            <input value={ age } onChange={handleAgeChange} type='text'/>
        </div>
        <div className='ano'>
            <button
                onClick={hideName}
            >X</button><p>Anonymous Mode</p>
            {children ? <p>{children}</p> : null} 
        </div>
    </div>
    </Fragment>
        
    )
}

export default Membre;