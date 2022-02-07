import React from "react";
import InputBox from "../components/InputBox";
import Check from "../components/Check";
import "./page_046.css";

function Page046(props) {

    const pagina = "046";
    var indexInput = 0;
    const etapa = "4"
    const background = "bgc-pidgey";
    const color = "color-pidgey";
    const borderColor = "border-color-pidgey"
    const borderColorTabla = "border-color-pantro"
    const bgc_cajas = "bgc-pantro";




    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

                    {/* BEGIN CABECERA VERSIÓN 1 */}
                    <div className={"cabecera-v1 hp-80 " + background}></div>
                    {/* END CABECERA VERSIÓN 1 */}





                    <div className="container-titulo-global mtp-20 mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
xxx
</div> */}
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                3
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Analizo los gráficos de barras y respondo.
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>




                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100 position-relative ">
                            <div className="position-absolute top-0 start-100 translate-middle  msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/grafico.png"} className="wp-75" alt="" /></div>
                            <div className="col-sm-12 col-md-6 p-0 m-0 position-relative ">
                                <div className="mtp-20">

                                    <div className="m-1 mtp-10 border-style-solid border-1 border-color-dark rounded-te-be-bs">
                                        <div className="f-Ubuntu-R fsp-16  lh-sm text-start p-2">¿De dónde obtienen los encuestados,  principalmente, los alimentos que consumen: del kiosco, casino, casa u otros?</div>
                                        <div className="psp-10  pep-10  bgc-chitara rounded-seb-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mtp-20">

                                    <div className="m-1 mtp-10 border-style-solid border-1 border-color-dark rounded-te-be-bs">
                                        <div className="f-Ubuntu-R fsp-16  lh-sm text-start p-2">¿De dónde obtienen los encuestados,  principalmente, los alimentos que consumen: del kiosco, casino, casa u otros?</div>
                                        <div className="psp-10  pep-10  bgc-chitara rounded-seb-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 p-0 m-0 position-relative ">
                                <div className="mtp-20">
                                    <div className="m-1 border-style-solid border-1 border-color-dark rounded-te-be-bs">
                                        <div className="f-Ubuntu-R fsp-16  lh-sm text-start p-2">¿Qué les gusta comer a la mayoría de los encuestados?</div>
                                        <div className="psp-10  pep-10  bgc-chitara rounded-seb-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mtp-20">
                                    <div className="m-1 border-style-solid border-1 border-color-dark rounded-te-be-bs">
                                        <div className="f-Ubuntu-R fsp-16  lh-sm text-start p-2">¿Qué información es importante para crear la propuesta de alimentación saludable?</div>
                                        <div className="psp-10  pep-10  bgc-chitara rounded-seb-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>




                    <div className="container-titulo-global mtp-20 mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
xxx
</div> */}
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                4
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Proponemos las alternativas de alimentación saludable a partir
                                de las conclusiones.
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>













                    <div className="d-flex w-100 mtp-10 psp-60 pep-60 ptp-20 mbp-0 bgc-pantro border-top-style-solid border-color-dark border-2 pbp-80    position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle   visible-768 mtp--39 msp--80"><img src="images/page_060/img_004.png" className="wp-80 " alt="" /></div>
                        <div className="row w-100 p-0 m-0">
                            <div className="col-12 position-relative">
                                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                                    <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                        <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                                            <img src="images/generales/flecha_e4.svg" className="mep-5 wp-15" alt="" />
                                            <span>La parte más útil de lo que aprendí hasta ahora es </span>
                                        </div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                                        <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                                            <img src="images/generales/flecha_e4.svg" className="mep-5 wp-15" alt="" />
                                            <span>¿Qué es lo que no debería cambiar porque lo hago bien?</span>
                                        </div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                                    </div>

                                </div>




                                {/* BEGIN TABLE */}
                                <div className="mbp-50 psp-0 pep-0 ptp-10 pbp-10 mtp-60 f-Ubuntu-L fsp-13 rounded-p-10 ">
                                    <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                                        {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                                        <div className="w-100 p-0 pb-3 position-relative">
                                            <div className="position-absolute mtp--40 top-0 start-0 msp-10 mtp--10 mbp-10 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo me siento?</div>
                                            <div className="d-flex position-absolute align-items-start w-100  mbp-50 top-0 start-0 msp-10 mtp--20 f-Ubuntu-R fsp-15  lh-sm text-start">Marco con un <img src={"images/page_" + pagina + "/ticket.svg"} className="wp-15 msp-5 mep-5 p-0 mpt-0 " alt="" /> el recuadro que mejor me represente.</div>
                                            <table className="w-100">

                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                                                            <div className="d-flex w-100 center-center psp-10 pep-10 ptp-0 pbp-0 text-center ">Nunca</div>
                                                        </td>
                                                        <td className={"color-dark f-colby-compres-bold p-0 m-0 min-wp-55 "}>
                                                            <div className="d-flex w-100 center-center psp-5 pep-5 ptp-0 pbp-0 text-center ">A veces</div>
                                                        </td>
                                                        <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                                                            <div className="d-flex center-center psp-10 pep-10 ptp-0 pbp-0 text-center ">Generalmente</div>
                                                        </td>
                                                        <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                                                            <div className="d-flex center-center psp-5 pep-5 ptp-0 pbp-0 text-center ">Siempre</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-15 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                                                                <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                                Me siento tenso y nervioso cuando trabajo con mi equipo.
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-15 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                                                                <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                                Me asusta no hacer bien el trabajo y recibir críticas.
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* END TABLE */}



                            </div>







                        </div>
                    </div>








                    {/* BEGIN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

                        <div className={etapa == 1 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className={etapa == 2 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className={etapa == 3 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className={etapa == 4 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className={etapa == 5 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className={etapa == 6 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                            <div className="w-100 hp-25 bgc-pikachu"></div>
                        </div>
                    </div>
                    {/* END PIE DE PAGINA */}

                </div>
            </div>
        </div>

    );
}

export default Page046;
