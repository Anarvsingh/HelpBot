"use client";
import { Authenticated } from "convex/react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (<div>
        <Authenticated>
            <h1>Sidebar</h1>
        </Authenticated>
        <main>
        
        {children}
        </main>
            
        </div>
);
}