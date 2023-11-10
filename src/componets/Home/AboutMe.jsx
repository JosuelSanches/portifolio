import Link from "next/link";

export default function AboutMe(){
    return(
    <main>
        <div>
            <h1>Ola, sou &nbsp;</h1>
            <span>Josuel</span>
            <div>
                <h2>Sou um desenvolvedor Next-js</h2>
                <Link href="/contatos">Entre em contato!</Link>
            </div>
            <ul>
                <li style={{ backgroundColor: '#2F74C0', color: '#ffffff' }}>typescript</li>
            </ul>
        </div>
    </main>
    )
}