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
    <div className="p-10">
      <h2 className="text-3xl font-bold text-green-500">Congratulations</h2>
      <h2 className="text-2xl text-yellow-500">Your Interview is Completed</h2>
      <h2 className="text-2xl font-bold">Here is your interivew feedback</h2>
      {/* <h2 className="text-indigo-700 text-lg my-3">Your Overall Interview rating is: </h2> */}

      <h2 className="text-sm text-gray-500">
        Find below interview question with correct answer & your answer.
        Feedback & rating is given for each answer.
      </h2>
      <div className="py-5">
        {feedbackList &&
          feedbackList.map((item, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex gap-0 justify-center items-center text-left w-full p-3 px-5 bg-gray-100 rounded-3xl my-2 cursor-pointer">
                {item.question}
                <ChevronsUpDown className="" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-2">
                  <h2 className="text-red-400 p-1 px-2 border rounded-lg text-sm">
                    <strong>Rating: </strong>
                    {item.rating}
                  </h2>
                  <h2 className="p-2 vorder rounded-lg bg-red-50 text-sm text-red-900">
                    <strong>Your Answer: </strong>
                    {item.userAnswer}
                  </h2>
                  <h2 className="p-2 vorder rounded-lg bg-green-50 text-sm text-green-900">
                    <strong>Correct Answer: </strong>
                    {item.correctAnswer}
                  </h2>
                  <h2 className="p-2 vorder rounded-lg bg-blue-50 text-sm text-blue-900">
                    <strong>Feedback: </strong>
                    {item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
      </div>
      <Button
        className="bg-cyan-700 hover:bg-cyan-900 cursor-pointer mx-1"
        onClick={() => router.replace("/dashboard")}
      >
        Go Home
      </Button>
    </div>
  );
};

export default Feedback;

// key={item.id}
//                         className="border rounded-lg p-5 my-4"
//                     >
//                         <h2 className="font-bold">
//                             {item.question}
//                         </h2>

//                         <p>
//                             Rating: {item.rating}
//                         </p>

//                         <p>
//                             Feedback: {item.feedback}
//                         </p>
