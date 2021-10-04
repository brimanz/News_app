import React from 'react';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect';


const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'general'},
        {value: 'business', label: 'negocios'},
        {value: 'entretaiment', label: 'entretenimiento'},
        {value: 'health', label: 'salud'},
        {value: 'science', label: 'ciencia'},
        {value: 'sports', label: 'deportes'},
        {value: 'technology', label: 'tecnologia'}
    ];

    //using custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //submit form
    const buscarNoticias = e =>{
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticas por categoria</h2>
                    <SelectNoticias/>

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btn} btn-large amber darken-2`} 
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes ={
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;