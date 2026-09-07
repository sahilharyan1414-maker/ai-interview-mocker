"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getInterviewList } from "../actions";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { MockInterview } from "utils/schema";

const InterviewList = () => {
  const { user } = useUser();
  const params = useParams();
  const [interviewList, setInterviewList] = useState([]);

  useEffect(() => {
    const loadInterviews = async () => {
      try {
        const result = await getInterviewList(
          user?.primaryEmailAddress?.emailAddress,
        );

        setInterviewList(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    if (user) {
      loadInterviews();
    }
  }, [user]);

  const router = useRouter();
  const onStart = (mockId) => {
    router.push(`/dashboard/interview/${mockId}`);
  };
  const onfeedback = (mockId) => {
    router.push(`/dashboard/interview/${mockId}/feedback`);
  };
  return (
    <div>
      <h2 className="text-sm font-medium text-slate-400 mb-3 pl-2">
        Your interviews
      </h2>

      {interviewList.length === 0 && (
        <div className="pl-2 py-8 text-sm text-slate-500 border border-dashed border-slate-800 rounded-lg text-center">
          No interviews yet — add one above to get started.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 pl-2">
        {interviewList.map((item) => (
          <div
            onClick={() => console.log("hii")}
            key={item.id}
            className="border border-slate-800 bg-slate-900 rounded-lg p-4 hover:border-sky-400 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <h2 className="flex items-center gap-2 text-slate-100 font-semibold">
              <Link size={14} className="text-sky-400" />
              {item.jobPosition}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {item.jobExperience} Years of Experience
            </p>
            <h2 className="mt-1 text-xs text-slate-600">
              Created by: {item.createdBy}
            </h2>
            <div className="flex items-center justify-between pt-4 gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onfeedback(item.mockId)}
                className="flex-1 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-slate-100"
              >
                {" "}
                Feedback{" "}
              </Button>

              <Button
                onClick={() => onStart(item.mockId)}
                size="sm"
                className="flex-1 bg-sky-400 text-slate-950 hover:bg-sky-300"
              >
                {" "}
                Start{" "}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewList;
