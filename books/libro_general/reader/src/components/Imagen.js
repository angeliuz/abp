import React, { Suspense, lazy } from 'react';

const Img = lazy(() => import('./Img'));

const Imagen = (props) => {
    return (
        <Suspense fallback={<h1 className="color-dark fsp-20">Cargando...</h1>}>
            <Img alt={props.alt || ""} {...props} />
        </Suspense>
    )
}


export default Imagen;