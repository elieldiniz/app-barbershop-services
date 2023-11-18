// Importando módulos necessários do Next.js e Supabase
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

// Função middleware responsável por lidar com as requisições
export async function middleware(req: NextRequest) {
    
    // Criando uma resposta do Next.js
    const res = NextResponse.next()

    try {
        // Criando uma instância do cliente Supabase utilizando as informações da requisição (req) e resposta (res)
        const supabase = createMiddlewareClient({ req, res })
        
        // Tentando obter a sessão de autenticação do usuário
        await supabase.auth.getSession()
    } catch (error) {
        // Lidando com erros e registrando no console
        console.log(error)
    }

    // Retornando a resposta do Next.js
    return res
}
