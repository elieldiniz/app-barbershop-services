import Image from "next/image"
import  Style  from "./style/Img.module.css"

export default function Imagen(){
    return(
        <header className={Style.header}>
                        <h1 className={Style.title}>
                            <Image
                            src="/BarbeR.png"
                            alt="Descrição da imagem"
                            width={450}
                            height={20}
                            />
                        </h1>
                    </header>
    )
}