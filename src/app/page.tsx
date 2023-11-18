// Importando módulos necessários
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { RedirectType } from "next/navigation"

// Componente funcional da página Home
export default async function Home() {
  // Inicializando a variável para verificar se o usuário está logado
  let loggedIn = false

  try {
    // Criando uma instância do cliente Supabase usando os cookies da requisição
    const supabase = createServerComponentClient({ cookies })

    // Obtendo a sessão de autenticação do usuário
    const {
      data: { session }
    } = await supabase.auth.getSession()

    // Se a sessão existe, o usuário está logado
    if (session) loggedIn = true
  } catch (error) {
    // Lidando com erros e registrando no console
    console.log("Home", error)
  } finally {
    // Redirecionando para a página "/user-app" se o usuário estiver logado
    if (loggedIn) redirect("/user-app", RedirectType.replace)
  }

  // Retornando o conteúdo da página
  return (
    <div>Eliel Diniz</div>
  )
}
