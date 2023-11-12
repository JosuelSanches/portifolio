import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: '500',

});

export default function Header(){
    return(
             <header className= {`${roboto.className} bg-blue-900 text-sm flex 
             py-3 px-5 justify-between items-center sticky top-0 z-20`}>
            <Link href={"/"}>
                <Image src="https://svgsilh.com/svg/3273204.svg" width={55} height={55} alt="Icone da letra J, Logo de josuel"/>
            </Link>
            <nav className="hidden md:flex items-center gap-10 text-blue-900">
                <Link href={"/"}>Sobre mim</Link>
                {/*<Link href="/portifolio">Portifolio</Link> */}
                <Link href={"/contatos"}> Entre em contato</Link>
            </nav>
        </header>
      
    )
}