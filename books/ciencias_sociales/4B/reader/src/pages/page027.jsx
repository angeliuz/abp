import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";
import Check from "../components/Check";
import CheckMultiple from "../components/CheckMultiple";
import "./page_027.css";

function Page027(props) {

  const pagina = "027";
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
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + colorSesion}>SESIÓN 5</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Hay que ponerse en el lugar del otro</div>
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}


          <div className="ptp-30 container-titulo-global mbp-20">
            <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Contextualizamos</div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Respondo:
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className=" psp-50 pep-50 mbp-20 mtp-10">

            <div className="row container-row px-5">
              <div className="col-sm-12 col-md-6 position-relative mbp-20">
                {/* <div className="position-absolute top-100 start-0 translate-middle wp-100 msp-40 mtp--70"><img src="images/page_050/carta.png" className="wp-50 mep-70 mtp-30" alt="" /></div> */}

                <div className="">
                  <div className="f-Ubuntu-B alinea rounded-set-10 bgc-akuma w-100 p-2 text-center color-white">Creo que el ambiente de
                    convivencia en mi curso es:</div>
                  <div className=" linea1 bgc-white  p-2 rounded-seb-20 border-style-solid border-color-akuma border-2">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle mtp--10 msp-20 "><img src="images/page_027/img_002.png" className="" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 visible-768"><img src="images/page_050/espiral.svg" className="wp-50 " alt="" /></div>
                <div className="">
                  <div className="f-Ubuntu-B alinea rounded-set-10 bgc-saitama w-100 p-2 text-center color-white">Siento que con mis
                    compañeros de curso soy:</div>
                  <div className="linea1 bgc-white p-2  rounded-seb-20 border-style-solid border-color-saitama border-2">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
              </div>

            </div>


          </div>

          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_027/img_004.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Pinto con <img src="images/page_027/img_005.svg" className="hp-20 psp-5 pep-5 mtp--5" alt="" />las situaciones positivas y con<img src="images/page_027/img_006.svg" className="hp-20 psp-5 pep-5 mtp--5" alt="" /> las situaciones negativas.
                Luego, comento con mi grupo las imágenes.
              </div>
              {
                // <ModalVideo
                //   id={"p" + pagina + "_video" + (indexInput += 1)}
                //   image="images/page_024/img_001.svg"
                //   clasesImagen="hp-40 text-center mtp-10 "
                //   className="p-0 px-1"
                // />
              }
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="d-flex msp-60 mep-60 mbp-0 mtp-0">
            <div className="row m-0  ptp-10 pbp-0 w-100">

              <div className="col-6 position-relative">
                <div className="" ><img src="images/page_027/img_007.jpg" className="w-100 position-relative" alt="" />
                  <div className=" position-absolute mtp--50 msp-10 ">
                  <CheckMultiple
                  id={"check_p" + pagina + "_" + (indexInput += 1)}
                  image0={"images/page_" + pagina + "/check_vacio.svg"}
                  image1={"images/generales/check_azul.svg"}
                  image2={"images/generales/check_rojo.svg"}
                  classContainer="wp-45 hp-45 border-style-solid border-2 border-color-dark bgc-white rounded-circle disable-select d-flex center-center p-1 "
                />
                  </div>
                </div>
              </div>

              <div className="col-6 position-relative">
                <div className="  "><img src="images/page_027/img_008.jpg" className=" w-100 position-relative" alt="" />
                <div className=" position-absolute mtp--50 msp-10 ">
                  <CheckMultiple
                  id={"check_p" + pagina + "_" + (indexInput += 1)}
                  image0={"images/page_" + pagina + "/check_vacio.svg"}
                  image1={"images/generales/check_azul.svg"}
                  image2={"images/generales/check_rojo.svg"}
                  classContainer="wp-45 hp-45 border-style-solid border-2 border-color-dark bgc-white rounded-circle disable-select d-flex center-center p-1 "
                />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="d-flex msp-60 mep-60 mbp-100 mtp-0">
            <div className="row m-0  ptp-10 pbp-0 w-100">

              <div className="col-6 position-relative">
                <div className="" ><img src="images/page_027/img_009.jpg" className="w-100 position-relative " alt="" />
                <div className=" position-absolute mtp--50 msp-10 ">
                  <CheckMultiple
                  id={"check_p" + pagina + "_" + (indexInput += 1)}
                  image0={"images/page_" + pagina + "/check_vacio.svg"}
                  image1={"images/generales/check_azul.svg"}
                  image2={"images/generales/check_rojo.svg"}
                  classContainer="wp-45 hp-45 border-style-solid border-2 border-color-dark bgc-white rounded-circle disable-select d-flex center-center p-1 "
                />
                  </div>
                </div>
              </div>

              <div className="col-6 position-relative">
                <div className="  "><img src="images/page_027/img_010.jpg" className=" w-100 position-relative" alt="" />
                <div className=" position-absolute mtp--50 msp-10 ">
                  <CheckMultiple
                  id={"check_p" + pagina + "_" + (indexInput += 1)}
                  image0={"images/page_" + pagina + "/check_vacio.svg"}
                  image1={"images/generales/check_azul.svg"}
                  image2={"images/generales/check_rojo.svg"}
                  classContainer="wp-45 hp-45 border-style-solid border-2 border-color-dark bgc-white rounded-circle disable-select d-flex center-center p-1 "
                />
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
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>

  );
}

export default Page027;
