"use client";
import { GetInterviewDetails } from "@/app/dashboard/actions";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StartInterview = () => {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, SetMockInterviewQuestion] = useState();
  const [activeQuestionIndex, SetActiveQuestionIndex] = useState(0);
  const params = useParams();
  useEffect(() => {
    const loadInterview = async () => {
      const result = await GetInterviewDetails(params.interviewID);
      const jsonMockResp = JSON.parse(result[0]?.jsonMockResp);
      SetMockInterviewQuestion(jsonMockResp);
      console.log(jsonMockResp);
      setInterviewData(result[0]);
    };

    loadInterview();
  }, [params.interviewID]);
  return (
    <div>
      <div className="mt-5 grid grid-cold-1 md:grid-cols-2 gap-5">
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>
      <div className="flex items-center justify-end gap-29">
        {activeQuestionIndex > 0 && (
          <Button
            onClick={() => SetActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex != mockInterviewQuestion?.length - 1 && (
          <Button
            onClick={() => SetActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )}
        {activeQuestionIndex == mockInterviewQuestion?.length - 1 && (
          <Link
            href={"/dashboard/interview/" + params.interviewID + "/feedback"}
          >
            <Button> End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default StartInterview;
