"use client"
import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Briefcase, Code2, CalendarDays, Loader2, Plus } from "lucide-react";
import { generateInterviewFromPrompt, saveMockInterview } from '../actions';

const AddNewInterview = () => {
    const router = useRouter()
    const { user } = useUser()
    const [openDailog, setOpenDailog] = useState(false)
    const [jobPosition, setJobPosition] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [jobExperience, setJobExperience] = useState('')
    const [loading, setLoading] = useState(false)

    const close = () => {
        setOpenDailog(false)
    }
    const onSubmit = async (e) => {
        e.preventDefault();

        if (!jobPosition || !jobDescription || !jobExperience) {
            return;
        }

        setLoading(true);

        try {
            const result = await generateInterviewFromPrompt(
                jobPosition,
                jobDescription,
                jobExperience
            );

            console.log("AI Generated:", result);

            if (!result) {
                throw new Error("No response from AI");
            }

            const resp = await saveMockInterview({
                jsonMockResp: JSON.stringify(result),
                jobPosition,
                jobDescription,
                jobExperience,
                createdBy:
                    user?.primaryEmailAddress?.emailAddress ??
                    "anonymous",
                mockId: uuidv4(),
            });

            console.log("Saved:", resp);

            setJobPosition("");
            setJobDescription("");
            setJobExperience("");
            setOpenDailog(false);

            router.push(`/dashboard/interview/${resp.mockId}`);
        } catch (error) {
            console.error(
                "Error generating or saving interview:",
                error
            );
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <div
                className="flex flex-col items-center justify-center gap-2 p-10 border border-dashed border-slate-800 rounded-lg bg-slate-900 hover:border-sky-400 hover:bg-slate-900/80 cursor-pointer transition-all"
                onClick={() => setOpenDailog(true)}
            >
                <Plus className="text-sky-400" size={22} />
                <h2 className='font-semibold text-slate-200'>Add New</h2>
            </div>
            <Dialog open={openDailog} onOpenChange={setOpenDailog}>
                <DialogContent className="sm:max-w-2xl bg-slate-900 border border-slate-800 text-slate-100">
                    <DialogHeader className="space-y-2">
                        <DialogTitle className="text-2xl font-bold text-slate-50">
                            Tell us about your interview
                        </DialogTitle>

                        <DialogDescription className="text-slate-400">
                            We'll generate tailored interview questions based on your role,
                            tech stack, and experience level.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={onSubmit}>
                        <div className="space-y-6 py-4">

                            {/* Job Role */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium flex items-center gap-2 text-slate-300">
                                    <Briefcase size={16} className="text-sky-400" />
                                    Job Role / Position
                                </label>

                                <Input required
                                    value={jobPosition}
                                    onChange={(e) => setJobPosition(e.target.value)}
                                    placeholder="Frontend Developer, Full Stack Engineer, Backend Developer..."
                                    className="bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-600 focus-visible:ring-sky-400"
                                />
                            </div>

                            {/* Tech Stack */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium flex items-center gap-2 text-slate-300">
                                    <Code2 size={16} className="text-sky-400" />
                                    Job Description / Tech Stack
                                </label>

                                <Textarea required
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                    rows={5}
                                    placeholder="React, Next.js, Node.js, MongoDB, Express, Tailwind CSS, REST APIs..."
                                    className="bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-600 focus-visible:ring-sky-400"
                                />
                            </div>

                            {/* Experience */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium flex items-center gap-2 text-slate-300">
                                    <CalendarDays size={16} className="text-sky-400" />
                                    Years of Experience
                                </label>

                                <Input required
                                    value={jobExperience}
                                    onChange={(e) => setJobExperience(e.target.value)}
                                    type="number"
                                    min="0"
                                    max="30"
                                    placeholder="e.g. 2"
                                    className="bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-600 focus-visible:ring-sky-400"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setOpenDailog(false)}
                                    disabled={loading}
                                    className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-slate-100"
                                >
                                    Cancel
                                </Button>

                                <Button
                                    className="px-6 bg-sky-400 text-slate-950 hover:bg-sky-300"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="animate-spin mr-2" size={16} />
                                            Generating...
                                        </>
                                    ) : (
                                        "Start Interview"
                                    )}
                                </Button>
                            </div>

                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview