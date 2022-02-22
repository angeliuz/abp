import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import Check from "../components/Check2";
import "./page_079.css";

function Page079(props) {

    const pagina = "079";
    var indexInput = 0;

    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="cb-page79 page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <img src="images/page_079/cabecera.svg" className="cb-dossier" alt="" />

                    <div className="position-relative w-100 mbp-20">
                        <div className=" psp-80 pep-70 ptp-30 pbp-0 ">
                            <div className="fsp-16 f-Ubuntu-B text-start psp-0 pbp-10">Esta página ha sido completada por:</div>
                            <div className="psp-0 ptp-5 pbp-5 bgc-white rounded-p-10 border border-color-lightDark d-flex justify-content-center position-relative">
                                <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 mtp-0"><img src="images/page_079/img_001.png" className="wp-70" /></div>
                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp-0"><img src="images/page_079/img_002.png" className="w-50" /></div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 text-start lhp-35 w-80" />
                            </div>

                        </div>

                    </div>

                    <div className="d-flex msp-60 mep-60 mbp-100">

                        <div className="row m-0 p-2 w-100 ">
                            <div className="col-sm-12 col-md-12 position-relative text-start pbp-10 f-Ubuntu-M">
                                ¿Cómo hemos aprendido en equipo?
                            </div>
                            <div className="col-sm-12 col-md-12 position-relative">
                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp-0"><img src="images/page_079/img_003.png" className="wp-70" /></div>
                                <div className="w-100 p-2 pb-3">
                                    <table className="w-100">
                                        <tbody>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td className="style-caja bgc-bulma tf-letra border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2">
                                                    Nunca</td>
                                                <td style={{ minWidth: "55px" }} className="style-caja bgc-bulma tf-letra  border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2">
                                                    A veces</td>
                                                <td className="style-caja bgc-bulma tf-letra border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2">
                                                    Generalmente</td>
                                                <td className="style-caja bgc-bulma tf-letra  border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2">
                                                    Siempre</td>
                                            </tr>
                                            <tr>
                                                <td className="bgc-draco f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-bulma">Nos implicamos en la realización de la tarea y asumimos con responsabilidad el trabajo</td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                            </tr>
                                            <tr>
                                                <td className="bgc-draco f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-bulma">Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor.</td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                            </tr>
                                            <tr>
                                                <td className="bgc-draco f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-bulma">Respetamos el turno de la palabra.</td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                            </tr>
                                            <tr>
                                                <td className="bgc-draco f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-bulma">Llegamos a acuerdos y decisiones compartidas después de qué cada uno dio su opinión.</td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-12 position-relative text-start pbp-10 f-Ubuntu-M">
                                <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-0 mtp--30"><img src="images/page_079/img_004.png" className="wp-60" /></div>
                                Después de todo el trabajo, valoramos así lo que hemos hecho:
                            </div>

                            <div className="col-sm-12 col-md-6 position-relative">
                                <div className="position-absolute top-100 start-0 translate-middle wp-100 msp-20 mtp--30"><img src="images/page_079/img_007.png" className="wp-60" /></div>

                                <div className="box-color-24-1">
                                    <div className="f-Ubuntu-B alinea rounded-set-10 bgc-android18 w-100 p-2 text-center color-white hp-65 d-flex justify-content-center align-items-center">Lo más difícil del proyecto </div>
                                    <div className=" linea1 bgc-white hp-250 p-2 rounded-seb-20 border-style-solid border-color-android18 border-2">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 position-relative">

                                <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 visible-768"><img src="images/page_050/espiral.svg" className="wp-50 " alt="" /></div>
                                <div className="position-absolute top-100 start-100 translate-middle wp-100 msp--20 mtp--30"><img src="images/page_079/img_008.png" className="wp-30" /></div>
                                <div className="position-absolute top-0 start-100 translate-middle wp-100 msp--20 mtp-30"><img src="images/page_079/img_005.png" className="wp-60" /></div>
                                <div className="box-color-24-2">
                                    <div className="f-Ubuntu-B alinea rounded-set-10 bgc-pidgey w-100 p-2 text-center color-white">Lo que más nos ha<br />  gustado del proyecto</div>
                                    <div className="linea1 bgc-white hp-250 p-2  rounded-seb-20 border-style-solid border-color-pidgey border-2">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>



                    {/* PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Page079;
