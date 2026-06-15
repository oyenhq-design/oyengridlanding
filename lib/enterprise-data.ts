import { 
  Activity, Cpu, Network, Database, Shield, Zap, Globe, Users, 
  BarChart3, Settings, Lock, FileCheck, Layers, Boxes, Bot, 
  LineChart, Server, Workflow, Radio, Brain, BookOpen, 
  GraduationCap, Building2, Terminal, Target, ArrowRight, HelpCircle, Mail, MapPin, Briefcase
} from "lucide-react";

export const enterpriseData: Record<string, any> = {
  // ==========================================
  // SOLUTIONS
  // ==========================================
  "solutions/bootcamps-training": {
    title: "Bootcamps & Training",
    subtitle: "Structured Delivery",
    description: "Run Cohort-Based Programmes At Scale.",
    category: "Solutions",
    hero: {
      headline: "Run Cohort-Based Programmes At Scale.",
      subheadline: "Manage participants, facilitators, live sessions, attendance, assessments, certificates and programme analytics from one intelligent operating system.",
      ctas: [
        { text: "Start Free Trial", href: "#trial", primary: true },
        { text: "Book Demo", href: "#demo", primary: false }
      ],
      visualType: "dashboard"
    },
    problem: {
      headline: "Most Bootcamps Operate Across Too Many Tools",
      intro: "Organizations often depend on a disconnected stack of apps like WhatsApp, Zoom, Google Forms, Google Drive, Excel, and Email.",
      points: [
        { title: "Fragmented Operations", desc: "Siloed data across separate platforms makes tracking difficult." },
        { title: "Poor Visibility", desc: "No single source of truth for learner progress or cohort health." },
        { title: "Attendance Gaps", desc: "Manual attendance records lead to lost data and inaccurate metrics." },
        { title: "Reporting Challenges", desc: "Hours wasted compiling manual performance and attendance sheets." },
        { title: "Manual Coordination", desc: "Constant back-and-forth communication just to keep classes running." }
      ]
    },
    solution: {
      headline: "One Platform For Programme Delivery",
      intro: "OYEN GRID centralizes your entire delivery workflow from setup to completion.",
      points: [
        { title: "Centralized Planning", desc: "Define schedules, modules, resources, and cohorts in one dashboard." },
        { title: "Live Delivery Sync", desc: "Built-in OYEN Live links sessions, chats, and files directly to learner profiles." },
        { title: "Automated Tracking", desc: "No more manual spreadsheets. Attendance, assessments, and progress update live." }
      ]
    },
    features: [
      { title: "Programme Management", desc: "Create and manage multiple programmes, curricula, and timelines.", icon: BookOpen },
      { title: "Cohort Management", desc: "Track participant groups, cohort allocations, and sync schedules.", icon: Users },
      { title: "OYEN Live", desc: "Built-in premium virtual sessions with automatic join logs.", icon: Radio },
      { title: "Attendance Intelligence", desc: "Automated attendance tracking based on session duration.", icon: Activity },
      { title: "Assessments", desc: "Seamless assignments, quizzes, and automated grading pipelines.", icon: FileCheck },
      { title: "Certificates", desc: "Create and issue verifiable digital certifications automatically.", icon: GraduationCap },
      { title: "Analytics", desc: "Track completion rates, engagement, and programme health metrics.", icon: BarChart3 },
      { title: "AI Assistant", desc: "Get automatic cohort recommendations and session summaries.", icon: Bot }
    ],
    workflow: [
      { title: "Programme Setup", desc: "Configure curriculum, schedules, and facilitators." },
      { title: "Participant Enrollment", desc: "Onboard learners into dedicated cohort structures." },
      { title: "Live Delivery", desc: "Conduct classes with built-in OYEN Live infrastructure." },
      { title: "Assessments", desc: "Deploy automated quizzes, assignments, and milestones." },
      { title: "Certification", desc: "Issue secure, verifiable digital credentials automatically." },
      { title: "Analytics", desc: "Aggregate learning performance across all cohorts." },
      { title: "Impact Reporting", desc: "Generate client-ready reports showing cohort performance." }
    ],
    benefits: [
      { title: "Reduce Operational Complexity", desc: "Eliminate 5+ tools and coordinate your team under a single clean workspace." },
      { title: "Increase Completion Rates", desc: "Track risks early with automated participation alerts and keep students engaged." },
      { title: "Improve Participant Visibility", desc: "Access real-time dashboards for every student profile, submission, and score." },
      { title: "Generate Better Reports", desc: "Export instant performance, attendance, and compliance analytics for sponsors." },
      { title: "Scale Programmes Efficiently", desc: "Run 10x more cohorts with the same operations team using automated workflows." }
    ],
    outcomes: [
      { label: "Completion Rate", value: "94.2%", trend: "+12% vs Average" },
      { label: "Admin Hours Saved", value: "18h", trend: "Per Cohort/Week" },
      { label: "Tool Cost Redux", value: "65%", trend: "Consolidated Stack" },
      { label: "Verification Speed", value: "Instant", trend: "Secured on Grid" }
    ],
    cta: {
      headline: "Ready to scale your training programmes?",
      subheadline: "Deploy a premium, automated delivery environment with OYEN GRID.",
      buttonText: "Start Free Trial"
    }
  },

  "solutions/webinars-events": {
    title: "Webinars & Events",
    subtitle: "Event Coordination",
    description: "Coordinate Events Without Operational Chaos.",
    category: "Solutions",
    hero: {
      headline: "Coordinate Events Without Operational Chaos.",
      subheadline: "Manage registrations, attendance, engagement and reporting from one unified, premium platform.",
      ctas: [
        { text: "Launch Event", href: "#launch", primary: true },
        { text: "Talk to Sales", href: "#sales", primary: false }
      ],
      visualType: "event"
    },
    problem: {
      headline: "Why Standard Event Tools Fail Organizers",
      intro: "Managing registration landing pages, virtual meetings, emails, and polls across separate systems introduces mistakes.",
      points: [
        { title: "Fragmented Attendee Management", desc: "Registrations are disconnected from live participant behavior." },
        { title: "Manual Attendance Tracking", desc: "Spent hours downloading Zoom logs and matching them to Excel." },
        { title: "Poor Engagement Visibility", desc: "No simple way to track who actually paid attention, asked questions, or left early." },
        { title: "Scattered Communications", desc: "Struggling to send reminders, links, and recordings from different apps." }
      ]
    },
    solution: {
      headline: "Unified Live Event Delivery",
      intro: "OYEN GRID handles the complete lifecycle of your webinars and virtual events.",
      points: [
        { title: "Integrated Landing Pages", desc: "Beautiful, responsive registration pages that sync directly with the grid." },
        { title: "Automatic Session Tracking", desc: "Built-in webinar rooms capture attendance down to the second automatically." },
        { title: "Real-time Insights", desc: "Monitor polls, speaker schedules, Q&A, and engagement from a single panel." }
      ]
    },
    features: [
      { title: "Registration Management", desc: "Track invites, RSVPs, tickets, and attendee profiles seamlessly.", icon: Users },
      { title: "Event Landing Pages", desc: "Deploy beautiful, custom event pages built on our premium styling.", icon: Layers },
      { title: "Attendance Reports", desc: "Get real-time, comprehensive reports detailing exact join and leave times.", icon: FileCheck },
      { title: "Polls & Surveys", desc: "Trigger interactive surveys and capture immediate feedback.", icon: Activity },
      { title: "Live Q&A", desc: "Coordinate participant questions and speaker responses in real-time.", icon: HelpCircle },
      { title: "Speaker Management", desc: "Manage greenrooms, speaker profiles, and screen-sharing permissions.", icon: Shield },
      { title: "Session Recordings", desc: "Cloud recordings are automatically processed and shared with attendees.", icon: Radio },
      { title: "AI Event Summaries", desc: "Generate instant AI-driven transcripts, notes, and key takeaways.", icon: Bot }
    ],
    workflow: [
      { title: "Registration", desc: "Launch landing pages and capture visitor credentials." },
      { title: "Attendance", desc: "Automate reminders and log live arrivals seamlessly." },
      { title: "Participation", desc: "Host interactive Q&As and run real-time polls." },
      { title: "Engagement", desc: "Track session attention and chat activity indexes." },
      { title: "Recording", desc: "Automate video processing and resource library upload." },
      { title: "Insights", desc: "Export analytics on attendee behavior and event ROI." }
    ],
    benefits: [
      { title: "Higher Engagement", desc: "Interactive tools keep attendees active throughout the session." },
      { title: "Better Attendance Tracking", desc: "No manually compiling logs. Accurate reports generated immediately." },
      { title: "Faster Event Reporting", desc: "Extract insights, survey answers, and notes with one click." },
      { title: "Improved Audience Visibility", desc: "Convert event registrations into long-term customer profiles." }
    ],
    outcomes: [
      { label: "Attendance Rate", value: "78%", trend: "+15% vs Zoom average" },
      { label: "Report Time", value: "<1 min", trend: "Generated instantly" },
      { label: "User Satisfaction", value: "96.4%", trend: "High satisfaction" },
      { label: "Platform Setup", value: "3 mins", trend: "Zero-code templates" }
    ],
    cta: {
      headline: "Deliver exceptional event experiences.",
      subheadline: "Coordinate registration, interactive delivery, and AI summaries in one place.",
      buttonText: "Schedule an Event"
    }
  },

  "solutions/education": {
    title: "Education & Institutions",
    subtitle: "Academic Infrastructure",
    description: "Academic Infrastructure For Modern Institutions.",
    category: "Solutions",
    hero: {
      headline: "Academic Infrastructure For Modern Institutions.",
      subheadline: "Manage learning delivery, assessments and institutional reporting from one unified, secure platform.",
      ctas: [
        { text: "Contact Academics", href: "#contact", primary: true },
        { text: "View Architecture", href: "#architecture", primary: false }
      ],
      visualType: "academic"
    },
    problem: {
      headline: "The Cost of Disconnected Academic Systems",
      intro: "Modern academies and universities use legacy LMS platforms, external video tools, and manual sheets, leading to administrative overload.",
      points: [
        { title: "Disconnected Systems", desc: "Gradebooks, student directories, and live video rooms do not speak to each other." },
        { title: "Limited Reporting Visibility", desc: "Difficult to track department-wide compliance, student retention, or teacher performance." },
        { title: "Manual Student Tracking", desc: "Administrators manually audit attendance logs to verify student visa/funding compliance." },
        { title: "Inefficient Coordination", desc: "Time lost managing course materials, assignment releases, and student communication channels." }
      ]
    },
    solution: {
      headline: "A Unified Academic Registry & Classroom",
      intro: "OYEN GRID brings your student registry, curriculum library, virtual rooms, and analytics under a single secure umbrella.",
      points: [
        { title: "True Registry Integration", desc: "Every live attendance log and assessment score links directly back to the student's record." },
        { title: "Institutional Oversight", desc: "Dashboards designed for deans, coordinators, and directors to audit multi-department performance." },
        { title: "Sovereign Compliance", desc: "Secure data structures meeting academic audit and regional privacy compliance rules." }
      ]
    },
    features: [
      { title: "Student Management", desc: "Maintain comprehensive profiles, enrollment records, and academic files.", icon: Users },
      { title: "Faculty Management", desc: "Coordinate teacher assignments, classes, and performance telemetry.", icon: Shield },
      { title: "Class Management", desc: "Design structured courses, semesters, and live schedules.", icon: Layers },
      { title: "Attendance Tracking", desc: "Automate institutional presence checks for regulatory compliance.", icon: Activity },
      { title: "Assessments", desc: "Rich grading scales, essay submissions, and proctored quiz templates.", icon: FileCheck },
      { title: "Resource Library", desc: "Distribute syllabi, reading lists, slide decks, and recordings securely.", icon: BookOpen },
      { title: "Certificates", desc: "Generate verifiable degrees and academic credentials on the grid.", icon: GraduationCap },
      { title: "AI Study Assistant", desc: "Equip students with personalized contextual tutoring assistants.", icon: Bot }
    ],
    workflow: [
      { title: "Student Enrollment", desc: "Create records, set up security tokens, and assign courses." },
      { title: "Course Participation", desc: "Engage in scheduled live lectures and seminar rooms." },
      { title: "Attendance", desc: "Capture presence logs to meet regulatory compliance policies." },
      { title: "Assessments", desc: "Submit term papers, quizzes, and practical projects online." },
      { title: "Performance Tracking", desc: "Evaluate academic metrics via central administrative dashboards." },
      { title: "Certification", desc: "Export verifiable transcripts and digital graduation awards." },
      { title: "Institutional Reporting", desc: "Submit aggregate student outcome reports to regional boards." }
    ],
    benefits: [
      { title: "Improve Academic Oversight", desc: "Instant visibility into class health, course progress, and faculty activity." },
      { title: "Increase Student Visibility", desc: "Identify students at risk of failing or dropping out before it's too late." },
      { title: "Strengthen Learning Outcomes", desc: "Integrate quizzes, live discussions, and resource files in one fluid experience." },
      { title: "Simplify Reporting", desc: "Generate instant audit-ready reports for educational sponsors and compliance boards." }
    ],
    outcomes: [
      { label: "Regulatory Auditing", value: "100%", trend: "Compliant & Auto-Logged" },
      { label: "Grading Efficiency", value: "+45%", trend: "Through auto-grading" },
      { label: "Student Engagement", value: "89%", trend: "Interactive metrics" },
      { label: "Integration Cost", value: "-70%", trend: "SaaS consolidation" }
    ],
    cta: {
      headline: "Modernize institutional learning delivery.",
      subheadline: "Upgrade to a secure, unified academic infrastructure.",
      buttonText: "Request Academic Demo"
    }
  },

  "solutions/enterprise": {
    title: "Enterprise Operations",
    subtitle: "Enterprise Infrastructure",
    description: "Operational Coordination For Modern Organizations.",
    category: "Solutions",
    comingSoon: true,
    hero: {
      headline: "Operational Coordination For Modern Organizations.",
      subheadline: "Governance, workflows and institutional delivery infrastructure designed for national and global operations.",
      ctas: [
        { text: "Join Waitlist", href: "#waitlist", primary: true },
        { text: "Enterprise Docs", href: "#docs", primary: false }
      ],
      statusText: "Coming Soon",
      visualType: "enterprise"
    },
    problem: {
      headline: "The Enterprise Coordination Challenge",
      intro: "Large multi-team organizations like NGOs, foundations, and governments operate across hundreds of separate teams and tools, losing alignment and control.",
      points: [
        { title: "Scattered Governance", desc: "No unified control over user directories, permissions, and administrative audits." },
        { title: "Fragmented Operations", desc: "Different departments using separate apps for scheduling, delivery, and reporting." },
        { title: "Data Isolation", desc: "Operational data is siloed, making custom analytics and impact reporting slow and manual." }
      ]
    },
    solution: {
      headline: "Dedicated Institutional Infrastructure",
      intro: "OYEN GRID Enterprise delivers structured workspaces, military-grade security, and custom integrations built to handle high throughput.",
      points: [
        { title: "Sovereign Workspaces", desc: "Separate department workspaces with centralized corporate administration." },
        { title: "Enterprise Governance", desc: "Advanced access controls, SSO, and comprehensive audit logging." },
        { title: "Custom Deployment Options", desc: "Options for private cloud, local regional staging, and dedicated server arrays." }
      ]
    },
    features: [
      { title: "Department Workspaces", desc: "Dedicated structures for distinct operations, teams, or projects.", icon: Layers },
      { title: "Governance Systems", desc: "Configure custom roles, administrative policies, and security controls.", icon: Lock },
      { title: "Workflow Automation", desc: "Automate notifications, approvals, and data synchronization.", icon: Workflow },
      { title: "Internal Communications", desc: "Built-in messaging, announcement streams, and event links.", icon: Radio },
      { title: "Operational Intelligence", desc: "Track resource usage, facilitator metrics, and overall output.", icon: Cpu },
      { title: "Executive Dashboards", desc: "High-level summary panels showing live organizational metrics.", icon: LineChart },
      { title: "Enterprise Analytics", desc: "Detailed custom reporting templates for quarterly stakeholders.", icon: BarChart3 },
      { title: "AI Operational Monitoring", desc: "AI agent scanning workflows for efficiency improvements.", icon: Bot }
    ],
    workflow: [
      { title: "Waitlist Signup", desc: "Register your organization for early beta access." },
      { title: "Architectural Mapping", desc: "Define workspaces, API schemas, and region requirements." },
      { title: "Workspace Provisioning", desc: "Deploy dedicated nodes and configure administrator keys." },
      { title: "User Migration", desc: "Sync directories via Okta, Azure AD, or custom SAML." }
    ],
    benefits: [
      { title: "NGOs & Foundations", desc: "Track program delivery across remote chapters with clear visibility." },
      { title: "Governments", desc: "Deploy training, civil programs, and events on locally-hosted networks." },
      { title: "Corporate Operations", desc: "Standardize onboarding, compliance training, and stakeholder webinars." }
    ],
    outcomes: [
      { label: "SLA Guarantee", value: "99.99%", trend: "Active uptime" },
      { label: "Directory Sync", value: "SSO", trend: "Okta / SAML / Active Directory" },
      { label: "Hosting", value: "Private", trend: "Sovereign Cloud" },
      { label: "Support", value: "Dedicated", trend: "Success Manager" }
    ],
    cta: {
      headline: "Join the waitlist for early access.",
      subheadline: "Get early access to OYEN GRID Enterprise for your organization.",
      buttonText: "Join Waitlist"
    }
  },

  // ==========================================
  // FEATURES
  // ==========================================
  "features/programme-management": {
    title: "Programme Management",
    subtitle: "Delivery Hub",
    description: "Manage Every Programme From One Dashboard.",
    category: "Features",
    hero: {
      headline: "Manage Every Programme From One Dashboard.",
      subheadline: "Track milestones, curriculums, events, and performance indicators across multiple program runs in real time.",
      ctas: [{ text: "Request Access", href: "#access", primary: true }],
      visualType: "feature-dash"
    },
    problem: {
      headline: "The Friction of Manual Programme Setup",
      intro: "Recreating curricula, managing calendar invites, and tracking dates manually takes days. OYEN GRID automates it.",
      points: [
        { title: "Calendar Drift", desc: "Changing a module date requires manually adjusting 20 different invites and calendar sheets." },
        { title: "No Program Templates", desc: "Setting up a new cohort iteration means copying folders and creating assets from scratch." }
      ]
    },
    solution: {
      headline: "Structured Program Blueprints",
      intro: "Create reusable program blueprints to deploy new cohort runs in minutes.",
      points: [
        { title: "Curriculum Builder", desc: "Structure modules, classes, assignments, and reading materials." },
        { title: "Dynamic Calendar Sync", desc: "Adjust a date once; all student schedules, invites, and notifications update automatically." }
      ]
    },
    features: [
      { title: "Programme Creation", desc: "Assemble lessons, milestones, and deliverables.", icon: BookOpen },
      { title: "Cohorts", desc: "Allocate multiple learner cohorts to a single curriculum blueprint.", icon: Users },
      { title: "Milestones", desc: "Set critical progress checkpoints and assessment deadlines.", icon: Target },
      { title: "Tracking", desc: "Monitor module progress and facilitator completion schedules.", icon: Activity },
      { title: "Analytics", desc: "Compare pass rates and timeline slippages across separate runs.", icon: BarChart3 },
      { title: "Health Monitoring", desc: "Instantly see if a cohort is lagging behind the master schedule.", icon: Cpu }
    ],
    workflow: [
      { title: "Blueprint Creation", desc: "Configure course structure once." },
      { title: "Schedule Mapping", desc: "Link live session slots and submission timelines." },
      { title: "Cohort Deployment", desc: "Instantly populate learner calendars and resources." }
    ],
    benefits: [
      { title: "Repeatable Operations", desc: "Duplicate successful programs with a single click." },
      { title: "Facilitator Alignment", desc: "Provide coordinators with clear schedules and lesson guides." }
    ],
    outcomes: [
      { label: "Deployment Time", value: "< 5m", trend: "Down from 3 days" },
      { label: "Calendar Errors", value: "0", trend: "Fully automated sync" }
    ],
    cta: {
      headline: "Take control of your programs.",
      subheadline: "Eliminate administrative errors and scale your delivery operations.",
      buttonText: "Schedule a Demo"
    }
  },

  "features/participant-management": {
    title: "Participant Management",
    subtitle: "Learner CRM",
    description: "Understand Every Participant.",
    category: "Features",
    hero: {
      headline: "Understand Every Participant.",
      subheadline: "Centralized student registry tracking attendance, scores, interactions, and milestones in a single clean profile.",
      ctas: [{ text: "Request Access", href: "#access", primary: true }],
      visualType: "feature-dash"
    },
    problem: {
      headline: "Silent Dropouts and Invisible Students",
      intro: "When performance and attendance records are scattered across different files, it is impossible to spot students struggling until it is too late.",
      points: [
        { title: "Fragmented Profiles", desc: "Student contact details are in the registry, but their actual session logs are in Zoom files." },
        { title: "No Warning System", desc: "No notification when a student misses two consecutive live classes or stops submitting work." }
      ]
    },
    solution: {
      headline: "Centralized Profile Telemetry",
      intro: "Every action—submitting an assignment, attending a webinar, or opening a PDF—is logged to a single profile.",
      points: [
        { title: "Comprehensive Profiles", desc: "See contact data, cohort history, scores, and active logs in one view." },
        { title: "Risk Prevention Engine", desc: "Identify disengaged participants early using active tracking alerts." }
      ]
    },
    features: [
      { title: "Profiles", desc: "Full registry details, history, certifications, and communication log.", icon: Users },
      { title: "Enrollment", desc: "Simple CSV imports, manual creation, or API registrations.", icon: Layers },
      { title: "Progress Tracking", desc: "Watch curriculum milestone completion percentages live.", icon: Activity },
      { title: "Risk Alerts", desc: "Auto-flags participants whose attendance falls below limits.", icon: Shield },
      { title: "Engagement Monitoring", desc: "Track slide views, quiz attempts, and forum posts.", icon: Target }
    ],
    workflow: [
      { title: "Onboarding", desc: "Import list and generate participant accounts." },
      { title: "Activity Logging", desc: "System automatically logs session attendance and submissions." },
      { title: "Risk Scan", desc: "AI scans engagement and alerts coordinators of issues." }
    ],
    benefits: [
      { title: "Early Intervention", desc: "Catch struggling participants before they drop out." },
      { title: "Fast Sponsor Reporting", desc: "Generate individual progress files for funding partners in seconds." }
    ],
    outcomes: [
      { label: "Dropout Reduction", value: "-25%", trend: "Through risk alerts" },
      { label: "Registry Updates", value: "Instant", trend: "Real-time sync" }
    ],
    cta: {
      headline: "Improve student retention.",
      subheadline: "Get clear visibility into student progress today.",
      buttonText: "Start Managing Cohorts"
    }
  },

  "features/oyen-live": {
    title: "OYEN Live",
    subtitle: "Built-in Meetings",
    description: "Built-In Live Delivery Infrastructure.",
    category: "Features",
    hero: {
      headline: "Built-In Live Delivery Infrastructure.",
      subheadline: "Premium, low-latency video and audio classrooms built specifically for scheduled sessions and cohort tracking.",
      ctas: [{ text: "Request Access", href: "#access", primary: true }],
      visualType: "feature-dash"
    },
    problem: {
      headline: "The Inefficiency of Generic Video Software",
      intro: "Generic meeting tools don't know who your students are, force you to share links manually, and hide attendance data in raw CSV downloads.",
      points: [
        { title: "Link Management Overhead", desc: "Coordinators must continuously send Zoom/Teams links across WhatsApp and Email." },
        { title: "Disconnected Data", desc: "Who joined, when they left, and what they said isn't tied to their classroom profiles." }
      ]
    },
    solution: {
      headline: "The Classroom Embedded in the Grid",
      intro: "OYEN Live runs directly inside your browser. No downloads, no calendar links, and total telemetry.",
      points: [
        { title: "One-Click Join", desc: "Students join straight from their current module dashboard." },
        { title: "Automated Registry Link", desc: "Live participation rates flow directly to gradebooks and attendance reports." }
      ]
    },
    features: [
      { title: "Video Meetings", desc: "High-definition web conferencing optimized for remote locations.", icon: Radio },
      { title: "Audio Meetings", desc: "Low-bandwidth audio channels for areas with poor mobile networks.", icon: Radio },
      { title: "Chat", desc: "Interactive session chat with thread replies and file attachments.", icon: Target },
      { title: "Screen Sharing", desc: "High-frame-rate screen sharing for facilitators and students.", icon: Layers },
      { title: "Recording", desc: "Automated cloud recording with immediate processing.", icon: Cpu },
      { title: "Attendance Capture", desc: "Logs exact participant session minutes automatically.", icon: Activity }
    ],
    workflow: [
      { title: "Session Schedule", desc: "Facilitator sets the slot in the programme calendar." },
      { title: "Secure Entry", desc: "Participants enter the room directly via their dashboard." },
      { title: "Log Synthesis", desc: "Session closes; presence details are sent to student registries." }
    ],
    benefits: [
      { title: "Zero Setup Fatigue", desc: "No need to generate, copy, or distribute external meeting links." },
      { title: "Accurate Attendance", desc: "Get real presence tracking down to the second." }
    ],
    outcomes: [
      { label: "Join Friction", value: "0 Links", trend: "Dashboard embedded" },
      { label: "Latency Index", value: "42ms", trend: "Optimized delivery" }
    ],
    cta: {
      headline: "Upgrade your live sessions.",
      subheadline: "Deploy a virtual classroom built for education, not generic business meetings.",
      buttonText: "Request Access"
    }
  },

  "features/attendance-intelligence": {
    title: "Attendance Intelligence",
    subtitle: "Presence Engine",
    description: "Automated Attendance Without Manual Tracking.",
    category: "Features",
    hero: {
      headline: "Automated Attendance Without Manual Tracking.",
      subheadline: "Track active presence, session duration, and compliance metrics without manual rosters.",
      ctas: [{ text: "Request Access", href: "#access", primary: true }],
      visualType: "feature-dash"
    },
    problem: {
      headline: "The Pain of Roster Administration",
      intro: "Taking attendance manually eats 10 minutes of every class, while digital rosters require exporting, parsing, and cleaning logs.",
      points: [
        { title: "Hours Wasted", desc: "Coordinators spend hours looking through Zoom logs to check attendance." },
        { title: "Unreliable Data", desc: "Users typing different names, logging out, or joining late results in inaccurate records." }
      ]
    },
    solution: {
      headline: "Automated Presence Logging",
      intro: "Our registry engine tracks session presence automatically, verifying accounts and logging active connection minutes.",
      points: [
        { title: "Precision Logging", desc: "Logs exact arrival, departure, and reconnect events for all users." },
        { title: "Audit Readiness", desc: "Generate compliance-ready reports for sponsors and state funding automatically." }
      ]
    },
    features: [
      { title: "Join Logs", desc: "Captures the exact timestamp a student connects to the session.", icon: Activity },
      { title: "Leave Logs", desc: "Identifies early departures and disconnects.", icon: Activity },
      { title: "Attendance Reports", desc: "Instant exports filtered by cohort, student, or module.", icon: FileCheck },
      { title: "Analytics", desc: "Visualize historical attendance trends across semesters.", icon: BarChart3 },
      { title: "Participation Metrics", desc: "Score attendance based on active class duration.", icon: Cpu }
    ],
    workflow: [
      { title: "Session Live", desc: "System tracks connections in the background." },
      { title: "Duration Parsing", desc: "Presence minutes are aggregated and filtered." },
      { title: "Roster Post", desc: "Final scores are published to student dashboards." }
    ],
    benefits: [
      { title: "Time Saved", desc: "Coordinators save hours of sheet updating every week." },
      { title: "Total Accuracy", desc: "Eliminate errors caused by manual roster updates." }
    ],
    outcomes: [
      { label: "Admin Time Savings", value: "100%", trend: "Fully automated logs" },
      { label: "Data Accuracy", value: "99.99%", trend: "User verified tokens" }
    ],
    cta: {
      headline: "Automate your presence tracking.",
      subheadline: "Get accurate attendance records without lifting a finger.",
      buttonText: "Enable Attendance Intelligence"
    }
  },

  "features/assessments": {
    title: "Assessments",
    subtitle: "Evaluations Engine",
    description: "Measure Learning Outcomes At Scale.",
    category: "Features",
    hero: {
      headline: "Measure Learning Outcomes At Scale.",
      subheadline: "Deploy structured quizzes, multi-file assignments, grading templates, and feedback systems from one registry.",
      ctas: [{ text: "Request Access", href: "#access", primary: true }],
      visualType: "feature-dash"
    },
    problem: {
      headline: "The Mess of Collecting Student Submissions",
      intro: "Managing submissions through email or Google Drive folders leads to lost files and grading bottlenecks.",
      points: [
        { title: "Scattered Files", desc: "Assignments sent via email are easily missed, deleted, or mixed up." },
        { title: "Grading Bottlenecks", desc: "No simple way to track which assignments are pending, graded, or require feedback." }
      ]
    },
    solution: {
      headline: "A Unified Assessment System",
      intro: "Create clear assignment deadlines, student portals, and grading dashboards for your team.",
      points: [
        { title: "Structured Portals", desc: "Students submit links, files, and text answers directly to the module." },
        { title: "Facilitator Hub", desc: "Coordinators grade submissions and send feedback from a single interface." }
      ]
    },
    features: [
      { title: "Quizzes", desc: "Design multiple-choice, select-all, and short-answer tests.", icon: FileCheck },
      { title: "Tests", desc: "Proctored assessment tools for midterm and final verification.", icon: Shield },
      { title: "Assignments", desc: "Accept PDFs, videos, zip archives, and code URLs.", icon: BookOpen },
      { title: "Submissions", desc: "Secure dashboard tracking all uploaded files and timestamps.", icon: Layers },
      { title: "Grading", desc: "Configure custom rubrics, pass thresholds, and feedback notes.", icon: Target },
      { title: "Analytics", desc: "Analyze average cohort scores to identify challenging modules.", icon: BarChart3 }
    ],
    workflow: [
      { title: "Assessment Design", desc: "Create rubrics and link them to modules." },
      { title: "Student Submission", desc: "Upload files directly through student dashboards." },
      { title: "Facilitator Review", desc: "Provide grades and feedback through the grading portal." }
    ],
    benefits: [
      { title: "Consolidated Submissions", desc: "All files organized by cohort and module automatically." },
      { title: "Clear Student Feedback", desc: "Students access grades and feedback directly on their dashboards." }
    ],
    outcomes: [
      { label: "Grading Cycles", value: "-50%", trend: "Through grading shortcuts" },
      { label: "File Loss", value: "0%", trend: "Cloud secured tracking" }
    ],
    cta: {
      headline: "Upgrade your testing engine.",
      subheadline: "Deploy assignments, proctored tests, and quick feedback systems.",
      buttonText: "Try Assessments"
    }
  },

  "features/certificates": {
    title: "Certificates",
    subtitle: "Credential Hub",
    description: "Automated Certification Infrastructure.",
    category: "Features",
    hero: {
      headline: "Automated Certification Infrastructure.",
      subheadline: "Design, generate, verify, and distribute digital certificates automatically upon program completion.",
      ctas: [{ text: "Request Access", href: "#access", primary: true }],
      visualType: "feature-dash"
    },
    problem: {
      headline: "The Pain of Designing and Mailing Certificates",
      intro: "Manually designing, exporting, and sending PDF certificates is time-consuming and leads to typos and requests for replacements.",
      points: [
        { title: "Manual Exports", desc: "Designers must manually create PDF files for hundreds of students." },
        { title: "No Verification", desc: "Employers cannot easily verify if a shared certificate is legitimate." }
      ]
    },
    solution: {
      headline: "Instant Verifiable Credentials",
      intro: "Link credentials directly to completion metrics, generating verifiable certificates automatically.",
      points: [
        { title: "Auto-Generation", desc: "Certificates are generated using the student's registry data automatically." },
        { title: "Grid-Based Verification", desc: "Every certificate has a unique ID and verification page for employers." }
      ]
    },
    features: [
      { title: "Certificate Generation", desc: "Uses templates to populate names, courses, and dates automatically.", icon: GraduationCap },
      { title: "Verification", desc: "A secure verification portal for employers to validate certificates.", icon: Shield },
      { title: "Digital Distribution", desc: "Sends certificates to students via email with LinkedIn sharing options.", icon: Radio },
      { title: "Certificate Records", desc: "Maintain a complete registry of all issued credentials.", icon: FileCheck }
    ],
    workflow: [
      { title: "Template Setup", desc: "Design layouts and map placeholder fields." },
      { title: "Threshold Check", desc: "System checks completion rates and grading requirements." },
      { title: "Auto-Issue", desc: "Generate, log, and send verifiable certificates." }
    ],
    benefits: [
      { title: "Instant Delivery", desc: "Students receive credentials the moment they pass requirements." },
      { title: "Employer Trust", desc: "Provide employers with a secure verification system." }
    ],
    outcomes: [
      { label: "Issuance Time", value: "Instant", trend: "Zero administrative lag" },
      { label: "Verification Checks", value: "Self-Serve", trend: "For employers & partners" }
    ],
    cta: {
      headline: "Automate your credentials.",
      subheadline: "Issue secure, verifiable digital credentials automatically.",
      buttonText: "Launch Credentials"
    }
  },

  "features/resource-library": {
    title: "Resource Library",
    subtitle: "Curriculum Assets",
    description: "Centralized Learning Resources.",
    category: "Features",
    hero: {
      headline: "Centralized Learning Resources.",
      subheadline: "Host, search, and distribute PDFs, video files, documents, and assets securely across your cohorts.",
      ctas: [{ text: "Request Access", href: "#access", primary: true }],
      visualType: "feature-dash"
    },
    problem: {
      headline: "The Mess of Shared Folders",
      intro: "Google Drive or Dropbox links easily get lost in chat groups, and lack tracking to see who has accessed the materials.",
      points: [
        { title: "Lost Files", desc: "Students struggle to find slides and reading links across WhatsApp chats." },
        { title: "No Access Logs", desc: "No way to see if students are actually reading the assigned material before sessions." }
      ]
    },
    solution: {
      headline: "An Integrated Asset Library",
      intro: "Link files directly to specific lessons, modules, and cohort structures.",
      points: [
        { title: "Embedded Assets", desc: "Files appear inside the student's lesson dashboard automatically." },
        { title: "Access Telemetry", desc: "Track who opens and reads each file to measure engagement." }
      ]
    },
    features: [
      { title: "PDFs", desc: "Host syllabi, reports, guides, and slide decks.", icon: BookOpen },
      { title: "Videos", desc: "Upload instructional videos and record live sessions automatically.", icon: Radio },
      { title: "Documents", desc: "Share handouts, references, template sheets, and zip files.", icon: Layers },
      { title: "Learning Materials", desc: "Organize assets by module, week, or cohort.", icon: Database },
      { title: "Search", desc: "Fast search index for students to locate files across courses.", icon: Target }
    ],
    workflow: [
      { title: "Asset Upload", desc: "Facilitators drag and drop files into modules." },
      { title: "Student Access", desc: "View and download assets straight from the lesson page." },
      { title: "Telemetry Log", desc: "Log document views and reading duration." }
    ],
    benefits: [
      { title: "Clean Organization", desc: "Eliminate messy external folder structures." },
      { title: "Engagement Metrics", desc: "Identify which resources are most useful to students." }
    ],
    outcomes: [
      { label: "Search Speed", value: "Instant", trend: "Search index matching" },
      { label: "Resource Activity", value: "Logged", trend: "Tracks student engagement" }
    ],
    cta: {
      headline: "Organize your program assets.",
      subheadline: "Centralize your files and track student engagement today.",
      buttonText: "Set Up Library"
    }
  },

  "features/analytics": {
    title: "Analytics",
    subtitle: "Operational Intel",
    description: "Turn Operational Data Into Decisions.",
    category: "Features",
    hero: {
      headline: "Turn Operational Data Into Decisions.",
      subheadline: "Track program health, cohort performance, attendance averages, and metrics across all departments.",
      ctas: [{ text: "Request Access", href: "#access", primary: true }],
      visualType: "feature-dash"
    },
    problem: {
      headline: "Decisions Made in the Dark",
      intro: "Without centralized metrics, program coordinators spend days compiling data from different sheets just to see basic performance trends.",
      points: [
        { title: "Compiling Data Takes Days", desc: "Data must be gathered, matched, and cleaned from separate apps." },
        { title: "Delayed Interventions", desc: "Spotting a failing cohort or disengaged group only after the semester is over." }
      ]
    },
    solution: {
      headline: "Real-Time Operational Insights",
      intro: "Access live metrics showing cohort progress, attendance, and grading indicators.",
      points: [
        { title: "Live Dashboards", desc: "View real-time dashboards designed for administrators and sponsors." },
        { title: "Proactive Actions", desc: "Identify lagging groups early and adjust schedules to match." }
      ]
    },
    features: [
      { title: "Programme Analytics", desc: "Compare completion rates and milestones across separate courses.", icon: BarChart3 },
      { title: "Participant Analytics", desc: "Track average scores, class presence, and engagement metrics.", icon: Users },
      { title: "Completion Reports", desc: "Extract audit-ready completion and grade sheets.", icon: FileCheck },
      { title: "Engagement Reports", desc: "Monitor activity indices, chat inputs, and library usage.", icon: Target },
      { title: "Impact Measurement", desc: "Analyze performance improvements and cohort feedback.", icon: Activity }
    ],
    workflow: [
      { title: "Telemetry Logging", desc: "Every action is logged to the database automatically." },
      { title: "Data Aggregation", desc: "Metrics are processed and grouped by program and cohort." },
      { title: "Dashboard Update", desc: "Live charts and reports update immediately." }
    ],
    benefits: [
      { title: "Data-Driven Decisions", desc: "Deploy resources where they are needed most based on active data." },
      { title: "Simple Reporting", desc: "Provide sponsors and partners with clean, downloadable reports." }
    ],
    outcomes: [
      { label: "Report Exports", value: "< 5s", trend: "Down from 2 days" },
      { label: "Metric Latency", value: "Real-time", trend: "Updates instantly" }
    ],
    cta: {
      headline: "Measure your program impact.",
      subheadline: "Get accurate, real-time analytics for your organization.",
      buttonText: "Access Analytics Hub"
    }
  },

  "features/ai-assistant": {
    title: "AI Assistant",
    subtitle: "AI Operations",
    description: "AI Embedded Across Programme Operations.",
    category: "Features",
    hero: {
      headline: "AI Embedded Across Programme Operations.",
      subheadline: "Automate session transcripts, summarize chat logs, and get insights on participant risks.",
      ctas: [{ text: "Request Access", href: "#access", primary: true }],
      visualType: "feature-dash"
    },
    problem: {
      headline: "Administrative Overload in Large Cohorts",
      intro: "Facilitators spend hours summarizing session chats, answering common questions, and reviewing student profiles.",
      points: [
        { title: "Hours Spent Reviewing", desc: "Reviewing hours of recorded lectures to find key student questions." },
        { title: "Overlooked Warning Signs", desc: "Struggling to find time to scan spreadsheets for struggling students." }
      ]
    },
    solution: {
      headline: "An Intelligent Assistant for Your Team",
      intro: "Our embedded AI handles administrative tasks, analyzes session recordings, and flags student risks.",
      points: [
        { title: "Automated Summaries", desc: "Transcribe sessions, summarize chats, and highlight action items automatically." },
        { title: "Proactive Risk Flags", desc: "AI scans presence logs to flag students at risk of failing." }
      ]
    },
    features: [
      { title: "Session Summaries", desc: "Generate transcripts, summaries, and action lists from OYEN Live sessions.", icon: Bot },
      { title: "Participant Insights", desc: "Get quick summaries of student performance and attendance trends.", icon: Users },
      { title: "Programme Intelligence", desc: "Review syllabus effectiveness and average cohort speed.", icon: Brain },
      { title: "Risk Detection", desc: "Auto-flags students with dropping engagement metrics.", icon: Shield },
      { title: "Operational Recommendations", desc: "Get tips on scheduling improvements and lesson designs.", icon: Target }
    ],
    workflow: [
      { title: "Session Analysis", desc: "AI processes recordings and chat files." },
      { title: "Synthesis", desc: "Highlights questions, key themes, and action items." },
      { title: "Alert Logs", desc: "Flags disengaged students in the admin panel." }
    ],
    benefits: [
      { title: "Unload Administrative Tasks", desc: "Free up coordinators' time by automating summaries." },
      { title: "Catch Issues Early", desc: "Prevent drops in completion rates with early risk warnings." }
    ],
    outcomes: [
      { label: "Summaries Generated", value: "Instant", trend: "Post-session" },
      { label: "Time Saved", value: "4h", trend: "Per coordinator/week" }
    ],
    cta: {
      headline: "Work smarter with AI.",
      subheadline: "Integrate intelligent assistants into your program operations.",
      buttonText: "Enable AI Assistant"
    }
  },

  // ==========================================
  // COMPANY
  // ==========================================
  "company/about": {
    title: "About Us",
    subtitle: "Our Mission",
    description: "Building The Operating System For Programme Delivery.",
    category: "Company",
    hero: {
      headline: "Building The Operating System For Programme Delivery.",
      subheadline: "We are on a mission to organize training operations, webinars, and education systems into a single intelligent registry.",
      ctas: [{ text: "Read Our Story", href: "#story", primary: true }],
      visualType: "company-page"
    },
    problem: {
      headline: "The Core Problem We Are Solving",
      intro: "Every year, millions of programs, bootcamps, and courses are held worldwide. Yet, almost all are run using disconnected spreadsheets and separate video tools.",
      points: [
        { title: "Coordination Friction", desc: "Coordinators are buried under manual logs, data updates, and link management." },
        { title: "Fragmented Learner Journey", desc: "Students are forced to navigate separate systems, reducing engagement." }
      ]
    },
    solution: {
      headline: "The OYEN GRID Solution",
      intro: "We build modern registry, scheduling, video, and grading tools into a single, unified operating system.",
      points: [
        { title: "Unified Design", desc: "Centralize data, timelines, and virtual rooms under one login." },
        { title: "Operational Automation", desc: "Let software handle attendance, certificates, and alerts." }
      ]
    },
    features: [
      { title: "Mission First", desc: "Empower organizations to deliver high-quality programs globally.", icon: Target },
      { title: "Technical Excellence", desc: "Build low-latency, secure, and accessible systems.", icon: Cpu },
      { title: "Security Obsession", desc: "Protect institutional and student data privacy.", icon: Shield },
      { title: "Sponsor Transparency", desc: "Provide clear impact metrics for program funders.", icon: BarChart3 }
    ],
    workflow: [
      { title: "Founding", desc: "Spotted the operational challenges in large bootcamps." },
      { title: "Core Platform", desc: "Built the unified database, registry, and OYEN Live room." },
      { title: "Global Scale", desc: "Scaling operations to power academies and training programs worldwide." }
    ],
    benefits: [
      { title: "Reliability", desc: "Engineered on modern cloud networks for 99.99% uptime." },
      { title: "Growth", desc: "Expanding features to support more operations every day." }
    ],
    outcomes: [
      { label: "Active Programs", value: "4,200+", trend: "Across 24 countries" },
      { label: "Minutes Streamed", value: "12M+", trend: "Via OYEN Live" }
    ],
    cta: {
      headline: "Partner with OYEN GRID.",
      subheadline: "Join us in modernizing program operations.",
      buttonText: "Contact Our Team"
    }
  },

  "company/careers": {
    title: "Careers",
    subtitle: "Join Us",
    description: "Help Build The Future Of Programme Operations.",
    category: "Company",
    hero: {
      headline: "Help Build The Future Of Programme Operations.",
      subheadline: "Join our team in building the next-generation infrastructure for bootcamps, universities, and virtual events.",
      ctas: [{ text: "View Open Roles", href: "#positions", primary: true }],
      visualType: "company-page"
    },
    problem: {
      headline: "Why Join OYEN GRID?",
      intro: "We are solving a massive coordination problem that affects universities, academies, and NGOs globally. We are looking for talented, driven individuals to help us build the future of education infrastructure.",
      points: [
        { title: "Remote-First", desc: "Work from anywhere in the world with flexible hours." },
        { title: "High Impact", desc: "Your code and designs will power programs that educate millions of students." }
      ]
    },
    solution: {
      headline: "Our Team Culture",
      intro: "We value ownership, speed, and design precision. We run a collaborative, flat structure where everyone contributes directly to the product.",
      points: [
        { title: "Continuous Learning", desc: "Access training budgets and resources to grow your career." },
        { title: "Open Communication", desc: "Clear alignment across engineering, product, and sales." }
      ]
    },
    features: [
      { title: "Full Benefits", desc: "Comprehensive health, dental, and wellness plans.", icon: Shield },
      { title: "Latest Gear", desc: "Get the hardware and software you need to succeed.", icon: Cpu },
      { title: "Annual Retreats", desc: "Join our team in person at our global retreats.", icon: Globe },
      { title: "Stock Options", desc: "Get ownership in the company you're helping build.", icon: Target }
    ],
    workflow: [
      { title: "Apply Online", desc: "Submit your details and past projects." },
      { title: "Initial Screen", desc: "Have a chat with our recruitment team." },
      { title: "Technical Review", desc: "Showcase your skills through a short project." },
      { title: "Final Chat", desc: "Align on roles and expectations with our founders." }
    ],
    benefits: [
      { title: "Product Designer", desc: "Lead UI/UX designs for our student and admin interfaces." },
      { title: "Senior Backend Engineer", desc: "Scale our low-latency live streaming and data systems." },
      { title: "Developer Relations", desc: "Engage with developers integrating OYEN GRID APIs." }
    ],
    outcomes: [
      { label: "Team Size", value: "35+", trend: "Distributed globally" },
      { label: "Retention Rate", value: "98%", trend: "Exceptional team health" }
    ],
    cta: {
      headline: "Don't see a perfect role?",
      subheadline: "Send us an open application anyway—we are always looking for great talent.",
      buttonText: "Send Resume"
    }
  },

  "company/contact": {
    title: "Contact Us",
    subtitle: "Get In Touch",
    description: "Talk To The OYEN GRID Team.",
    category: "Company",
    hero: {
      headline: "Talk To The OYEN GRID Team.",
      subheadline: "Reach out for sales inquiries, partnership opportunities, or technical support.",
      ctas: [{ text: "Send Message", href: "#form", primary: true }],
      visualType: "company-page"
    },
    problem: {
      headline: "How Can We Help You?",
      intro: "Whether you are a bootcamp director, university dean, or NGO coordinator, we are ready to assist you. Our support and sales teams are available around the clock.",
      points: [
        { title: "Sales Queries", desc: "Get custom pricing and demo environments for your team." },
        { title: "Customer Support", desc: "Access technical assistance for live rooms or gradebooks." }
      ]
    },
    solution: {
      headline: "Our Response Standard",
      intro: "We aim to answer all inquiries within an hour, ensuring your programs run without interruption.",
      points: [
        { title: "Live SLA Support", desc: "Enterprise teams access dedicated Slack/WhatsApp support channels." },
        { title: "Sovereign Staging Help", desc: "Guidance on setting up private nodes and local servers." }
      ]
    },
    features: [
      { title: "Email Sales", desc: "sales@oyengrid.com", icon: Mail },
      { title: "Email Support", desc: "support@oyengrid.com", icon: Mail },
      { title: "Global HQ", desc: "San Francisco, CA", icon: MapPin },
      { title: "Response SLA", desc: "< 1 Hour", icon: Activity }
    ],
    workflow: [
      { title: "Inquiry Sent", desc: "Submit your details via email or our contact page." },
      { title: "Review", desc: "Our team routes your inquiry to the right specialist." },
      { title: "Resolution", desc: "Get answers, custom plans, or scheduling setups." }
    ],
    benefits: [
      { title: "Sales Consulting", desc: "Get custom integration plans for your existing databases." },
      { title: "Partnerships", desc: "Explore academic collaboration opportunities." }
    ],
    outcomes: [
      { label: "Response Time", value: "< 24m", trend: "Average SLA" },
      { label: "Resolution Rate", value: "99.2%", trend: "High satisfaction" }
    ],
    cta: {
      headline: "Start the conversation today.",
      subheadline: "Our team is ready to help you optimize your program delivery.",
      buttonText: "Email Us Now"
    }
  },

  "company/enterprise-sales": {
    title: "Enterprise Sales",
    subtitle: "Enterprise Tier",
    description: "Enterprise Infrastructure For Large Organizations.",
    category: "Company",
    hero: {
      headline: "Enterprise Infrastructure For Large Organizations.",
      subheadline: "Dedicated infrastructure, white-label branding, customized integrations, and premium SLA support packages.",
      ctas: [
        { text: "Book Enterprise Consultation", href: "#consultation", primary: true },
        { text: "Read Security Policy", href: "#security", primary: false }
      ],
      visualType: "company-page"
    },
    problem: {
      headline: "Complex Compliance and Scale Needs",
      intro: "Large universities and national NGOs require strict data residency, custom auth protocols, and private hosting that standard software cannot offer.",
      points: [
        { title: "Data Residency Concerns", desc: "Requirements to host student profiles and session records within specific borders." },
        { title: "Integration Headaches", desc: "Syncing class rosters with legacy databases or internal SSO configurations." }
      ]
    },
    solution: {
      headline: "Custom Enterprise Provisioning",
      intro: "We deploy private instances of the OYEN GRID configured to meet your exact security and integration rules.",
      points: [
        { title: "Dedicated Infrastructure", desc: "Run your system on isolated servers with custom firewalls." },
        { title: "White-Label Brand", desc: "Apply your logos, domains, styles, and custom email senders." }
      ]
    },
    features: [
      { title: "White Label", desc: "Run OYEN GRID entirely under your institution's domain and branding.", icon: Layers },
      { title: "API Access", desc: "Access clean API routes to sync directories, grades, and attendance data.", icon: Terminal },
      { title: "Dedicated Infrastructure", desc: "Deploy isolated backend servers to secure high performance.", icon: Server },
      { title: "Custom Integrations", desc: "Connect with legacy student databases, Okta, or Salesforce.", icon: Boxes },
      { title: "Dedicated Success Manager", desc: "Get a dedicated advisor to assist with onboarding and configuration.", icon: Users },
      { title: "SLA Support", desc: "Priority support with guaranteed response times.", icon: Shield },
      { title: "Custom Deployment", desc: "Choose private cloud, AWS, Azure, or locally-hosted options.", icon: Building2 }
    ],
    workflow: [
      { title: "Initial Meeting", desc: "Align on security, scaling, and white-labeling rules." },
      { title: "Architecture Design", desc: "Specify server setups, regions, and SSO options." },
      { title: "Staging Provision", desc: "Launch an isolated test workspace for your team." },
      { title: "Production Deploy", desc: "Launch the production registry and move user accounts." }
    ],
    benefits: [
      { title: "Guaranteed Performance", desc: "Isolated servers ensure no lag during peak usage." },
      { title: "Seamless Brand Experience", desc: "Keep students and facilitators inside your brand's workspace." }
    ],
    outcomes: [
      { label: "Uptime SLA", value: "99.999%", trend: "Guaranteed contract" },
      { label: "Deployment Staging", value: "48h", trend: "For custom servers" }
    ],
    cta: {
      headline: "Ready to upgrade your infrastructure?",
      subheadline: "Book a consultation with our enterprise architects today.",
      buttonText: "Book Enterprise Consultation"
    }
  }
};

export const getPageData = (slug: string) => {
  return enterpriseData[slug] || {
    title: slug.split('/').pop()?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || "Operational Node",
    subtitle: "Institutional Infrastructure",
    description: "Professional operational infrastructure for institutional coordination and structured programme delivery at global scale.",
    category: slug.split('/')[0].charAt(0).toUpperCase() + slug.split('/')[0].slice(1),
    hero: {
      headline: slug.split('/').pop()?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || "Operational Node",
      subheadline: "Professional operational infrastructure for institutional coordination and structured programme delivery.",
      ctas: [{ text: "Request Access", href: "#access", primary: true }]
    },
    problem: {
      headline: "Fragmented Workflows Hurt Efficiency",
      points: [
        { title: "Disconnected Data", desc: "Information scattered across multiple tools leads to human errors." }
      ]
    },
    solution: {
      headline: "Synchronized Delivery Grid",
      points: [
        { title: "Unified Registry", desc: "Consolidate your operations into a single secure interface." }
      ]
    },
    features: [
      { title: "Institutional Sync", desc: "Real-time coordination across distributed global nodes.", icon: Globe },
      { title: "Enterprise Security", desc: "Advanced governance and compliance automation systems.", icon: Shield },
      { title: "Operational Scale", desc: "Designed for national and global scale programme delivery.", icon: Zap },
      { title: "Live Telemetry", desc: "Instant visibility into every operational metric across the grid.", icon: Activity }
    ],
    workflow: [
      { title: "Registry Onboarding", desc: "Register your nodes on the active grid." },
      { title: "Channel Sync", desc: "Align operational timelines and directories." }
    ],
    benefits: [
      { title: "Total Control", desc: "Audit and verify every operational action across nodes." }
    ],
    outcomes: [
      { label: "System Status", value: "Operational", trend: "Stable" },
      { label: "Reliability", value: "99.9%", trend: "Guaranteed" }
    ],
    cta: {
      headline: "Deploy your operational node today.",
      buttonText: "Request Access"
    }
  };
};
