import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { LogOut } from "lucide-react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";


export default function GameView({ user, gameState, sendMessage }) {
    const { toast } = useToast()
    if (!gameState) return

    const players = []

    if (gameState.p1) {
        players.push(gameState.p1FriendlyName);
    }

    if (gameState.p2) {
        players.push(gameState.p2FriendlyName);
    }

    async function startGame() {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/start-game/${gameState.id}`).catch(e => {
            console.log(e)
            toast({
                duration: 5000,
                variant: "destructive",
                title: "Error Starting Game",
                description: e?.response?.data?.detail
            })
        })
    }

    async function leaveGame() {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/leave-game/${user.id}`).catch(e => {
            console.log(e)
            toast({
                duration: 5000,
                variant: "destructive",
                title: "Error Leaving Game",
                description: e?.response?.data?.detail
            })
        })
    }

    return (
        gameState.state == "LOBBY" ? (
            <Card>
                <CardHeader>
                    <CardTitle className="w-full text-center">Game Lobby</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 items-center">
                    <p className="font-bold text-3xl tracking-[0.5em]" >{gameState.id.slice(0, 3)}-{gameState.id.slice(3)}</p>

                    <div className="flex flex-col items-center">
                        <p className="text-lg">Players: {players.length} / 2</p>
                        <p>{players.join(", ")}</p>
                    </div>
                </CardContent>
                <CardFooter className="flex w-full gap-2">
                    <Button variant="destructive" size="icon" onClick={leaveGame}><LogOut /></Button>
                    <Button className="flex-1" onClick={startGame} disabled={players.length !== 2}>Start Game</Button>
                </CardFooter>
            </Card>
        ) : (
            <div className="flex flex-col gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="w-full text-center">Santa</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="w-full text-center">Game</CardTitle>
                    </CardHeader>
                </Card>
            </div>
        )

    );
}