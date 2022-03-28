import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

import "./page_016.css";

function Page016(props) {

  const pagina = "016";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>
          <div className="ptp-50 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R col-9 fsp-16 ptp-18 psp-10 pep-10 text-start">
                En grupo, mencionamos la mayor cantidad de ideas para nuestra posible obra de arte visual. Las registro en el siguiente espacio.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-80 ptp-20 pbp-20">
            <div className="border-style-solid border-1 rounded-p-20 psp-20 pep-10 ptp-10 pbp-5 position-relative">
              <div className="bgc-draco p-3 rounded-p-20">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
              </div>
              <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--20 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-50" alt="" /></div>
              <div className="position-absolute top-0 start-100 translate-middle msp--60 mtp--38 zindex-1 visible-768"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-90" alt="" /></div>
            </div>
          </div>

          <div className=" container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo y relaciono las características que tendrán la exposición y las obras que se presentarán en ella.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20 pbp-100">
            <div className="position-relative">
              <div className="mbp--30 zindex-1">
                <div className="d-flex justify-content-around flex-wrap">
                  <div className="psp-20 pep-20 bgc-soldados f-Ubuntu-B color-white text-center rounded-p-20 py-2">respetuosa</div>
                  <div className="psp-20 pep-20 bgc-bulma f-Ubuntu-B color-white text-center rounded-p-20 py-2">organizada</div>
                  <div className="psp-20 pep-20 bgc-android18 f-Ubuntu-B color-white text-center rounded-p-20 py-2">original</div>
                  <div className="psp-20 pep-20 bgc-pidgey f-Ubuntu-B color-white text-center rounded-p-20 py-2">didáctica</div>
                  <div className="psp-20 pep-20 bgc-saitama f-Ubuntu-B color-white text-center rounded-p-20 py-2">sostenible</div>
                </div>
              </div>
              <div className="bgc-pantro rounded-p-20 pbp-20 psp-10 pep-10 ptp-70">
                <div className="d-flex justify-content-around align-items-center flex-wrap">

                  <div className="mnwp-a psp-10 pep-10 ptp-10 pbp-10 wp-230">
                    <div className="bgc-white p-2 rounded-p-10">
                      <div className="ptp-10 pbp-10">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                      <div className="bgc-baki text-start fsp-15 rounded-p-10 px-2">En la exposición, las obras se ubicarán de acuerdo con un diseño definido.</div>
                    </div>
                  </div>

                  <div className="mnwp-a psp-10 pep-10 ptp-10 pbp-10 wp-230">
                    <div className="bgc-white p-2 rounded-p-10">
                      <div className="ptp-10 pbp-10">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                      <div className="bgc-baki text-start fsp-15 rounded-p-10 px-2">Cada grupo intentará que su obra sea diferente a las demás.</div>
                    </div>
                  </div>


                  <div className="mnwp-a psp-10 pep-10 ptp-10 pbp-10 wp-220">
                    <div className="bgc-white p-2 rounded-p-10">
                      <div className="ptp-10 pbp-10">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                      <div className="bgc-baki text-start fsp-15 rounded-p-10 px-2">Cada obra estará acompañada de una descripción para que los visitantes la entiendan.</div>
                    </div>
                  </div>

                  <div className="mnwp-a psp-10 pep-10 ptp-10 pbp-10 wp-220">
                    <div className="bgc-white p-2 rounded-p-10">
                      <div className="ptp-10 pbp-10">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                      <div className="bgc-baki text-start fsp-15 rounded-p-10 px-2">Las obras que elaboremos tienen que promover los derechos fundamentales y la buena convivencia.</div>
                    </div>
                  </div>

                  <div className="mnwp-a psp-10 pep-10 ptp-10 pbp-10 wp-220">
                    <div className="bgc-white p-2 rounded-p-10">
                      <div className="ptp-10 pbp-30">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                      <div className="bgc-baki text-start fsp-15 rounded-p-10 px-2">En las obras se evitará el desperdicio de materiales.</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="position-absolute top-0 start-0 translate-middle msp-20 mtp-60 zindex-1"><img src={"images/page_" + pagina + "/img_009.png"} className="wp-90" alt="" /></div>
              <div className="position-absolute top-0 start-100 translate-middle msp--20 mtp-60 zindex-1"><img src={"images/page_" + pagina + "/img_010.png"} className="wp-90" alt="" /></div>
            </div>
          </div>



          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>


        </div>
      </div>
    </div >


  );
}

export default Page016;
