import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";
import SubirImagen from '../components/SubirImagen';

import "./page_028.css";

function Page028(props) {

  const pagina = "028";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";


  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-android18">
          </div>


          <div className="col-12 p-0 m-0 position-relative">
            <div className="container-titulo-global mtp-20 mbp-0">
              <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                Desechos + creatividad = Reutilizar
              </div>
              <div className="d-flex psp-20">
                <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_005.svg"} alt="" />
                <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                  2
                </div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                  Observamos el video. Proponemos ideas para reutilizar los desechos y luego las dibujo.
                </div>
                <ModalVideo
                  id={"p" + pagina + "_video" + (indexInput += 1)}
                  linkVideo="xS_EPS2ZSfY"
                  tituloVideo="Juguete de tela"
                  tipoVideo="youtube"
                  image={"images/generales/play.svg"}
                  colorUnidad={background}
                  clasesImagen="cambio hp-40 mtp-10"
                  className="p-0 px-1"
                />
              </div>
            </div>

          </div>



          <div className="d-flex msp-60 mep-60 mbp-0 mtp-0">

            <div className="row m-0 psp-60 pep-60 ptp-10 pbp-0 w-100">

              <div className="col-sm-12 col-md-6 position-relative pbp-20">
                <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp-40 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-100 " alt="" /></div>
                <div className="d-flex flex-column mbp-0 mtp-0 w-100 bgc-white border-style-double border-color-goku border-3 rounded-p-10">
                
            <div className="d-flex center-center p-2 rounded-p-20   min-hp-300">

                <SubirImagen
                    id={"imagen_" + pagina + "_" + (indexInput += 1)}
                    className="w-100 bgc-white"
                    colorUnidad={background}
                    imagenPlaceHolder1="images/generales/subir_imagen1.svg"
                    imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                    titulo="Subir imagen"
                />
            


        </div>

                </div>

              </div>

              <div className="col-sm-12 col-md-6 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--15 mtp-40 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-50 " alt="" /></div>
                <div className="d-flex flex-column mbp-0 mtp-0 w-100 bgc-white border-style-double border-color-goku border-3 rounded-p-10">
                <div className="d-flex center-center p-2 rounded-p-20   min-hp-300">

<SubirImagen
    id={"imagen_" + pagina + "_" + (indexInput += 1)}
    className="w-100 bgc-white"
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

          <div className="ptp-30 container-titulo-global mbp-10">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>¿Qué podemos reciclar?</div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Completamos el esquema y jugamos al laberinto en la revista.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"76"} image={"images/page_" + pagina + "/img_004.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>


          <div className="d-flex msp-60 mep-60 mbp-100 mtp-0">

            <div className="row m-0 psp-10 pep-10 ptp-10 pbp-0 w-100">

              <div className="col-md-6 col-lg-6 position-relative">

                <div className="d-flex border-style-solid border-color-raiden border-2 rounded-p-10 psp-10 pep-10">
                  <div className="d-flex flex-column f-Ubuntu-R fsp-15 psp-0 pep-0 mtp-20 w-100">
                    <div className="f-colby-compres-medium fsp-20 color-dark text-center color-dark ">¿Qué puedo reciclar?</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                  </div>
                </div>

              </div>
              <div className="col-md-6 col-lg-6 position-relative">

                <div className="d-flex border-style-solid border-color-raiden border-2 rounded-p-10 bgc-kano psp-10 pep-10 mbp-20">
                  <div className="d-flex flex-column f-Ubuntu-R fsp-15 psp-0 pep-0 ptp-5 pbp-5 mtp-0 w-100">
                    <div className="f-colby-compres-medium fsp-20 color-dark text-center color-dark ">¿Para qué lo puedo utilizar?</div>
                  </div>
                </div>
                <div className="d-flex border-style-solid border-color-raiden border-2 rounded-p-10 psp-10 pep-10 mbp-20">
                  <div className="d-flex flex-column f-Ubuntu-R fsp-15 psp-0 pep-0 ptp-5 pbp-10 mtp-0 w-100">
                    <div className="f-colby-compres-medium fsp-20 color-dark text-start color-dark ">En la casa</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                </div>
                <div className="d-flex border-style-solid border-color-raiden border-2 rounded-p-10 psp-10 pep-10 mbp-20">
                  <div className="d-flex flex-column f-Ubuntu-R fsp-15 psp-0 pep-0 ptp-5 pbp-10 mtp-0 w-100">
                    <div className="f-colby-compres-medium fsp-20 color-dark text-start color-dark ">En el colegio</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                </div>
                <div className="d-flex border-style-solid border-color-raiden border-2 rounded-p-10 psp-10 pep-10 mbp-20">
                  <div className="d-flex flex-column f-Ubuntu-R fsp-15 psp-0 pep-0 ptp-5 pbp-10 mtp-0 w-100">
                    <div className="f-colby-compres-medium fsp-20 color-dark text-start color-dark ">En nuestra feria</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                </div>

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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
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

export default Page028;
