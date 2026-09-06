"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import Link from "next/link";

const Upgrade = () => {
    const stripeLink =
        "https://buy.stripe.com/YOUR_PAYMENT_LINK"; // Replace with your Stripe Payment Link

    const handlePayment = () => {
        window.location.href = stripeLink;
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-4 py-20">
            <h1 className="text-4xl font-bold mt-3 text-slate-50">Upgrade</h1>

            <p className="text-slate-400 mt-2">
                Upgrade to monthly plan to access unlimited mock interview
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
                {/* Free Plan */}
                <div className="border border-slate-800 bg-slate-900 rounded-3xl p-10 w-[320px] shadow-xl">
                    <h2 className="text-center text-xl font-semibold mb-6 text-slate-100">
                        Free
                    </h2>

                    <div className="text-center mb-8">
                        <span className="text-5xl font-bold text-slate-50">0$</span>
                        <span className="text-slate-500"> /month</span>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-slate-300">
                            <Check size={18} className="text-sky-400" />
                            <span>Create 3 Free Mock Interview</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-300">
                            <Check size={18} className="text-sky-400" />
                            <span>Unlimited Retake Interview</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-600">
                            <X size={18} className="text-red-400" />
                            <span>Practice Question</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-600">
                            <X size={18} className="text-red-400" />
                            <span>Exclusive App Access</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-600">
                            <X size={18} className="text-red-400" />
                            <span>Email Support</span>
                        </div>
                    </div>
                    <Link href="/sign-up">
                        <Button

                            variant="outline"
                            className="w-full mt-10 rounded-full border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-slate-100"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Monthly Plan */}
                <div className="border border-sky-400 bg-slate-900 rounded-3xl p-10 w-[320px] shadow-xl relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-400 px-3 py-1 text-xs font-medium text-slate-950">
                        Most popular
                    </span>

                    <h2 className="text-center text-xl font-semibold mb-6 text-slate-100">
                        Monthly
                    </h2>

                    <div className="text-center mb-8">
                        <span className="text-5xl font-bold text-slate-50">7.99$</span>
                        <span className="text-slate-500"> /month</span>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-slate-300">
                            <Check size={18} className="text-sky-400" />
                            <span>Create Unlimited Mock Interview</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-300">
                            <Check size={18} className="text-sky-400" />
                            <span>Unlimited Retake Interview</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-300">
                            <Check size={18} className="text-sky-400" />
                            <span>Practice Question</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-300">
                            <Check size={18} className="text-sky-400" />
                            <span>Exclusive App Access</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-300">
                            <Check size={18} className="text-sky-400" />
                            <span>Email Support</span>
                        </div>
                    </div>

                    <Button
                        onClick={handlePayment}
                        className="w-full mt-10 rounded-full bg-sky-400 text-slate-950 hover:bg-sky-300"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Upgrade;