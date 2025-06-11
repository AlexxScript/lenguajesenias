"use client"

import Image from "next/image";
import { useState } from "react";

const Abecedario = () => {

    const [modalUrl, setModalUrl] = useState<string | null>(null);

    const urls = [
        "/Abecedario/abc_1.png",
        "/Abecedario/abc_2.png",
        "/Abecedario/abc_3.png",
        "/Abecedario/abc_4.png",
        "/Abecedario/abc_5.png",
        "/Abecedario/abc_6.png",
        "/Abecedario/abc_7.png",
        "/Abecedario/abc_8.png",
        "/Abecedario/abc_9.png",
        "/Abecedario/abc_10.png",
        "/Abecedario/abc_11.png",
        "/Abecedario/abc_12.png",
        "/Abecedario/abc_13.png",
        "/Abecedario/abc_15.png",
        "/Abecedario/abc_16.png",
        "/Abecedario/abc_17.png",
        "/Abecedario/abc_18.png",
        "/Abecedario/abc_19.png",
        "/Abecedario/abc_20.png",
        "/Abecedario/abc_21.png",
        "/Abecedario/abc_22.png",
        "/Abecedario/abc_23.png",
        "/Abecedario/abc_24.png",
        "/Abecedario/abc_25.png",
        "/Abecedario/abc_26.png",
        "/Abecedario/abc_27.png",
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
                                    alt="Abecedario"
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

export default Abecedario;