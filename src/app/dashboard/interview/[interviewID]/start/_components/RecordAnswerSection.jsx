"use client"
import useSpeechToText from 'react-hook-speech-to-text';
import { Button } from '@/components/ui/button'
import React, { useEffect, useEffectEvent, useState } from 'react'
import Webcam from 'react-webcam'
import { Mic } from 'lucide-react';
import { toast } from "sonner"
import { generateFeedbackForAnswer, saveUserAns } from "../../../../actions";
import { useUser } from "@clerk/nextjs";
const RecordAnswerSection = ({ mockInterviewQuestion, activeQuestionIndex, interviewData }) => {
    const { user } = useUser();
    const [loading, setLoading] = useState(false)
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });
    const [userAnswer, setUserAnswer] = useState("");
    useEffect(() => {
        results.map((result) => {
            setUserAnswer(prevAns => prevAns + result?.transcript)
        })
    }, [results])

    const [webCamEnable, setWebCamEnable] = useState(false);

    const SaveUserAnswers = async () => {
        if (!isRecording) {
            startSpeechToText();
            return;
        }
        setLoading(true);
        stopSpeechToText();

        if (userAnswer.length < 10) {
            setLoading(false);
            toast.error("Answer too short");
            return;
        }

        try {
            const feedback = await generateFeedbackForAnswer(
                mockInterviewQuestion[activeQuestionIndex]?.question,
                userAnswer
            );

            await saveUserAns({
                mockIdRef: interviewData?.mockId,
                question:
                    mockInterviewQuestion[activeQuestionIndex]?.question,
                correctAnswer:
                    mockInterviewQuestion[activeQuestionIndex]?.answer,
                userAnswer,
                feedback: feedback.feedback,
                rating: feedback.rating,
                userEmail:
                    user?.primaryEmailAddress?.emailAddress,
            });

            toast.success("Answer saved successfully");
            setUserAnswer('');
            setResults([]);
            setLoading(false);
        } catch (error) {
            console.error(error);
            toast.error("Failed to save answer");
        }
    };

    return (
        <div className='flex items-center justify-center flex-col gap-1'>
            <div className='flex flex-col w-full h-[20rem] rounded-lg p-5 my-2 border items-center justify-center '>
                {webCamEnable ? <Webcam
                    audio={false}
                    mirrored={true}
                    onUserMedia={() => setWebCamEnable(true)}
                    onUserMediaError={() => setWebCamEnable(false)}
                    style={{
                        width: '100%',
                        height: '100%',
                        zIndex: 10,
                    }} />
                    :
                    <img src={'/web-cam.png'} alt="webcam" width={200} height={200}
                        className='absolute' />
                }
            </div>
            <div className="flex items-center justify-between gap-10">
                <Button variant="outline" size="lg" className='bg-blue-800 text-white cursor-pointer ' onClick={() => setWebCamEnable(!webCamEnable)}
                >
                    {webCamEnable
                        ? "Disable Webcam"
                        : "Enable Webcam"}

                </Button>
                <Button disabled={loading} size="lg" variant="outline" className="my-10 bg-blue-400 text-white cursor-pointer " onClick={SaveUserAnswers}>
                    {isRecording ?
                        <h2 className='flex gap-2 items-center justofy-center text-red-500'>
                            <Mic /> Recording...
                        </h2> :
                        'Record Answer'
                    }
                </Button>
            </div>
            {/* <Button onClick={() => console.log(userAnswer)}>Submit</Button> */}
        </div>
    )
}

export default RecordAnswerSection