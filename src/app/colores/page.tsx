"use client"

import Image from "next/image";
import { useState } from "react";

const Colores = () => {
    const [modalUrl, setModalUrl] = useState<string | null>(null);
    const urls = [
        "/Colores/archivo_1.png",
        "/Colores/archivo_2.png",
        "/Colores/archivo_3.png",
        "/Colores/archivo_4.png",
        "/Colores/archivo_5.png",
        "/Colores/archivo_6.png",
        "/Colores/archivo_7.png",
        "/Colores/archivo_8.png",
        "/Colores/archivo_9.png",
        "/Colores/archivo_10.png",
        "/Colores/archivo_11.png",
        "/Colores/archivo_12.png",
        "/Colores/archivo_13.png",
        "/Colores/archivo_15.png",
        "/Colores/archivo_16.png",
        "/Colores/archivo_17.png",
        "/Colores/archivo_18.png",
        "/Colores/archivo_19.png",
        "/Colores/archivo_20.png",
        "/Colores/archivo_21.png",
    ]
    return (
        <div className="">
            <main className="">
                <article className="max-w-full w-[75%] mx-auto flex justify-center items-center ">
                    <section
                        className="flex flex-wrap gap-5"
                    >
                        {
                            urls.map((url, index) => (
                                <Image
                                    key={index}
                                    src={url}
                                    alt="Colores"
                                    width={180}
                                    height={38}
                                    className="cursor-pointer rounded hover:scale-105 transition-transform"
                                    onClick={() => setModalUrl(url)}
                                />
                            ))
                        }
                        {modalUrl && (
                            <div
                                className="fixed inset-0 bg-[#313131dc] bg-opacity-70 flex items-center justify-center z-50"
                                onClick={() => setModalUrl(null)}
                            >
                                <div className="relative max-w-[50%]">
                                    <Image
                                        src={modalUrl}
                                        alt="Vista ampliada"
                                        width={1000}
                                        height={1000}
                                        className="rounded object-contain max-h-[90vh]"
                                    />
                                    <button
                                        onClick={() => setModalUrl(null)}
                                        className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        )}
                    </section>
                </article>
            </main>
        </div>
    );

}

export default Colores;