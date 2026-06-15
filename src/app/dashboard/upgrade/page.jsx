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
        <div className=" flex flex-col items-center justify-center px-4 ">
            <h1 className="text-4xl font-bold mt-3">Upgrade</h1>

            <p className="text-gray-500 mt-2">
                Upgrade to monthly plan to access unlimited mock interview
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
                {/* Free Plan */}
                <div className="border rounded-3xl p-10 w-[320px] shadow-sm">
                    <h2 className="text-center text-xl font-semibold mb-6">
                        Free
                    </h2>

                    <div className="text-center mb-8">
                        <span className="text-5xl font-bold">0$</span>
                        <span className="text-gray-500"> /month</span>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Check size={18} />
                            <span>Create 3 Free Mock Interview</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Check size={18} />
                            <span>Unlimited Retake Interview</span>
                        </div>

                        <div className="flex items-center gap-2 text-red-500">
                            <X size={18} />
                            <span>Practice Question</span>
                        </div>

                        <div className="flex items-center gap-2 text-red-500">
                            <X size={18} />
                            <span>Exclusive App Access</span>
                        </div>

                        <div className="flex items-center gap-2 text-red-500">
                            <X size={18} />
                            <span>Email Support</span>
                        </div>
                    </div>
                    <Link href="/sign-up">
                        <Button

                            variant="outline"
                            className="w-full mt-10 rounded-full border-violet-500 text-violet-600 hover:bg-violet-50"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Monthly Plan */}
                <div className="border rounded-3xl p-10 w-[320px] shadow-sm">
                    <h2 className="text-center text-xl font-semibold mb-6">
                        Monthly
                    </h2>

                    <div className="text-center mb-8">
                        <span className="text-5xl font-bold">7.99$</span>
                        <span className="text-gray-500"> /month</span>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Check size={18} />
                            <span>Create Unlimited Mock Interview</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Check size={18} />
                            <span>Unlimited Retake Interview</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Check size={18} />
                            <span>Practice Question</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Check size={18} />
                            <span>Exclusive App Access</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Check size={18} />
                            <span>Email Support</span>
                        </div>
                    </div>

                    <Button
                        onClick={handlePayment}
                        variant="outline"
                        className="w-full mt-10 rounded-full border-violet-500 text-violet-600 hover:bg-violet-50"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Upgrade;