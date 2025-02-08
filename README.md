# HelpBot

This project demonstrates a cutting-edge AI chat application built using Next.js 15, React 19, and a suite of tools like LangChain for intelligent orchestration, Clerk for authentication, and Convex for real-time data storage. It offers a dynamic user experience with real-time interactions, advanced prompt caching, and seamless integration with various data sources through IBM's WxFlows.

#Project Overview
The AI Agent leverages Claude 3.5 Sonnet as the core AI model, which enables complex tool orchestration through LangGraph and LangChain. Users can interact with the agent, which executes tool-augmented responses and provides real-time updates on tool usage.

#Key Features:
Advanced AI Chat Interface: Real-time conversations with Claude 3.5 Sonnet.
Modern UI Design: Built with Tailwind CSS for responsive and mobile-friendly design.
Authentication with Clerk: Secure user authentication and session management.
Real-Time Data Storage: Powered by Convex, ensuring data updates instantly across sessions.
Streaming Responses: Custom streaming solutions for real-time token handling and feedback.
Prompt Caching: Optimized token usage via Anthropic's prompt caching feature.
Tool Orchestration: Integrated with LangChain and LangGraph for intelligent execution and state management of tools.
wxflows Integration: Fetch data from YouTube transcripts, Google Books, and custom data sources.


#How It Works

Authentication: The user signs in via Clerk, which manages the authentication lifecycle. After logging in, the user can interact with the AI agent.

AI Interaction: The conversation interface leverages Claude 3.5 Sonnet to generate intelligent responses. The AI uses context-aware conversations, ensuring relevant and continuous dialogue.

Tool Orchestration: Through LangGraph and LangChain, the AI can execute specific tools and display real-time feedback. The tool orchestration dynamically chooses tools based on the conversation context.

Data Integration: The app integrates IBM's wxflows, allowing the AI to pull in various data sources, including YouTube transcripts and Google Books data, for enriched responses.

Performance Optimization: The application is optimized using prompt caching to minimize API calls and handle real-time token streaming for faster responses.

#Tech Stack
Frontend Framework: Next.js 15
UI Library: React 19
Styling: Tailwind CSS for a sleek, responsive design
Authentication: Clerk for secure, session-based authentication
Database: Convex for real-time data storage
AI Integration: LangChain and Claude 3.5 Sonnet for advanced AI capabilities
Icons: Lucide React & Radix UI Icons
Type Safety: TypeScript for a strongly-typed, scalable codebase


![Home Page](Home.png)
