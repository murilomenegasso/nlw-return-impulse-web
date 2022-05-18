import { ChatTeardropDots, Horse, Syringe, Calendar, Info } from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';
import { SobreForm } from './SobreForm';
import { CalendarioPrenhezForm } from './CalendarioPrenhezForm';
import { AnimaisForm } from './AnimaisForm';
import { CarteirinhaVacinacaoForm } from './CarteirinhaVacinacaoForm';

export function Widget() {
    // Popover cuidado desse estado de abrir e fechar
    //
     const[isPanelAberto, setIsPanelAberto] = useState("feedback");

    // function toogleWidgetVisibility(){
    //     setIsWidgetOpen(!isWidgetOpen);
    // }

    return (
        <>
            <div className='relative top-3 left-3 bottom-4'>
                <span>Bem vindo ao RanchoMHM</span>
            </div>
            <Popover className='absolute bottom-4  md:bottom-8 md:left-8 flex flex-col items-start' >

                {/* <div className='absolute bottom-5 right-5'   Nao precisamos de DIV pq POPOVER faz tudo></div> */}
                {/* { isWidgetOpen && <p>Hello Word</p>}  por usar POPOVER não precisamos fazer if*/}
                {/* <p>Hello Word</p>  Popover cria Panel */}
                <Popover.Panel>
                    
                    <SobreForm />
                </Popover.Panel>
                <Popover.Button className='bg-blue-400 rounded-full px-3 h-12 text-white flex items-center group'>
                    {/* <button onClick={} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'> */}
                    <Info className='w-6 h-6' />
                    <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                        <span className='pl-2'></span>
                        Sobre
                    </span>
                </Popover.Button>

                {/* </button>             */}
                {/* </div> */}
            </Popover>
            {/* Popover 2 */}
            <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end' >

                {/* <div className='absolute bottom-5 right-5'   Nao precisamos de DIV pq POPOVER faz tudo></div> */}
                {/* { isWidgetOpen && <p>Hello Word</p>}  por usar POPOVER não precisamos fazer if*/}
                {/* <p>Hello Word</p>  Popover cria Panel */}
                <Popover.Panel>
                    {
                       isPanelAberto =='feedback'?  <WidgetForm />: isPanelAberto =='calendario'?
                         <CalendarioPrenhezForm />: isPanelAberto =='cadastroAnimais'? <AnimaisForm /> :
                         isPanelAberto =='carteirinhaVacinacao'? <CarteirinhaVacinacaoForm />:''
                    }
                  
                </Popover.Panel>
                <Popover.Button onClick={() => setIsPanelAberto("cadastroAnimais")} className='bg-orange-300 rounded-full px-3 h-12 text-white flex items-center group'>
                    {/* <button onClick={} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'> */}
                    <Horse className='w-6 h-6' />
                    <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                        <span className='pl-2'></span>
                        Cadastro de Animais
                    </span>
                </Popover.Button>

                <Popover.Button onClick={() => setIsPanelAberto("carteirinhaVacinacao")} className='bg-red-400 rounded-full px-3 h-12 text-white flex items-center group'>
                    {/* <button onClick={} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'> */}
                    <Syringe className='w-6 h-6' />
                    <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                        <span className='pl-2'></span>
                        Carteirinha de Vacinação
                    </span>
                </Popover.Button>
                <Popover.Button onClick={() => setIsPanelAberto("calendario")}  className='bg-green-600 rounded-full px-3 h-12 text-white flex items-center group'>
                    {/* <button onClick={() => setIsPanelAberto("calendario")}  className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group' /> */}
                   
                    <Calendar className='w-6 h-6' />
                    <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                        <span className='pl-2'></span>
                        Calendário de Prenhez
                    </span>
                </Popover.Button>
                <Popover.Button onClick={() => setIsPanelAberto("feedback")} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                    {/* <button onClick={} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'> */}
                    <ChatTeardropDots className='w-6 h-6' />
                    <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                        <span className='pl-2'></span>
                        Feedback
                    </span>
                </Popover.Button>
                {/* </button>             */}
                {/* </div> */}
            </Popover>
        </>

    )
}