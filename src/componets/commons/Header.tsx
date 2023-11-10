import Link from "next/link"

export default function Header(){
    return(
             <header>
            <Link href={"/"}>
                <img src="https://cdn-icons-png.flaticon.com/512/8142/8142622.png" alt="Icone da letra J, Logo de josuel"/>
            </Link>
            <nav>
                <Link href={"/"}>Sobre mim</Link>
                {/* <Link href={"/portifolio"}>Portifolio</Link> */}
                <Link href={"/contatos"}>Entre em contato</Link>
            </nav>
        </header>
      
    )
}