import Image from "next/image";
import Link from "next/link";

export default function AboutMe(){
    return(
    <main className={`flex flex-wrap-reverse justify-center items-center
     gap-10 md:gap-32 py-8 text-lg xl:text-left xl:flex-nowrap
     xl:justify-between`}>
        <div className={`text-white flex flex-col items-center
        xl:items-start gap-4 w-full xl:w-120 `}>
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
            <Image src="https://avatars.githubusercontent.com/u/107212505?s=400&u=01e853216987527b9a033e242b05358e07bf3ca3&v=4" 
            width={500} height={500}
            alt="Foto de Perfil de Josuel. Homem, cabelo preto"
            unoptimized
            />
            <p>Oitavo semestre</p>  
            <br />
            Faculdade de Sistemas de Informacao         
        </div>
    </main>
    )
}