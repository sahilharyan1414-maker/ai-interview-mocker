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
    <div className="my-10">
      <h2 className="font-bold text-2xl mb-6">Let&apos;s Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Job Details */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg mb-4">
              <strong>Job Role / Position:</strong>{" "}
              <span className="font-normal">{interviewData?.jobPosition}</span>
            </h2>

            <h2 className="text-lg mb-4">
              <strong>Job Description:</strong>{" "}
              <span className="font-normal">
                {interviewData?.jobDescription}
              </span>
            </h2>

            <h2 className="text-lg">
              <strong>Experience:</strong>{" "}
              <span className="font-normal">
                {interviewData?.jobExperience}
              </span>
            </h2>
          </div>

          {/* Information Box */}
          <div className="border rounded-xl p-6 bg-yellow-50 border-yellow-300">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="text-yellow-500 h-5 w-5" />
              <h2 className="font-bold">Information</h2>
            </div>

            <p className="text-sm text-gray-700 leading-6">
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
          <div className="border rounded-xl p-6 flex flex-col items-center">
            {webCamEnable ? (
              <Webcam
                mirrored
                onUserMedia={() => setWebCamEnable(true)}
                onUserMediaError={() => setWebCamEnable(false)}
                className="rounded-lg w-full h-72 object-cover"
              />
            ) : (
              <div className="w-full h-72 flex items-center justify-center bg-gray-100 rounded-lg">
                <WebcamIcon className="h-24 w-24 text-gray-400" />
              </div>
            )}

            <Button
              className="mt-4 w-full"
              variant="outline"
              onClick={() => setWebCamEnable(!webCamEnable)}
            >
              {webCamEnable ? "Disable Webcam" : "Enable Webcam"}
            </Button>
          </div>

          {/* Start Interview */}
          <div className="border rounded-xl p-6 flex justify-end items-center">
            <Link
              href={`/dashboard/interview/` + params.interviewID + `/start`}
            >
              <Button size="lg">Start Interview</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
