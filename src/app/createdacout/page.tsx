import  Style  from "./Acout.module.css"
import Image from "next/image"

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
                                <label htmlFor="">password</label><br/>
                                <input type="password" name="senha" id="senha" placeholder="password" className={Style.formSenha}/><br/>
                            </div>
                            <div>
                                <label htmlFor="">confirm password</label><br/>
                                <input type="password" name="confirmpassword" id="confirmpassword" placeholder="confirm password" className={Style.formSenha}/><br/>
                            </div>
                        </form>

                        <div className={Style.buttonCreated}>
                            <button>
                                Criar conta
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
       
    )
     
}