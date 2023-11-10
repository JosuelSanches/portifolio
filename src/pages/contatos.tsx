import Link from "next/link";

export default function contatos(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24" >
            <div>
                <h1>contatos</h1>
                <h2>josueldesouzasanches@gmail.com</h2>
                <h2>091991188082</h2>
                <h2>Cameta-pa</h2>
            </div>
            <Link href="/">Home</Link>
        </main>
    )
}