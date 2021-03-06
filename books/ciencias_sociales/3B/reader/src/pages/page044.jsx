import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";
import SubirImagen from '../components/SubirImagen';
// import esquinaAzul from "images/page_044/esquinaAzul.svg";
import "./page_044.css";

function Page044(props) {

  const pagina = "044";
  var indexInput = 0;
  const background = "bgc-saitama";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-saitama d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">

            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}




          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Lo que vamos a considerar para nuestra fiesta y la creación de nuestro <i>stand</i>:</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_043/img_001.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>



          <div className="d-flex msp-60 mep-40 ">
            <div className="row w-100 m-0 p-2 rounded-p-10 bgc-hotaru">
              <div className="col-lg-8  col-md-8 ">

                <div className="d-block p-2 ">
                  <div className="f-Ubuntu-L text-start fsp-15 lh-sm">Las personas que nos ayudarán son</div>
                  <div className="rounded-p-5 w-100  p-1 bgc-white">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 fsp-12 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                  </div>
                </div>
                <div className="d-block p-2 ">
                  <div className="f-Ubuntu-L text-start fsp-15 lh-sm">Responsables de solicitar la ayuda</div>
                  <div className="rounded-p-5 w-100  p-1 bgc-white">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 fsp-12 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                  </div>
                </div>
                <div className="d-block p-2 ">
                  <div className="f-Ubuntu-L text-start fsp-15 lh-sm">Responsables de solicitar la autorización</div>
                  <div className="rounded-p-5 w-100  p-1 bgc-white">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 fsp-12 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                  </div>
                </div>
                <div className="d-block p-2 ">
                  <div className="f-Ubuntu-L text-start fsp-15 lh-sm">El espacio donde se realizará será</div>
                  <div className="rounded-p-5 w-100  p-1 bgc-white">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 fsp-12 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                  </div>
                </div>
                <div className="d-block p-2">
                  <div className="f-Ubuntu-L text-start fsp-15 lh-sm">Responsables de reunir los materiales</div>
                  <div className="rounded-p-5 w-100  p-1 bgc-white">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 fsp-12 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-30" />
                  </div>
                </div>

              </div>


              <div className="col-lg-4 col-md-4 wp-220  position-relative">
                <div className="d-block bgc-beethoven border border-2 border-color-sektor cuadroRotado rounded-be-20  p-2  ">
                  <div className="position-absolute bottom-0 end-0  p-0 m-0">
                    <img src="images/page_044/img_005.svg" className="hp-20  " alt=""></img>


                  </div>
                  <div className="d-flex ">
                    <div className="d-flex f-Ubuntu-L text-start fsp-15 lh-sm  psp-10 lh-sm">Los materiales que usaremos son:</div>
                  </div>
                  <div className="d-flex align-items-center p-1 w-100  ">
                    <div className="d-inline wp-30 hp-30 border border-1 border-color-dark bgc-white"><img src="images/page_044/img_003.svg" className="hp-20  " alt=""></img></div>
                    <div className="d-inline f-Ubuntu-L text-start fsp-15 lh-sm  psp-10 lh-sm">Nuestros trabajos:</div>
                  </div>
                  <div className="d-flex align-items-center p-1 w-100  ">
                    <div className="d-inline wp-30 hp-30 border border-1 border-color-dark bgc-white">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="d-inline f-Ubuntu-L text-start fsp-15 lh-sm  psp-10 lh-sm">Adornos</div>
                  </div>
                  <div className="d-flex align-items-center p-1 w-100  ">
                    <div className="d-inline wp-30 hp-30 border border-1 border-color-dark bgc-white">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="d-inline f-Ubuntu-L text-start fsp-15 lh-sm  psp-10 lh-sm">Otro:</div>
                  </div>
                  <div className="psp-30 pep-5 mtp--25 ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="ptp-10 psp-10 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35" />
                  </div>

                </div>
                <div className="position-absolute bottom-0 start-50 visible-768 translate-middle-x mono">
                  <img src="images/page_044/img_003.png" className="hp-150  " alt=""></img>

                </div>
                  <div className="position-absolute top-0 start-100 translate-middle msp--15 mtp-15 zindex-1"><img src={"images/page_" + pagina + "/img_001.svg"} className="wp-30" alt="" /></div>

              </div>
            </div>

          </div>

          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">4</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Dibujo cómo imagino que será nuestra fiesta.</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_043/img_001.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>





          <div className="d-flex msp-60 mep-60 mtp-0 mbp-80">
            <div className="row w-100 p-0 m-0">
              <div className="col-12  position-relative">
                <div className="position-absolute top-100 start-0 translate-middle zindex-2">
                  <img src="images/page_044/img_004.png" className="" alt=""></img>

                </div>
                <div className="d-flex justify-content-center ptp-20 w-100">
                  <div className="border-style-solid border-1  w-100  box-shadow-simple rounded-p-10 ">
                    <SubirImagen
                      id={"imagen_" + pagina + "_" + (indexInput += 1)}
                      className="w-100 bgc-white"
                      colorUnidad={background}
                      imagenPlaceHolder="images/generales/subir_imagen.svg"
                      titulo="Subir imagen"
                    />
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
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
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
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page044;
