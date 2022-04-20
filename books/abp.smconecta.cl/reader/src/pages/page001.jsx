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
                        <div className="row position-absolute caja-flotante2 p-0 m-0 " style={{ top: 0 }}>
                            <div className="col-2 position-relative col-sm-2 p-0 m-0">
                                <div className="w-100 hp-15 bgc-goten"></div>
                            </div>
                            <div className="col-2 position-relative col-sm-2 p-0 m-0">
                                <div className="w-100 hp-15 bgc-bulma"></div>
                            </div>
                            <div className="col-2 position-relative col-sm-2 p-0 m-0">
                                <div className="w-100 hp-15 bgc-android18"></div>
                            </div>
                            <div className="col-2 position-relative col-sm-2 p-0 m-0">
                                <div className="w-100 hp-15 bgc-pidgey"></div>
                            </div>
                            <div className="col-2 position-relative col-sm-2 p-0 m-0">
                                <div className="w-100 hp-15 bgc-saitama"></div>
                            </div>
                            <div className="col-2 position-relative col-sm-2 p-0 m-0">
                                <div className="w-100 hp-15 bgc-pikachu"></div>
                            </div>
                        </div>
                        {/* <img src={"images/fondo_001.svg"} className="w-100" /> */}
                        <div className="d-flex psp-0 pep-0">
                            <div className="row w-100 p-0 m-0 center-center">
                                <div className="col-xs-3 col-sm-5 col-lg-5 position-relative ">
                                    <div className="mbp-30 mtp-50 msp-20 mep-20 text-start f-Ubuntu-L fsp-15 text-center">
                                        <img src={"images/abp.svg"} className="abp_imagen" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex psp-0 pep-0">
                            <div className="row w-100 p-0 m-0 center-center">
                                <div className=" col-sm-7 col-md-6 col-lg-8 position-relative">
                                    <div className="mbp-5  msp-20 mep-20 text-start f-Ubuntu-L fsp-15">
                                        Puedes tomar una fotografía con tu celular y cargarla ingresando el siguiente código.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex psp-0 pep-0 pbp-10">
                            <div className="row w-100 p-0 m-0 center-center">
                                <div className="col-12 position-relative">
                                    <div className="mbp-30 mtp-10 msp-0 mep-0">
                                        <div className="d-flex flex-column center-center ">
                                            <SubirImagen
                                                // id={"imagen_" + pagina + "_" + (indexInput += 1)}
                                                id={"imagen_051_4"}
                                                idQR={"68A9E"}
                                                className="d-flex psp-0 pep-0 w-80 bgc-white rounded-p-6 border-style-solid border-2 border-color-white min-hp-200 bgc-white outlinesubir"
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

                    </div>




                </div>
            </div>
        </div>

    );
}

export default Page001;