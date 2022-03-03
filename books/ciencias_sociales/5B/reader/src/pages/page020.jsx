import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import Check from "../components/Check2";

import "./page_020.css";

function Page020(props) {

  const pagina = "020";
  var indexInput = 0;

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="cb-page20 page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <img src="images/page_020/img_001.png" className=" tf-phone hp-110" alt="" />
          <img src="images/page_020/img_002.png" className=" tf-maleta hp-100" alt="" />
          <img src="images/page_020/img_003.png" className=" tf-doc hp-160" alt="" />
          <img src="images/page_020/img_004.png" className=" tf-nota hp-60" alt="" />
          <img src="images/page_020/img_005.png" className=" tf-personaje-20 hp-110" alt="" />
          <div className="tf-frase f-colby-compres-bold">¡Etapa<br />completada!</div>
          <img src="images/page_020/img_006.png" className=" tf-tren hp-70" alt="" />
          <div className="position-relative mtp-100 w-100">
            <div className="row psp-70 pep-70">


              <div className="col-12 d-flex flex-column align-items-center">
                <div className="bgc-voldemort fsp-16 f-Ubuntu-B text-start color-white rounded-set-10 p-1 ps-4 pe-4">¿Qué vamos a necesitar?</div>
                <div className="block-bottom-20 pt-2 ps-4 pe-4 pb-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 border-style-solid border-2 border-color-dark">
                  <div className="fsp-16 f-Ubuntu-M text-center">Recursos materiales</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 ptp-20 ra-ps">
                <div className="block-bottom-20 p-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4 border-style-solid border-2 border-color-dark">
                  <div className="fsp-16 f-Ubuntu-B text-center">Ayuda de otras personas</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 ptp-20 ra-pe mbp-50">
                <div className="block-bottom-20 p-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4 border-style-solid border-2 border-color-dark">
                  <div className="fsp-16 f-Ubuntu-B text-center">Permisos</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                </div>
              </div>
              <div className="block-bottom-20 mtp-10 f-pixilate-bold text-start mbp-5">¿Cómo vamos?</div>
              <div className="p-2 pb-3 bgc-white rounded-p-10 mbp-120">
                {/* <div className="w-100 fsp-14 f-Ubuntu-L mtp-5 mbp-10 text-start">Marco con un <img src="images/page_018/img_005.svg" className="hp-17 mtp--2" alt=""/> el recuadro que mejor me represente.</div> */}
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
                      <td className="bgc-draco f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-bulma">Participamos en la realización de la tarea y asumimos con responsabilidad el trabajo.</td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                    </tr>
                    <tr>
                      <td className="bgc-draco f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-bulma">Si alguien del grupo pide apoyo, intentamos ayudar antes de preguntar al profesor.</td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                    </tr>
                    <tr>
                      <td className="bgc-draco f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-bulma">Respetamos el turno de palabra.</td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                    </tr>
                    <tr>
                      <td className="bgc-draco f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-bulma">Llegamos a acuerdos y decisiones compartidas después de que cada uno dio su opinión.</td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                      <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                    </tr>
                  </tbody>
                </table>
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

export default Page020;
