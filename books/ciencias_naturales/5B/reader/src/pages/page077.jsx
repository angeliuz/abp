import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";
import "./page_077.css";

function Page077(props) {

    const pagina = "077";
    var indexInput = 0;
    const etapa = "6"
    const background = "bgc-pikachu";
    const color = "color-pikachu";
    const borderColor = "border-color-pikachu"
    const borderColorTabla = "border-color-kokomi"
    const bgc_cajas = "bgc-kokomi";

    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
                    <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
                    <div className="position-relative w-100 mbp-10">
                        <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
                            <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
                            <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_003.png"} className="w-80" alt="" /></div>
                                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_007.png"} className="wp-60" alt="" /></div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                            </div>
                        </div>
                    </div>



                    <div className="d-flex global-margin mtp-20 mbp-0 psp-10 pep-20 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-50 start-0 translate-middle     msp--20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_008.png"} className="wp-40" alt="" /></div>
                                <div className="position-absolute top-50 start-100 translate-middle   msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-40" alt="" /></div>


                                <div className="col-12">
                                    <div className="f-Ubuntu-R fsp-16 lh-sm text-start mbp-5"> </div>
                                    <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                                        <div className="w-100 p-2 pb-3 rounded-p-10">
                                            <table className="w-100">
                                                <tbody>
                                                    <tr>
                                                        <td class="f-Ubuntu-R fsp-16 text-start pbp-10"> ¿Cómo hemos aprendido en equipo?</td>
                                                        <td className={"color-white style-caja bgc-bulma tf-letra border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2"}>
                                                            Nunca</td>
                                                        <td style={{ minWidth: "55px" }} className={"color-white style-caja bgc-bulma tf-letra  border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2"}>
                                                            A veces</td>
                                                        <td className={"color-white style-caja bgc-bulma tf-letra border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2"}>
                                                            Generalmente</td>
                                                        <td className={"color-white style-caja bgc-bulma tf-letra  border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2"}>
                                                            Siempre</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={"bgc-piccolo f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 border-color-bulma"}>Nos involucramos en el proyecto y nos
                                                            responsabilizamos por las tareas que
                                                            tenemos que hacer. </td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className={"bgc-piccolo f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 border-color-bulma"}>Ante una petición de apoyo de alguien
                                                            del grupo, intentamos ayudar antes de
                                                            preguntarle al profesor. </td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className={"bgc-piccolo f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 border-color-bulma"}>Respetamos el turno de la palabra.</td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className={"bgc-piccolo f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 border-color-bulma"}>Llegamos a acuerdos y decisiones
                                                            compartidas después de que cada uno da su
                                                            opinión.</td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                        <td className={"border-style-solid border-1 border-color-bulma bgc-white"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                    </tr>



                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>











                            </div>
                        </div>
                    </div>


                    <div className="d-flex global-margin mtp-0 mbp-10 psp-0 pep-10 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100  position-relative">
                            <div className="position-absolute top-50 start-100 translate-middle  msp-10 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-35" alt="" /></div>
                            <div className="col-sm-12 col-md-6 psp-20 pep-20 msp-0 mep-0 mtp-0 mbp-30 position-relative">

                                <div className="border-style-solid border-2 border-color-android18 rounded-p-10">
                                    <div className="d-flex flex-column bgc-white rounded-p-10">
                                        <div className="bgc-android18 w-100 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-10 pbp-10">
                                            Lo más difícil del proyecto
                                        </div>
                                        <div className="psp-15 pep-20">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-130" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 psp-20 pep-20 msp-0 mep-0 mtp-0 mbp-30 position-relative">
                                <div className="position-absolute posicion-centro-centro translate-middle zindex-1"><img src={"images/page_077/img_009.svg"} className="wp-60 mtp--30 rotacion-centro-centro" alt="" /></div>
                                <div className="border-style-solid border-2 border-color-leia rounded-p-10">
                                    <div className="d-flex flex-column bgc-white rounded-p-10">
                                        <div className="bgc-leia w-100 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-10 pbp-10">
                                            Lo que más nos gustó del proyecto
                                        </div>
                                        <div className="psp-20 pep-15">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-130" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="d-flex global-margin mtp-0 mbp-30 psp-10 pep-10 ptp-0 pbp-50">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-0 start-0 translate-middle  msp--15 mtp-30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                                <div className="border-style-solid border-2 border-color-akuma rounded-p-10">
                                    <div className="d-flex flex-column bgc-white rounded-p-10">
                                        <div className="bgc-akuma w-100 f-Ubuntu-B text-start color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">

                                            <div className="d-flex w-100 p-2">
                                                <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 fw-700 psp-5 pep-10">Ponernos de acuerdo fue: </div>
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 fw-700 psp-5 pep-20 ">fácil</div>
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 fw-700  psp-5">difícil</div>
                                            </div>
                                        </div>
                                        <div className="psp-20 pep-15">
                                            <div className="text-start ptp-10">porque</div>
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-130" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>






                    {/* BEIGN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    {/* END PIE DE PAGINA */}
                </div>
            </div>
        </div>


    );
}


export default Page077;
