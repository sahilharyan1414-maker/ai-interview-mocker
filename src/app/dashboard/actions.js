"use server"

import { db } from "../../../utils/db";
import { MockInterview } from "../../../utils/schema";
import { v4 as uuidv4 } from "uuid";
import { UserAnswer } from "../../../utils/schema"
import { eq, desc } from "drizzle-orm";
import { generateInterview, generateFeedback } from "../../../utils/OpenAiModel";

export async function generateInterviewFromPrompt(jobRole, jobDescription, yearsOfExperience) {
    return await generateInterview(jobRole, jobDescription, yearsOfExperience);
}

export async function generateFeedbackForAnswer(question, userAnswer) {
    return await generateFeedback(question, userAnswer);
}

export async function saveMockInterview({
    jsonMockResp,
    jobPosition,
    jobDescription,
    jobExperience,
    createdBy
}) {
    try {
        const resp = await db
            .insert(MockInterview)
            .values({
                mockId: uuidv4(), // Generate UUID here
                jsonMockResp,
                jobPosition,
                jobDescription,
                jobExperience,
                createdBy,
                createdAt: new Date()
            })
            .returning({
                id: MockInterview.id,
                mockId: MockInterview.mockId
            });

        return resp[0];
    } catch (error) {
        console.error("Database Error:", error);
        throw error;
    }
}

// export const GetInterviewDetails = async () => {
//     const result = await db.select().from(MockInterview)
//         .where(eq(MockInterview.mockId, params.interviewID));
//     console.log(result);
// }


export async function GetInterviewDetails(mockId) {
    try {
        const result = await db
            .select()
            .from(MockInterview)
            .where(eq(MockInterview.mockId, mockId));

        console.log("DB Result:", result);

        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function saveUserAns({
    mockIdRef,
    question,
    correctAnswer,
    userAnswer,
    feedback,
    rating,
    userEmail,
}) {
    try {
        const resp = await db
            .insert(UserAnswer)
            .values({
                mockIdRef,
                question,
                correctAnswer,
                userAnswer,
                feedback,
                rating,
                userEmail,
                createdAt: new Date(),
            })
            .returning();

        return resp[0];
    } catch (error) {
        console.error("Database Error:", error);
        throw error;
    }
}

export async function GetFeedback(mockIdRef) {
    try {
        const result = await db
            .select()
            .from(UserAnswer)
            .where(eq(UserAnswer.mockIdRef, mockIdRef))
            .orderBy(UserAnswer.id);

        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export async function getInterviewList(userEmail) {
    try {
        const result = await db
            .select()
            .from(MockInterview)
            .where(eq(MockInterview.createdBy, userEmail))
            .orderBy(desc(MockInterview.id));

        return result;
    } catch (error) {
        console.error("Error fetching interviews:", error);
        throw error;
    }
}