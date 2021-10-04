import React from 'react';
import PropTypes from 'prop-types';
//components import
import Noticia from './Noticia'; 


const ListadoNoticias = ({noticias}) => {
    return ( 
        <div className="row">
            {noticias.map(noticia =>(
                <Noticia
                    key={noticias.url}
                    noticia={noticia}
                />
            ))}
        </div>
     );
}

ListadoNoticias.propTypes ={
    noticias: PropTypes.array.isRequired
}
 
export default ListadoNoticias;