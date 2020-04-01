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
const Membre = ({name, age, children}) => {
    return (
    <Fragment>
        <h2 style={{
            backgroundColor: age > 10 ? 'blue' : 'purple', 
            marginRight: '30%',
            marginLeft: '30%',
            padding: '50px',
            borderRadius: '15px',
            color: 'white',
            boxShadow: '10px 5px 5px grey'
            
        }}>Membre de ma famille: {name.toUpperCase()} : {age}</h2>
        {children ? <p>{children}</p> : <Fragment />}
        
    </Fragment>
    )
}

export default Membre;