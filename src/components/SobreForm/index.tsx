import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";

import {WhatsappLogo} from 'phosphor-react';





export function SobreForm() {




    return (
        <>           
            <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
                <span className="text-xs text-neutral-400 top-4 p-6">
                    Rancho MHM - VOTUPORANGA/SP - criando desde 2010
                </span>
                <div>⭐️ ⭐️ ⭐️ Estamos em Construção!!! ⭐️ ⭐️ ⭐️</div>
                <footer className="text-xs text-neutral-400 top-10 m-4">
                    Página com a finalidade de ajudar o amante do cavalo a organizar<p/> as vacinas e calendário de prenhez dos seus animais!
                </footer>  
                       
                <WhatsappLogo /> <a className="underline underline-offset-2" href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5517997694006&e=ATOPV6jXC-Gw5ylh28R_z4Dl4eB7wW83OQn2Ae6YPhPXIAVkRzd7NHHWodQthErZ-zm_yxazl0nWnOxei8vsFug&s=1/">{`(17) 99769-4006`}</a>                           
                <footer className="text-xs text-neutral-400  bottom-0 p-6">
                    Desenvolvido por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/murilomenegasso/">Murilo Henrique Menegasso</a>                                       
                </footer> 
            </div>
        </>

    )
}