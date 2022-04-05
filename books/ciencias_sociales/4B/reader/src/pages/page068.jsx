import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_068.css";

function Page068(props) {

  const pagina = "068";
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
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>

          <div className="d-flex msp-60 mep-60 mtp-20 mbp-10">
            <div className="row p-0 m-0">
              <div className="col-sm-12 col-md-3 position-relative"></div>

              <div className="ptp-10 mbp-20">
                <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                  Nos comprometemos
                </div>
                <div className="d-flex psp-20">
                  <img className="hp-20 align-center mt-3 mep-0 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
                  <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                    3
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Reflexionamos como grupo: ¿A qué acción concreta nos comprometemos para mejorar la convivencia de nuestro curso?
                  </div>
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                  {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                </div>
              </div>
              {/* FIN CABECERA */}
              <div className="max-wp-700 mx-auto bgc-white p-2 t-shadow position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--90 mtp-10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="wp-30" alt="" /></div>
                <span className="text-start f-Ubuntu-L fsp-15 d-flex">Nuestro compromiso por la buena convivencia:</span>
                <div className="psp-10 pep-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                </div>
              </div>
              <div className="max-wp-700 mx-auto bgc-marcianos p-2 t-shadow rounded-p-10 position-relative">
                <span className="text-start f-Ubuntu-L fsp-15 d-flex">Nuestro compromiso se ve reflejado en nuestro álbum en:</span>
                <div className="psp-10 pep-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                </div>
              </div>
              <div className="ptp-10 mbp-20">
                <div className="d-flex psp-20">
                  {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                  <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                    4
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Acordamos como curso el día y la hora de nuestra jornada para compartir los álbumes que hemos creado. Anoto la información para no olvidarla:
                  </div>
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                  {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                </div>
              </div>
              <div className="max-wp-700 mx-auto cb-border-multicolor ptp-20 pbp-20 psp-60 bgc-lizt position-relative">
                <div className="position-absolute top-50 start-100 translate-middle msp--90 mtp-10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-110" alt="" /></div>
                <span className="text-start f-Ubuntu-L fsp-15 d-flex ">Nuestra jornada “Por la buena convivencia escolar”</span>
                <div className="d-flex w-100 mtp-10">
                  <span className="text-start f-Ubuntu-L fsp-15 d-flex justify-content-center align-items-center mep-10">se llevará a cabo el día</span>
                  <div className=" rounded-p-10 bgc-white border-1 border-style-solid border-color-ken max-wp-300 w-100 ptp-10 pbp-10 psp-20 pep-20 msp-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
                  </div>
                </div>
                <div className="d-flex mtp-10">
                  <span className="text-start f-Ubuntu-L fsp-15 d-flex justify-content-center align-items-center mep-10 ">a las</span>
                  <div className="rounded-p-10 bgc-white border-1 border-style-solid border-color-blaze max-wp-300 w-100 ptp-10 pbp-10 psp-20 pep-20 msp-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
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
          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_difusion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page068;
