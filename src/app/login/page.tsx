import  Style  from "./Login.module.css"
import Image from "next/image"
import Link from 'next/link'

export default function Login(){
    return(
        <section className={Style.Container}>
            <section className="flex justify-center">
                <div className={Style['rectangle-2']}>
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
                    
                    <div className={`${Style['rectangle-1']} mb-3.5`}>
                        <form action="" method="post" className={Style.form}>
                            <div>
                                <label htmlFor="">E-mail</label><br/>
                                <input type="email" name="email" id="email" placeholder="E-mail" className={Style.formEmail}/><br/> 
                            </div>
                            <div>
                                <label htmlFor="">Senha</label><br/>
                                <input type="password" name="senha" id="senha" placeholder="Senha" className={Style.formSenha}/><br/>
                            </div>
                        </form>

                        <div className={Style.buttonEnter}>
                            <button>
                                Entrar
                            </button>
                        </div>
                        
                        <div className={Style.buttonCreated}>
                        <Link href="/createdacout">
                            <button>
                                    Criar conta  
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
       
    )
     
}