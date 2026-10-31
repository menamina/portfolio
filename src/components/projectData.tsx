// Report Builder Images
import analytics from "../SANIMGS/analytics.png";
import audit from "../SANIMGS/audit.png";
import caseReport from "../SANIMGS/caseReport.png";
import exports from "../SANIMGS/exports.png";

// Bunie Images
import comment from "../bunieIMGS/comment.png";
import edit from "../bunieIMGS/edit.png";
import feed from "../bunieIMGS/feed.png";
import inven from "../bunieIMGS/inven.png";
import pass from "../bunieIMGS/pass.png";
import profile from "../bunieIMGS/profile.png";
import set from "../bunieIMGS/set.png";
import wrongpass from "../bunieIMGS/wrongpass.png";

const projects = [
  {
    name: "Report Builder (Digital Aid Seattle)",
    type: "work",
    description:
      "A robust reporting tool used for audit, compliance, and grant purposes.",
    about:
      "The purpose of this project was to improve the workflow of our clients by building a modern, simplier to use, but robust reporting tool. The goal was to reduce errors made by hand and duplicate data, speed up export time, enable role based access, and detailed audit trails. ",
    summary: [
      "Reduced client report generation time from 30+ minutes to 5 seconds - 2 minutes via pre-synced, pre-cleaned data and indexing of database",
      "Integrated Microsoft Azure AD SSO with role-based permissions",
      "Implemented complex SQL queries based on client's needs for month-to-month reporting, auditing/legal purposes, and grant appliction requirements",
      "React, TypeScript, TanStack Query, Material-UI, for a robust, user friendly front end",
      "Server-side CSV/Excel generation",
      "Audit trail logging all user actions with timestamps for compliance tracking",
      "CI/CD deployment pipeline with GitHub Actions, and environment-based configs",
    ],
    date: "October 2026",
    images: [caseReport, exports, analytics, audit],
    livePrev: null,
  },

  {
    name: "Bunie 🐰 - Cosmetic Tracker",
    type: "personal",
    description:
      "A full-stack cosmetic usage tracking application with social features.",
    about:
      "The purpose of this project was to create a comprehensive cosmetic tracking application that helps users manage their makeup collection and usage. The goal was to enable users to track product status, monitor usage counts, connect with other users, and share their cosmetic experiences through a social platform.",
    summary: [
      "Built full-stack application with user authentication using Passport, JWT, and OAuth 2.0",
      "Designed and implemented complex relational database schema with Prisma ORM and PostgreSQL",
      "Created social features including user following system and post creation for community engagement",
      "Implemented product status tracking with database enums and usage counting functionality",
      "React, TypeScript, TanStack Query, Material-UI, and Vite for a modern, responsive front end",
      "RESTful API architecture with Node.js and Express for scalable backend services",
      "Secure session management and authentication flows for user data protection",
    ],
    date: "August 2026",
    images: [feed, profile, set, pass, wrongpass, edit, comment, inven],
    livePrev: null,
  },
];

export default projects;
