import {
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mock_interview", {
    id: serial("id").primaryKey(),

    mockId: varchar("mockId", { length: 255 }).notNull(),

    jsonMockResp: text("jsonMockResp").notNull(),

    jobPosition: varchar("jobPosition", { length: 255 }).notNull(),

    jobDescription: varchar("jobDescription", {
        length: 5000,
    }).notNull(),

    jobExperience: varchar("jobExperience", {
        length: 255,
    }).notNull(),

    createdBy: varchar("createdBy", {
        length: 255,
    }).notNull(),

    createdAt: timestamp("createdAt", {
        withTimezone: true,
        mode: "date",
    }).defaultNow(),
});


export const UserAnswer = pgTable("userAnswer", {
    id: serial("id").primaryKey(),
    mockIdRef: varchar("mockIdRef").notNull(),
    question: varchar("question").notNull(),
    correctAnswer: text("correctAnswer"),
    userAnswer: text("userAnswer"),
    feedback: text("feedback"),
    rating: varchar("rating", { length: 20 }),
    createdAt: timestamp("createdAt", {
        withTimezone: true,
        mode: "date",
    }).defaultNow(),
    userEmail: varchar('userEmail'),
})