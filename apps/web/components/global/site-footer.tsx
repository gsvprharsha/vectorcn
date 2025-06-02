import Link from "next/link";
import React from "react";

export default function SiteFooter() {
    return (
        <footer className="border-t border-dashed bg-white py-5 dark:bg-transparent">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm ml-4">
                        © 2025 vectorcn
                    </span>
                    <div className="text-sm mr-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary duration-150">
                            <span>GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
