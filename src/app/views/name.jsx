import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

export default function NameView({ setUser }) {

    async function createUser() {
        const uuid = uuidv4()
        console.log(uuid)

        setUser(uuid, name)
    }

    const [name, setName] = useState("");

    return (
        <Card>
            <CardHeader>
                <CardTitle className="w-full text-center">Enter your name!</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <Input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                        if (name && e.key === "Enter") {
                            createUser()
                        }
                    }}
                />
                <Button disabled={!name} onClick={createUser}>Submit</Button>
            </CardContent>
        </Card>
    );
}