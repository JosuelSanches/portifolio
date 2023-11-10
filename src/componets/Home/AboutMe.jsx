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
                <li style={{ backgroundColor: '#6BDDFA', color: '#000000' }}>react</li>
                <li style={{ backgroundColor: '#EFD81D', color: '#000000' }}>javascript</li>
                <li style={{ backgroundColor: '#000000', color: '#ffffff' }}>next-js</li>
            </ul>
        </div>
        <div>
            <img src="https://avatars.githubusercontent.com/u/107212505?s=400&u=01e853216987527b9a033e242b05358e07bf3ca3&v=4" alt="Foto de Perfil de Josuel. Homem, cabelo preto"/>
            <p>Oitavo semestre</p>  
            <br />
            Faculdade de Sistemas de Informacao         
        </div>
    </main>
    )
}