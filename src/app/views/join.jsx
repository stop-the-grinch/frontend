"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button";
import Frosty from "../sprites/frosty";

export default function JoinView({ joinGame, createGame }) {
    const [joinCode, setJoinCode] = useState("");

    return (
        <Card>
            <CardHeader>
                <CardTitle className="w-full text-center">Join a game!</CardTitle>

            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <div className="flex flex-col gap-4 w-full">
                    <InputOTP maxLength={6} value={joinCode} onChange={setJoinCode} onComplete={(code) => joinGame(code)} autoFocus>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                    <Button className="transition-all" disabled={joinCode.length !== 6} onClick={() => joinGame(joinCode)}>Join</Button>
                </div>

                <div className="flex w-full items-center gap-3">
                    <div className="h-[1px] w-full bg-muted flex-1" />
                    <p>or</p>
                    <div className="h-[1px] w-full bg-muted flex-1" />
                </div>
                <Button variant="secondary" onClick={createGame}>Create lobby</Button>
            </CardContent>
        </Card >
    );
}