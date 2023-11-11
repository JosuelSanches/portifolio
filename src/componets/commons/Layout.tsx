
import {ReactNode} from "react"
import Header from "./Header";
import { JetBrains_Mono } from "next/font/google";

const jetBrains_mono = JetBrains_Mono({
    subsets: ['latin'],
    weight: '400'
})

interface LayoutProps{
    children: ReactNode;
}

export function Layout({children}: LayoutProps){
    return(
        <div className={jetBrains_mono.className}>
        <Header/>
        {children}
        </div>
    )
}