"use client"

import { Button, Card, Input } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useToast } from "@/hooks/use-toast";
import { Snowflake } from "lucide-react";

import Image from "next/image";
import JoinView from "./views/join";
import NameView from "./views/name";
import useWebSocket, { ReadyState } from 'react-use-websocket';

export default function Home() {

    const [user, setUser] = useState(null);
    const [gameState, setGameState] = useState(null);
    const [timeLeft, setTimeLeft] = useState("");
    const [view, setView] = useState(0);
    const { toast } = useToast()

    function formatTime(milliseconds) {
        const totalSeconds = milliseconds / 1000;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);

        if (seconds < 10) {
            return `${minutes}:0${seconds}`;
        } else {
            return `${minutes}:${seconds}`;
        }
    }

    const socketUrl = user ? `${process.env.NEXT_PUBLIC_SOCKET_URL}/${user.id}/${user.name}` : null;
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, { shouldReconnect: (closeEvent) => user != null });

    useEffect(() => {
        if (lastMessage !== null) {
            console.log(lastMessage)
        }
    }, [lastMessage]);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    useEffect(() => {
        const cachedUser = localStorage.getItem("gameUser")
        if (cachedUser !== null) {
            setUser(JSON.parse(cachedUser))
            setView(2)
        } else {
            setView(1)
        }
    },
        [])

    return (
        <div className="relative w-full h-full flex justify-center items-center">

            {[
                (
                    <Snowflake className="animate-spin" size={64} />
                ),
                (
                    <NameView setUser=
                        {(id, name) => {
                            const user = { id, name }
                            localStorage.setItem("gameUser", JSON.stringify(user))
                            setUser(user)
                            setView(2)
                            toast({
                                duration: 2000,
                                title: `Created user ${name}`,
                            })
                        }}
                    />
                ),
                (
                    <JoinView joinGame=
                        {
                            (gameCode) => {
                                sendMessage(JSON.stringify({ type: "join", data: { code: gameCode } }))
                                setView(3)
                            }
                        } />
                ),

            ][view]
            }
        </div >

    );
}
