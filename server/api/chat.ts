import { convertToCoreMessages, streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { config } from 'dotenv';

config();

export default defineLazyEventHandler(async () => {
    const googleGenerativeAI = createGoogleGenerativeAI({
        apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    return defineEventHandler(async (event: any) => {
        try {
            
            const { messages } = await readBody(event);

            if (!messages) {
                throw new Error('No messages found in the request body');
            }

            
            const result = await streamText({
                model: googleGenerativeAI('models/gemini-1.5-flash'),
                messages: convertToCoreMessages(messages),
                async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
                
                },
            });

            return result.toAIStreamResponse();
        } catch (error) {
            console.error('Error during API request:', error);

            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            const errorStack = error instanceof Error ? error.stack : undefined;

            return {
                statusCode: 500,
                body: {
                    error: 'Internal Server Error',
                    details: errorMessage,
                    stack: process.env.NODE_ENV === 'development' ? errorStack : undefined,
                },
            };
        }
    });
});
