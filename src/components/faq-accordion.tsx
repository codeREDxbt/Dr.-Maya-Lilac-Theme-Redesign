"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="grid gap-4 max-w-3xl mx-auto">
            {items.map((faq, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white/70 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 overflow-hidden"
                >
                    <button
                        onClick={() => toggleItem(i)}
                        className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4 hover:bg-white/30 transition-colors duration-200"
                        aria-expanded={openIndex === i}
                    >
                        <h3 className="text-base sm:text-lg font-serif font-medium text-[var(--color-text)]">
                            {faq.question}
                        </h3>
                        <motion.span
                            animate={{ rotate: openIndex === i ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[var(--color-accent)] text-xl font-light"
                        >
                            +
                        </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                                    <p className="text-body text-[var(--color-text-muted)] leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
}
