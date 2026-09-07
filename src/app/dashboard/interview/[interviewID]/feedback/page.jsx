"use client";
import React, { useEffect, useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { GetFeedback } from "@/app/dashboard/actions";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "../../../../../components/ui/button";
const Feedback = () => {
  const router = useRouter();
  const [feedbackList, setFeedbackList] = useState([]);
  const params = useParams();
  useEffect(() => {
    const loadFeedback = async () => {
      const result = await GetFeedback(params.interviewID);

      setFeedbackList(result);
      console.log(feedbackList);
    };

    loadFeedback();
  }, []);

  return (
    <div className="p-10 min-h-screen bg-slate-950 text-slate-100">
      <h2 className="text-3xl font-bold text-emerald-400">Congratulations</h2>
      <h2 className="text-2xl text-amber-400">Your Interview is Completed</h2>
      <h2 className="text-2xl font-bold text-slate-50">Here is your interivew feedback</h2>
      {/* <h2 className="text-indigo-700 text-lg my-3">Your Overall Interview rating is: </h2> */}

      <h2 className="text-sm text-slate-400">
        Find below interview question with correct answer & your answer.
        Feedback & rating is given for each answer.
      </h2>
      <div className="py-5">
        {feedbackList && feedbackList.length === 0 && (
          <div className="py-8 text-sm text-slate-500 border border-dashed border-slate-800 rounded-lg text-center">
            No feedback found for this interview.
          </div>
        )}

        {feedbackList &&
          feedbackList.map((item, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex gap-3 justify-between items-center text-left w-full p-3 px-5 bg-slate-900 border border-slate-800 hover:border-sky-400 rounded-3xl my-2 cursor-pointer transition-colors">
                <span className="text-slate-100">{item.question}</span>
                <ChevronsUpDown className="text-slate-400 flex-shrink-0" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-2 px-2">
                  <h2 className="text-amber-400 p-1 px-2 border border-slate-800 rounded-lg text-sm w-fit">
                    <strong>Rating: </strong>
                    {item.rating}
                  </h2>
                  <h2 className="p-2 border border-red-900/50 rounded-lg bg-red-950/30 text-sm text-red-300">
                    <strong>Your Answer: </strong>
                    {item.userAnswer}
                  </h2>
                  <h2 className="p-2 border border-emerald-900/50 rounded-lg bg-emerald-950/30 text-sm text-emerald-300">
                    <strong>Correct Answer: </strong>
                    {item.correctAnswer}
                  </h2>
                  <h2 className="p-2 border border-sky-900/50 rounded-lg bg-sky-950/30 text-sm text-sky-300">
                    <strong>Feedback: </strong>
                    {item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
      </div>
      <Button
        className="bg-sky-400 text-slate-950 hover:bg-sky-300 cursor-pointer mx-1"
        onClick={() => router.replace("/dashboard")}
      >
        Go Home
      </Button>
    </div>
  );
};

export default Feedback;