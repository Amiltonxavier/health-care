import React from 'react'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

export function VerifyOTP() {
    return (
        <Dialog>
            <DialogTrigger >Verificar OTP</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <InputOTP
                        maxLength={6}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            {/* ... */}
                        </InputOTPGroup>
                    </InputOTP>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
