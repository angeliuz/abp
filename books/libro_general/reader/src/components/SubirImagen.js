import React, { useEffect } from 'react';
import { useState } from "react";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";

import db from "../firebase/firebaseConfig";
import { app } from "../firebase/firebaseConfigStorage";

const SubirImagen = (props) => {

    const dokenArray = getUrlParameter("doken").split([',']);
    //console.log(dokenArray[1]);

    const coleccion = "dataUsers";
    const documento = dokenArray[0] + dokenArray[1];
    const docRef = doc(db, coleccion, documento);

    // const image = props.image;
    const id = props.id;
    const pagina = props.pagina;

    const [visible, setVisible] = useState(false);

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);


    // firestore get data for check
    useEffect(() => {
        getData();
    }, [visible]);

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    const getData = () => {
        const obtenerDatos = async () => {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const field = docSnap.data()[id];
                console.log("Current data: ", docSnap.data()[id]);
                if (field) {
                    setVisible(docSnap.data()[id]);
                    console.log("content1: " + visible);
                } else {
                    console.log("Sin datos: " + id);
                }
                //console.log("Document data:", docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                await setDoc(doc(db, coleccion, documento), { build: "1" });
                console.log("No such document!");
            }
        };
        obtenerDatos();
    }

    const updateContenido = () => {
        //console.log("content1: " + data);
        let estadoCheck = !visible; // Por alguna razón el componente no se actualiza antes de enviar a Firestore 
        updateDoc(docRef, {
            [id]: estadoCheck,
        });
    }



    const handleChange = (e) => {
        console.log(e.target)
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            handleUpload(e.target.files[0]);
        }
    }

    const handleUpload = async (image) => {
        console.log(image.name)


        const uploadTask = app.storage().ref(`images/${image.name}`).put(image);
        //const uploadTask = ref(storage, `images/${image.name}`)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                app.storage()
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    });
            }
        );
    };



    console.log("imagen: ", image)

    return (<div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange} id={id} />
        {/* <button onClick={handleUpload}>Subir imagen</button> */}
        <br />
        {url}
        <br />
        <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" className="w-100" />

    </div>);
}

export default SubirImagen;
