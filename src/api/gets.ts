'use server'

export async function getLogin(username: string, password: string) {
  try {
    console.log(`Usuário: ${username} \nSenha: ${password}`)

    return {msg: "recebido"}
  } catch(err) {
    console.log("Erro:", err)
    return {msg: err}
  }
}