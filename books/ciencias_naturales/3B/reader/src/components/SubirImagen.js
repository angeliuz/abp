import React, { useEffect } from 'react';
import { useState, useRef } from "react";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";

import db from "../firebase/firebaseConfig";
import { app } from "../firebase/firebaseConfigStorage";
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'


const SubirImagen = (props) => {

    const dokenArray = getUrlParameter("doken").split([',']);
    //console.log(dokenArray[1]);

    const coleccion = "dataUsers";
    const documento = dokenArray[0] + dokenArray[1];
    const docRef = doc(db, coleccion, documento);


    // const image = props.image;
    const id = props.id;
    const pagina = props.pagina;
    const colorUnidad = props.colorUnidad;
    const className = props.className;
    const imagenPlaceHolder = props.imagenPlaceHolder1;
    const imagenPlaceHolder2 = props.imagenPlaceHolder2;
    const imagenCargador = "images/generales/progress2.gif";

    const [titulo, setTitulo] = useState(props.titulo);
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const [visible, setVisible] = useState(false);
    const [visibleCargador1, setVisibleCargador1] = useState(true);

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const fileUpload = useRef(null);

    // replace character from string with a space
    const replaceCharacter = (str, char, replacement) => {
        return str.split(char).join(replacement);
    }

    var temp = replaceCharacter(String(props.id), 'imagen', '');
    temp = replaceCharacter(temp, '_', '');



    function removeZeros(pagina) {
        let num = pagina;
        num = num.toString();
        num = num.replace(/^0+/, '');
        return num;
    }

    const matrizLibros = {
        libros: {
            2070: "A",
            2068: "B",
            2082: "C",
            2084: "D",
            2065: "E",
            2079: "F",
            2066: "G",
            2088: "H"
        }
    };
    const matrizIndice = {
        libros: {
            1: "A",
            2: "B",
            3: "C",
            4: "D",
            5: "E",
            6: "F",
            7: "G",
            8: "H",
            9: "I",
            10: "J"
        }
    };

    const idQR = dokenArray[0] + matrizLibros.libros[dokenArray[1]] + removeZeros(temp.slice(0, 3)) + matrizIndice.libros[temp.slice(3, temp.length)];

    console.log("idQR pagina: " + temp.slice(0, 3));
    console.log("idQR indice: " + temp.slice(3, temp.length));

    console.log("idQR: " + id);
    console.log("idQR: " + dokenArray[0] + matrizLibros.libros[dokenArray[1]] + removeZeros(temp.slice(0, 3)) + matrizIndice.libros[temp.slice(3, temp.length)]);

    // firestore get data for check
    useEffect(() => {
        onSnapshot(docRef, (docSnap) => {

            if (docSnap.exists()) {
                console.log("url Existe");
                const field = docSnap.data()[idQR];
                //console.log("url Current data: ", docSnap.data()[idQR]);
                if (field) {
                    if (url != field) {
                        setUrl(field);
                        console.log("Existe field distinto a url ", url);
                    } else {
                        console.log("Existe field igual a  url ", url);
                        //setUrl("");
                    }

                    console.log("url Existe field: " + docSnap.data()[idQR]);
                } else {
                    //setUrl(url);
                    console.log("url Actualizar contenido");
                }
            } else {
                console.log("url No existe");


            }
        });
    }, [visible, url]);

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };


    const updateContenido = (url) => {
        //console.log("content1: " + data);
        console.log("url: ", url);
        updateDoc(docRef, {
            [idQR]: url
            // [id + "_QR"]: idQR,
        }).then(function () {
            setUrl(url);
            console.log("url Documento actualizado");
        });
    }
    const updateContenido2 = (url) => {
        //console.log("content1: " + data);
        console.log("url: ", url);
        updateDoc(docRef, {
            [idQR]: url
            // [id + "_QR"]: idQR,
        }).then(function () {

            handleClose();
            console.log("url Documento actualizado 2");
        });
    }

    const handleClick = () => {

        fileUpload.current.click();
    }


    const handleChange = (e) => {
        console.log(e.target)
        setVisibleCargador1(true);
        if (e.target.files[0]) {
            setImage(e.target.files[0]);

            handleUpload(e.target.files[0]);
        }
        console.log(e.target.files[0])
        //console.log(fileUpload)
    }

    const handleUpload = async (image) => {
        console.log("url Image Type: ", image.type)

        if ((image.type === "image/jpeg" || image.type === "image/png" || image.type === "image/gif" || image.type === "image/jpg" || image.type === "image/svg+xml" || image.type === "image/webp" || image.type === "image/bmp")
            &&
            (image.size <= 5000000)) {

            let nombreImagen = dokenArray[0] + "_" + dokenArray[1] + "_" + id;
            const uploadTask = app.storage().ref(`images/${nombreImagen}`).put(image);

            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );

                    setUrl(url);
                    setProgress(progress);
                    setVisible(true);
                },
                error => {
                    console.log(error);
                },
                () => {
                    app.storage()
                        .ref("images")
                        .child(nombreImagen)
                        .getDownloadURL()
                        .then(url => {
                            setUrl(url);
                            // setUrl(url);
                            updateContenido2(url);
                            setProgress(0);
                            setVisible(false);
                            console.log("url storage: ", url)

                        });
                }
            );
        } else {
            console.log("url LA IMAGEN NO CUMPLE CON LOS REQUISITOS");
        }
    };



    function handleShow(breakpoint) {
        setVisibleCargador1(true);
        updateContenido(url);
        setFullscreen(breakpoint);
        setShow(true);
    }

    const handleClose = () => setShow(false);

    const styles = {
        modalHeader: {
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "9px 9px 0px 0px"

        },
        modalBody: {
            margin: "0px",
            padding: "0px",
            borderRadius: "15px",
            minHeight: "75vh",
            borderRadius: "0px 0px 10px 10px",
            backgroundColor: "white"
        },
        modalTitle: {
            fontSize: "17px",
        }
    };
    return (
        <>
            <div className={className} id={"subirimagen_" + id} onClick={handleShow}>

                {url === "" ? (<img src={imagenPlaceHolder} alt="Subir imagen" className={url == "" ? "d-flex w-100 position-relative" : "d-none"} role="button" />) : (visibleCargador1 ? (<img src={imagenCargador} className={"d-flex w-100 position-relative zindex-10"} alt="" />) : null)}

                {url != "" ? <img src={url} alt="Subir imagen" className={visibleCargador1 ? "d-none" : "d-flex w-100 position-relative"} role="button" onLoad={() => setVisibleCargador1(false)} /> : null}

            </div>

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered={true}
            >
                <Modal.Header className={"color-white boton-close-white " + colorUnidad} style={styles.modalHeader}>
                    <Modal.Title id="contained-modal-title-vcenter" className="f-Ubuntu-M fsp-20 color-white" style={styles.modalTitle}>{titulo}</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center align-items-start bgc-white" style={styles.modalBody}>

                    <div className="d-flex mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 w-100">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 mbp-30 position-relative d-flex center-center">
                                <div className="d-flex align-items-center w-100  mtp-20 msp-10 mep-10 rounded-p-15 position-relative pep-5 psp-5 fsp-15 f-Ubuntu-M bgc-jaga">
                                    <div className="row ">
                                        <div className="col-lg-6 col-xs-12 d-flex align-items-center">
                                            <div className="p-2 flex-fill">
                                                <img src="images/generales/celular.png" alt="icono celular" />
                                            </div>


                                            <div className="p-2 flex-fill text-start">
                                                Puedes subir directamente la imagen de la actividad desde tu computador. También puedes tomar una fotografía con tu celular y cargarla en <strong>https://abp.smconecta.cl</strong>  ingresando el siguiente código.
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-xs-12 text-center ptp-20 pbp-5 d-flex align-items-center">
                                            <div className="bgc-white flex-fill psp-20 pep-20 ptp-10 pbp-10 rounded-p-20 border-style-solid border-color-dark border-2 fsp-25">
                                                {idQR}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-12 mbp-30 position-relative d-flex center-center">
                                <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 visible-768 zindex-1">
                                    <progress value={progress} max="100" className={"d-none"} />
                                    {(visibleCargador1 ? (<img src={imagenCargador} className={"d-flex w-100 hp-270 position-relative zindex-10"} alt="" />) : null)}
                                </div>

                                <div className="d-flex hp-300 bgc-red"></div>

                                {url != "" ? <img src={url} alt="Subir imagen" className={visibleCargador1 ? "d-none" : "d-flex w-100 position-relative"} onClick={handleClick} role="button" onLoad={() => setVisibleCargador1(false)} /> : <img src={imagenPlaceHolder2} alt="Subir imagen" className={"d-flex w-100 position-relative"} onClick={handleClick} role="button" onLoad={() => setVisibleCargador1(false)} />}

                            </div>
                            <div className="col-12 p-0 m-0 position-relative d-flex center-center">
                                <input type="file" onChange={handleChange} id={id} ref={fileUpload} style={{ display: "none" }} accept="image/*" />
                                <div className={"d-flex center-center w-80 color-white f-Ubuntu-B text-uppercase p-2 rounded-p-20 user-select-none mbp-20 " + colorUnidad} role="button" onClick={handleClick}>Subir imagen</div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default SubirImagen;
