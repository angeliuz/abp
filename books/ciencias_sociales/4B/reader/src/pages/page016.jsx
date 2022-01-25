import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

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
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Conocemos las secciones de nuestro álbum.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="position-relative psp-60 pep-60 ptp-20 ">
            <div className="d-flex justify-content-between">
              <div className="justify-content-center zindex-1">
                <div className="rounded-set-20 bgc-soldados centrar-hor d-flex py-2">
                  <div className="f-Ubuntu-B color-white centrar ">Portada</div>
                </div>
                <div className="bgc-white caja-p16 border-style-solid border-2 border-dashed border-color-soldados rounded-seb-20 border-top">
                  <div className=" p-2"> Primera página
                    del álbum con una imagen atractiva y que represente sus partes.</div>
                </div>
              </div>

              <div className="justify-content-center zindex-1">
                <div className="rounded-set-20 bgc-bulma centrar-hor d-flex py-2">
                  <div className="f-Ubuntu-B color-white centrar ">Introducción</div>
                </div>
                <div className="bgc-white caja-p16 border-style-solid border-2 border-dashed border-color-bulma rounded-seb-20 border-top">
                  <div className=" p-2">Página en la que se explican las partes del álbum y por qué hemos hecho el álbum.</div>
                </div>
              </div>
            </div>
            <div className="hp-400"></div>
            <div className="d-flex justify-content-between pep-10">
              <div className="justify-content-center zindex-1">
                <div className="rounded-set-20 bgc-pikachu centrar-hor d-flex py-2">
                  <div className="f-Ubuntu-B color-white centrar ">Afiche</div>
                </div>
                <div className="bgc-white caja-p16 border-style-solid border-2 border-dashed border-color-pikachu rounded-seb-20 border-top">
                  <div className=" p-2">Espacio para incluir el afiche de la Jornada de diálogo que realizamos para enviar un mensaje vinculado con la buena convivencia.</div>
                </div>
              </div>

              <div className="justify-content-center zindex-1 psp-10 pep-10">
                <div className="rounded-set-20 bgc-pidgey centrar-hor d-flex py-2">
                  <div className="f-Ubuntu-B color-white centrar ">Fichas</div>
                </div>
                <div className="bgc-white caja-p16 border-style-solid border-2 border-dashed border-color-pidgey rounded-seb-20 border-top">
                  <div className=" p-2"> Fichas con datos personales, intereses, gustos y preocupaciones de las y los entrevistados.</div>
                </div>
              </div>

              <div className="justify-content-center zindex-1 psp-10">
                <div className="rounded-set-20 bgc-android18 centrar-hor d-flex py-2">
                  <div className="f-Ubuntu-B color-white centrar ">Nuestros desafíos</div>
                </div>
                <div className="bgc-white caja-p16 border-style-solid border-2 border-dashed border-color-android18 rounded-seb-20 border-top">
                  <div className=" p-2">Espacio donde incluiremos desafíos para la convivencia y propuestas de mejora</div>
                </div>
              </div>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle "><img src={"images/page_" + pagina + "/fondo_001.png"} className="wp-580 " alt="" /></div>
          </div>
          <div className="hp-100"></div>

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
    </div>


  );
}

export default Page016;
