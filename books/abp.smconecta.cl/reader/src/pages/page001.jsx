import React from "react";
import SubirImagen from '../components/SubirImagen';
import InputBox from "../components/InputBox";
import "./page_001.css";




function Page001() {

    const pagina = "001";
    var indexInput = 0;
    const etapa = "1"
    const background = "bgc-goten";
    const color = "color-goten";
    const borderColor = "border-color-goten"
    const borderColorTabla = "border-color-genos"
    const bgc_cajas = "bgc-genos";


    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative bgc-subir" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 2 */}

<div className="h-100 ">
{/* <img src={"images/fondo_001.svg"} className="w-100" /> */}
<div className="d-flex psp-0 pep-0">
                        <div className="row w-100 p-0 m-0 center-center">
                            <div className="col-md-8 col-lg-8 position-relative ">
                                <div className="mbp-30 mtp-120 msp-20 mep-20 text-start f-Ubuntu-L fsp-15 text-center">
                                <img src={"images/abp.svg"} className="wp-250" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex psp-0 pep-0">
                        <div className="row w-100 p-0 m-0 center-center">
                            <div className="col-md-8 col-lg-8 position-relative">
                                <div className="mbp-5 mtp-10 msp-20 mep-20 text-start f-Ubuntu-L fsp-15">
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                                </div>
                            </div>
                        </div>
                    </div>
  <div className="d-flex psp-0 pep-0 pbp-20">
<div className="row w-100 p-0 m-0 center-center">
    <div className="col-md-8 col-lg-8 position-relative">
        <div className="mbp-5 mtp-10 msp-20 fw-600 mep-20 rounded-p-60 bgc-white ptp-15 pbp-15 f-Ubuntu-R outlinesubir">
        INGRESA EL CÓDIGO
        <div className="psp-35 pep-35">
          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className=" p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-35" />
        </div>
        </div>
    </div>
</div>
</div>
                    <div className="d-flex psp-0 pep-0 pbp-10">
                        <div className="row w-100 p-0 m-0 center-center">
                            <div className="col-md-8 col-lg-8 position-relative">                         
                                <div className="mbp-30 mtp-10 msp-20 mep-20">
                                    <div className="d-flex center-center p-2 rounded-p-6 border-style-solid border-2 border-color-white min-hp-200 bgc-white outlinesubir">
                                        <SubirImagen
                                            // id={"imagen_" + pagina + "_" + (indexInput += 1)}
                                            id={"imagen_051_4"}
                                            idQR={"1296318930514"}
                                            className="w-80 bgc-white"
                                            colorUnidad={background}
                                            imagenPlaceHolder1="images/generales/subir_imagen1.svg"
                                            imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                                            titulo="Subir imagen"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="d-flex psp-0 pep-0">
 <div className="row w-100 p-0 m-0 center-center">
    <div className="col-xs-4 col-md-8 col-lg-8 position-relative">
        <div className="mbp-0 mtp-10 msp-20 fw-700 mep-20 rounded-p-30 bgc-shinobu ptp-15 pbp-15 color-white f-Ubuntu-R">
       SUBIR IMAGEN

        </div>
    </div>
</div> 
</div>
                    </div>




                </div>
            </div>
        </div>

    );
}

export default Page001;