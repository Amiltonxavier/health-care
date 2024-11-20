import { AlertTriangle, CalendarCheck, Check, Hourglass } from 'lucide-react'
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from '@/components/ui/button'
import { DialogSchedule } from '@/app/components/dialog/dialog'


export default function Dashboard() {

  return (
    <div className='space-y-8 px-14'>
      <div className='space-y-2'>
        <h1 className='text-2xl font-semibold text-white'>Bem-vindo, Admin</h1>
        <p className='text-white'>Comece o dia gerenciando novos compromissos</p>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        <div className='overflow-hidden relative bg-gradient-to-r from-[#D7EDED]/15 to-[#CCEBEB]/0  w-full space-y-3 rounded-lg  max-w-sm  px-6 py-8 text-white'>
          <div className='flex items-center gap-2'>
            <CalendarCheck className='h-6 w-6 backdrop-blur-lg  text-yellow-400' />
            <h2 className='text-2xl font-semibold text-white'>94</h2>
          </div>
          <p className='text-sm font-semibold text-gray-200'>Número total de consultas agendadas</p>
          <div className="absolute inset-0 top-4 bg-gradient-to-r from-yellow-400/20 to-transparent opacity-50 blur-2xl" />
        </div>
        <div className='overflow-hidden relative bg-gradient-to-r from-[#D7EDED]/15 to-[#CCEBEB]/0  w-full space-y-3 rounded-lg  max-w-sm  px-6 py-8 text-white'>
          <div className='flex items-center gap-2'>
            <Hourglass className='h-6 w-6 backdrop-blur-lg  text-blue-400' />
            <h2 className='text-2xl font-semibold text-white'>32</h2>
          </div>
          <p className='text-sm font-semibold text-gray-200'>Número total de consultas pendentes</p>
          <div className="absolute inset-0 top-4 bg-gradient-to-r from-blue-400/20 to-transparent opacity-50 blur-2xl" />
        </div>
        <div className='overflow-hidden relative bg-gradient-to-r from-[#D7EDED]/15 to-[#CCEBEB]/0  w-full space-y-3 rounded-lg  max-w-sm  px-6 py-8 text-white'>
          <div className='flex items-center gap-2'>
            <AlertTriangle className='h-6 w-6 backdrop-blur-lg  text-rose-400' />
            <h2 className='text-2xl font-semibold text-white'>56</h2>
          </div>
          <p className='text-sm font-semibold text-gray-200'>Número total de consultas cancelados</p>
          <div className="absolute inset-0 top-4 bg-gradient-to-r from-rose-400/20 to-transparent opacity-50 blur-2xl" />
        </div>
      </div>
      <div className='rounded-md border border-[#1A1D21]'>
        <Table>
          <TableHeader>
            <TableRow className='border-[#1A1D21] bg-none'>
              <TableHead className='font-medium py-4'>Paciente</TableHead>
              <TableHead className='font-medium py-4'>Date</TableHead>
              <TableHead className='font-medium py-4'>Estado</TableHead>
              <TableHead className='font-medium py-4'>Doutor</TableHead>
              <TableHead className="text-left font-medium py-4 w-[200px]">Ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index} className={`border-[#1A1D21] text-white ${index % 2 === 0 ? "bg-[#1C2023]" : ""}`}>
                  <TableCell className="font-medium py-4">
                    <div className='flex items-center gap-2'>
                      <span className='w-6 h-6 rounded-full p-4 flex items-center justify-center bg-emerald-500'>PB</span>
                      <span className='font-medium'>Phoenix Baker</span>
                    </div>
                  </TableCell>
                  <TableCell className='py-4'>Jan 4, 2022</TableCell>
                  <TableCell>
                    <span className='bg-[#0D2A1F] flex items-center gap-2 rounded-full justify-center max-w-36 px-2 py-1'>
                      <Check className='w-5 h-5 text-[#24AE7C]' />
                      <span className='text-[#24AE7C] tracking-normal'>
                        Agendado
                      </span>
                    </span>
                  </TableCell>
                  <TableCell className="text-right py-4">
                    <div className='flex items-center gap-2'>
                      <span className='w-6 h-6 rounded-full p-4 flex items-center justify-center bg-zinc-50'>DM</span>
                      <span>Dr. Michael May</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right py-4 w-[200px]">
                    <DialogSchedule />
                    {/* <Button variant="ghost" className='text-emerald-500 hover:text-emerald-500'>
                      Agendar
                    </Button> */}
                    <Button variant="ghost" className='text-white'>Cancelar</Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>

    </div>
  )
}
