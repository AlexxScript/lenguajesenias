import Image from "next/image";

export default function Home() {
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {
          urls.map((url, index)=>(
            <Image
              key={index}
              src={url}
              alt="Next.js logo"
              width={180}
              height={38}
            />
          ))
        } 
       
      </main>
    </div>
  );
}
