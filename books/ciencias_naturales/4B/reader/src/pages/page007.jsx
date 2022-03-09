import React from "react";
import ModalVideo from "../components/ModalVideo";

import "./page_007.css";

function Page007(props) {

  const pagina = "007";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-goten d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-150 text-center fsp-24 f-IntroRustG-Base color-goten">SESIÓN 1</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¿Qué sé y qué necesito saber?</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">

            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-goten text-start">Conociendo el desafío</div>
          </div>
          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-goten">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Completo y comparto con mi grupo.</div>
              <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" />
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          <div className="cb-contenedor-mail-p07">
            <div className="cb-invitacion-p07 psp-35 f-Ubuntu-R fsp-16">Invitación a ser brigadista escolar</div>
            <div className="cb-datos-mail pep-15 psp-10 ptp-10 pbp-10">
              <div className="d-flex justify-content-between mbp-5">
                <div><img src="images/page_007/img_006.png" className="cb-computador-carta psp-30" alt=""></img></div>
                <div className="cb-datos-1 msp-10 align-items-center d-flex">
                  <div className="psp-10 f-Ubuntu-l fsp-16"> <span className="fw-700"> Macarena </span> macarena@brigadistas.cl <br /> Para Estudiantes 4° básico </div>
                </div>
              </div>
            </div>

            <div className="cb-texto-mail mbp-90">
              <div className="cb-carta-content f-Ubuntu-L text-start">
                <img src="images/page_007/img_003.png" className="cb-cerrar-carta-p07" alt=""></img>
                <img src="images/page_007/img_007.png" className="cb-favorito-carta-p07" alt=""></img>
                <img src="images/page_007/img_004.png" className="cb-celu-carta-p07" alt=""></img>
                <img src="images/page_007/img_005.png" className="cb-compu-carta-p07" alt=""></img>
                <p className="f-Ubuntu-R fw-700"> Estimados estudiantes:</p>
                <p>Reciban un cordial saludo. Mi nombre es Macarena y me dirijo a ustedes
                  en representación de la brigada comunal de emergencia para hacerles una
                  importante y entretenida invitación.</p>

                <p>¿Qué les parece la idea de conformar brigadas escolares? ¡Sería un desafío
                  muy entretenido! Participando en una brigada podrán colaborar con sus
                  profesores e inspectores ante alguna emergencia. También comunicarán de
                  manera oportuna a la comunidad educativa la importancia de saber actuar
                  ante distintos accidentes, además de enseñarles a sus compañeros a estar
                  preparados y comportarse adecuadamente ante un evento de riesgo. </p>

                <p>¡Sé que lo harán excelente! ¿Qué dicen? Quedo atenta a su respuesta.<br />
                  Reciban un cordial saludo de mi parte y de la brigada comunal a la que
                  represento<br /></p>
                <p className="justify-content-end d-flex">Atte. Macarena, brigadista comunal.</p>
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

            <div className="col-7 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
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

export default Page007;
