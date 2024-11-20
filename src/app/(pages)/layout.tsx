import React, { ReactNode } from 'react'


export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className='bg-deep-dark mx-auto min-h-screen w-full max-w-[1900px]'>
            {children}
        </div>

    )
}