

"use client";
import React, { useEffect, useState } from "react";
import Header from "../../_components/Header";
import { useParams } from "next/navigation";
import { GetInterviewDetails } from "../../actions";
import { Lightbulb, WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Webcam from "react-webcam";
import Link from "next/link";
const Interview = () => {
  // const params = useParams();
  // const [interviewData, setInterviewData] = useState();
  // useEffect(() => {
  //     console.log(params);
  //     console.log(params.interviewID);
  //     GetInterviewDetails(result);

  // }, []);

  // const GetInterviewDetails = async () => {
  //     const result = await db.select().from(MockInterview)
  //         .where(eq(MockInterview.mockId, params.interviewID));
  //     console.log(result);
  // }
  const [interviewData, setInterviewData] = useState();
  const params = useParams();
  const [webCamEnable, setWebCamEnable] = useState(false);
  useEffect(() => {
    const loadInterview = async () => {
      const result = await GetInterviewDetails(params.interviewID);
      setInterviewData(result[0]);
    };

    loadInterview();
  }, [params.interviewID]);

  return (
    <div className="my-10 text-slate-100">
      <h2 className="font-bold text-2xl mb-6 text-slate-50">Let&apos;s Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Job Details */}
          <div className="border border-slate-800 bg-slate-900 rounded-xl p-6 shadow-lg">
            <h2 className="text-lg mb-4 text-slate-200">
              <strong className="text-slate-100">Job Role / Position:</strong>{" "}
              <span className="font-normal text-slate-400">{interviewData?.jobPosition}</span>
            </h2>

            <h2 className="text-lg mb-4 text-slate-200">
              <strong className="text-slate-100">Job Description:</strong>{" "}
              <span className="font-normal text-slate-400">
                {interviewData?.jobDescription}
              </span>
            </h2>

            <h2 className="text-lg text-slate-200">
              <strong className="text-slate-100">Experience:</strong>{" "}
              <span className="font-normal text-slate-400">
                {interviewData?.jobExperience}
              </span>
            </h2>
          </div>

          {/* Information Box */}
          <div className="border rounded-xl p-6 bg-amber-950/30 border-amber-900/50">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="text-amber-400 h-5 w-5" />
              <h2 className="font-bold text-amber-200">Information</h2>
            </div>

            <p className="text-sm text-amber-100/80 leading-6">
              Enable Video Webcam and Microphone to start your AI generated mock
              interview. The interview contains 5 questions and you will receive
              feedback based on your answers.
              <br />
              <br />
              <strong>Note:</strong> We never record your video. Webcam access
              is only used during the interview session and can be disabled
              anytime.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Webcam Card */}
          <div className="border border-slate-800 bg-slate-900 rounded-xl p-6 flex flex-col items-center">
            {webCamEnable ? (
              <Webcam
                mirrored
                onUserMedia={() => setWebCamEnable(true)}
                onUserMediaError={() => setWebCamEnable(false)}
                className="rounded-lg w-full h-72 object-cover"
              />
            ) : (
              <div className="w-full h-72 flex items-center justify-center bg-slate-800 rounded-lg">
                <WebcamIcon className="h-24 w-24 text-slate-500" />
              </div>
            )}

            <Button
              className="mt-4 w-full border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-slate-100"
              variant="outline"
              onClick={() => setWebCamEnable(!webCamEnable)}
            >
              {webCamEnable ? "Disable Webcam" : "Enable Webcam"}
            </Button>
          </div>

          {/* Start Interview */}
          <div className="border border-slate-800 bg-slate-900 rounded-xl p-6 flex justify-end items-center">
            <Link
              href={`/dashboard/interview/` + params.interviewID + `/start`}
            >
              <Button size="lg" className="bg-sky-400 text-slate-950 hover:bg-sky-300">
                Start Interview
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;