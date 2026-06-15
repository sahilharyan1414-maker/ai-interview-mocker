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
        if (user) {
            GetInterviewList();
        }
    }, [user]);

    const GetInterviewList = async () => {
        try {
            const result = await getInterviewList(
                user?.primaryEmailAddress?.emailAddress
            );

            setInterviewList(result);

            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };
    const router = useRouter();
    const onStart = (mockId) => {
        router.push(`/dashboard/interview/${mockId}`)
    }
    const onfeedback = (mockId) => {
        router.push(`/dashboard/interview/${mockId}/feedback`)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 pl-2">
            {interviewList.map((item) => (
                <div onClick={() => (console.log("hii"))} key={item.id} className="border-1 bg-green-50  rounded-lg p-3 my-3 ">
                    <h2 className="text-violet-900 ">{item.jobPosition}</h2>
                    <p className="text-sm text-blue-950">{item.jobExperience} Years of Experience</p>
                    <h2 className="text-sm text-gray-400">Created by: {item.createdBy}</h2>
                    <div className="flex items-center justify-between pt-2">


                        <Button size="sm" variant="outline" onClick={() => onfeedback(item.mockId)} > Feedback </Button>


                        <Button onClick={() => onStart(item.mockId)} size="sm" variant="outline" > Start </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InterviewList;