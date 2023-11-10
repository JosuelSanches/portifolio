import Head from "next/head";


export default function contatos(){
    return(
        <>
        <Head>
            <title>
                Contatos | Josuel
            </title>
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-between p-24" >
    
            <h1>Contatos</h1>                                        
            <ul>
                <li>
                    <span>E-mail</span>
                    <div>
                        <a href="mailto: Josuel - josueldesouzasanches@gmail.com">
                        Josuel - josueldesouzasanches@gmail.com</a>
                    </div>
                </li>
                <li>
                    <span>LinkedIn</span>
                    <div>
                        <a href="https://www.linkedin.com/in/josuel-sanches-9ab3431a0/">
                            https://www.linkedin.com/in/josuel-sanches-9ab3431a0/</a>
                    </div>
                </li>
                <li>
                    <span>GitHub</span>
                    <div>
                        <a href="https://github.com/JosuelSanches">
                            https://github.com/JosuelSanches</a>
                    </div>
                </li>
                
            </ul>
        </main>
        </>
    )
}