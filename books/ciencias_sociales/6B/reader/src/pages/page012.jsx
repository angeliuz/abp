import React from "react";
import "./page_012.css";

function Page012(props) {

    const pagina = "012";
    var indexInput = 0;
    const etapa = "2"
    const background = "bgc-bulma";
    const bgc_cajas = "bgc-piccolo";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className={"page " + background + " position-relative pagina-cohete"} id={"page_" + pagina}>

                    <div className="w-100 mt-15 pe-5 ps-5 ">
                        <div className="pc-lineas-v2 pbp-80">
                            <div className="pc-cabecera">
                                <div className="pc-titulo-12 color-white fsp-20 lh-sm f-durotype-aspiranar-bold">
                                    Mis objetivos <br /> en esta etapa son:
                                </div>
                                <div className="pc-cohete" ><img src="images/generales/cohete.png" alt="" />
                                </div>
                            </div>

                            {/* BEGIN OBJETIVOS */}
                            <div className="pc-caja-objetivos-1">
                                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                                    <div className={"d-flex " + bgc_cajas + " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" + etapa}>
                                        <div className="d-flex align-items-start wp-23 ptp-1 pep-2">
                                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mbp-20 mep-5 wp-20" alt="" />
                                        </div>
                                        <div>
                                            <span className="fsp-16 text-start f-Ubuntu-R">
                                                <span className="fsp-16 f-IntroRustG-Base text-start">IDENTIFICAR </span>
                                                qué sé<br /> acerca del desafío.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pc-caja-objetivos-2">
                                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                                    <div className={"d-flex " + bgc_cajas + " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" + etapa}>
                                        <div className="d-flex align-items-start wp-23 ptp-1 pep-2">
                                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mbp-25 mep-5 wp-20" alt="" />
                                        </div>
                                        <div className="d-flex">
                                            <span className="fsp-16 text-start f-Ubuntu-R">
                                                <span className="fsp-16 f-IntroRustG-Base text-start">IDENTIFICAR </span>
                                                qué<br />necesito saber para<br /> afrontar el desafío.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pc-caja-objetivos-3">
                                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                                    <div className={"d-flex " + bgc_cajas + " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" + etapa}>
                                        <div className="d-flex align-items-start wp-23 ptp-1 pep-2">
                                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mbp-25 mep-5 wp-20" alt="" />
                                        </div>
                                        <div className="d-flex">
                                            <span className="fsp-16 text-start f-Ubuntu-R">
                                                <span className="fsp-16 f-IntroRustG-Base text-start">ASIGNAR </span>
                                                los roles<br /> para realizar el<br /> trabajo en equipo.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pc-caja-objetivos-4">
                                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                                    <div className={"d-flex " + bgc_cajas + " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" + etapa}>
                                        <div className="d-flex align-items-start wp-23 ptp-1 pep-2">
                                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mbp-25 mep-5 wp-20" alt="" />
                                        </div>
                                        <div className="d-flex">
                                            <span className="fsp-16 text-start f-Ubuntu-R">
                                                <span className="fsp-16 f-IntroRustG-Base text-start">ELABORAR </span>
                                                un plan para<br /> superar el desafío.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END OBJETIVOS */}
                        </div>

                        <div className="d-flex justify-content-center mtp--10 mbp-50 ">
                            <div className="">
                                <img src={"images/page_" + pagina + "/img_003.jpg"} className="w-100" alt="" />
                            </div>
                        </div>
                        {/* Begin pie de página */}
                        <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                                ABP &copy; SM
                            </div>
                            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                        </div>
                        {/* End pie de página */}


                    </div>
                </div>
            </div>

        </div>


    );
}

export default Page012;
