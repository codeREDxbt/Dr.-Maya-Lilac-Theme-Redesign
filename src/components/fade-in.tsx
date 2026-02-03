"use client";

import { motion } from "motion/react";
import React from "react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = "up"
}: FadeInProps) {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Smooth custom easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInStagger({
    children,
    className,
    staggerDelay = 0.1
}: {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: "easeOut"
                    }
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
