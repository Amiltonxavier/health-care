'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export function DialogSchedule() {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>Agendar</DialogTrigger>
            <DialogContent className='bg-deep-dark border-[#1A1D21]'>
                <DialogHeader>
                    <DialogTitle className='text-white'>Agendar Consulta</DialogTitle>
                    <DialogDescription>Por favor, preencha os seguintes detalhes para agendar</DialogDescription>
                </DialogHeader>
                <form action="" className='space-y-4'>
                    <div className="space-y-2">
                        <Label htmlFor="fullname" className="text-zinc-200 tracking-normal">Doutor</Label>
                        <Input type="text" placeholder="Nome Completo" className="h-11 text-white text-base border-zinc-700 focus-within:ring-emerald-500 outline-none" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="fullname" className="text-zinc-200 tracking-normal">Motivo da consulta</Label>
                        <Textarea className='text-white text-base border-zinc-700 focus-within:ring-emerald-500 outline-none' placeholder="ex: check-up mensal anual" />

                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="fullname" className="text-zinc-200 tracking-normal">Data prevista para a consulta</Label>
                        <Input type="datetime-local" placeholder="Selecione a data da sua consulta" className="h-11 text-white text-base border-zinc-700 focus-within:ring-emerald-500 outline-none" />
                    </div>
                    <Button className='w-full bg-emerald-500 text-white'>Agendar consulta</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
