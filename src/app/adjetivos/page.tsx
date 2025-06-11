"use client"

import Image from "next/image";
import { useState } from "react";

const Adjetivos = () => {
    const [modalUrl, setModalUrl] = useState<string | null>(null);
    const urls = [
        "/Adjetivos/adj_1.png",
        "/Adjetivos/adj_2.png",
        "/Adjetivos/adj_3.png",
        "/Adjetivos/adj_4.png",
        "/Adjetivos/adj_5.png",
        "/Adjetivos/adj_6.png",
        "/Adjetivos/adj_7.png",
        "/Adjetivos/adj_8.png",
        "/Adjetivos/adj_9.png",
        "/Adjetivos/adj_10.png",
        "/Adjetivos/adj_11.png",
        "/Adjetivos/adj_12.png",
        "/Adjetivos/adj_13.png",
        "/Adjetivos/adj_15.png",
        "/Adjetivos/adj_16.png",
        "/Adjetivos/adj_17.png",
        "/Adjetivos/adj_18.png",
        "/Adjetivos/adj_19.png",
        "/Adjetivos/adj_20.png",
        "/Adjetivos/adj_21.png",
        "/Adjetivos/adj_22.png",
        "/Adjetivos/adj_23.png",
        "/Adjetivos/adj_24.png",
        "/Adjetivos/adj_25.png",
        "/Adjetivos/adj_26.png",
        "/Adjetivos/adj_27.png",
        "/Adjetivos/adj_28.png",
        "/Adjetivos/adj_29.png",
        "/Adjetivos/adj_30.png",
        "/Adjetivos/adj_31.png",
        "/Adjetivos/adj_32.png",
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
                                    alt="Adjetivos"
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

export default Adjetivos;