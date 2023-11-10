import Link from "next/link";

export default function error404(){
    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-red-800">404 error</h1>
            <div>
            <p>Esta pagina nao pode ser encontrada!</p>
            <span>Clique no botao abaixo para voltar a pagina inicial</span>
            </div>
            <Link href={"/"}>ir para a pagina inicial</Link>
        </div>
    )
}