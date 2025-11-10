import { email, z } from "zod";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
import { inngest } from "@/inngest/client";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const appRouter = createTRPCRouter({
  testAi: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    });
    return { success: true, message: "Job Queued" };
  }),

  getWorkflows: protectedProcedure.query(async ({ ctx }) => {
    // If workflows are user-specific, filter by ctx.auth.user.id
    // return prisma.workflow.findMany({ where: { userId: ctx.auth.user.id } });
    return prisma.workflow.findMany();
  }),

  createWorkflow: protectedProcedure.mutation(async ({ ctx }) => {
    // consider user-specific creation:
    // return prisma.workflow.create({
    //   data: { name: "Test Workflow", userId: ctx.auth.user.id },
    // });

    await inngest.send({
      name: "execute/ai",
      data: {
        email: "harsh@gmail.com",
      },
    });

    return { success: true, message: "Job Quued" };
  }),
});

export type AppRouter = typeof appRouter;
