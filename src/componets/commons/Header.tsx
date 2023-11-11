import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
             <header>
            <Link href={"/"}>
                <Image src="https://svgsilh.com/svg/3273204.svg" width={55} height={55} alt="Icone da letra J, Logo de josuel"/>
            </Link>
            <nav>
                <Link href={"/"}>Sobre mim</Link>
                {/* <Link href={"/portifolio"}>Portifolio</Link> */}
                <Link href={"/contatos"}>Entre em contato</Link>
            </nav>
        </header>
      
    )
}