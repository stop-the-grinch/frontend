"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button";
import Frosty from "../sprites/frosty";

export default function JoinView({ joinGame }) {

    const [joinCode, setJoinCode] = useState("");

    return (
        <Card>
            <CardHeader>
                <CardTitle>Join a game!</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <InputOTP maxLength={6} value={joinCode} onChange={setJoinCode} autoFocus>
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
                <Button disabled={joinCode.length !== 6} onClick={() => joinGame(joinCode)}>Join</Button>
            </CardContent>
        </Card>
    );
}