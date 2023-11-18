'use client'

import  Style  from "./style/Form.module.css"
import Link from 'next/link'

import * as z from "zod"
import { useForm } from "react-hook-form";


export default function Form(){

    return(
        <div className={`${Style.conteiner} mb-3.5`}>
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
    )
}