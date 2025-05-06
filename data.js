export const bio = [
    "Hi, I’m Sergio Suzerain Osson. I specialize in computer vision applied to remote sensing imagery.",
    "I’m currently pursuing a PhD in deep continual learning for satellite image time series at Université Bretagne Sud, focusing on deforestation monitoring in the Amazon.",
    "My journey blends a deep passion for artificial intelligence with a hands-on approach to solving real-world problems, especially using deep learning.",
    "Beyond remote sensing, I enjoy working on full-stack web development projects, seamlessly integrating both front-end and back-end technologies.",
    "Whether I’m analyzing satellite images or building user-focused web applications, I’m driven by creating impactful, data-driven solutions.",
    "Thanks for stopping by and learning a bit about me!",
];


export const skills = [
    {
        title: "Languages",
        skillName: "C++, JS, Java, Python",
        color: "1",
        percentage: "85",
    },
    {
        title: "Frameworks/Libraries",
        skillName: "VueJS, ReactJS",
        color: "2",
        percentage: "75",
    },
    {
        title: "Design",
        skillName: "HTML, Bootstrap, Tailwind, CSS",
        color: "3",
        percentage: "70",
    },
    {
        title: "Version Control",
        skillName: "GitHub, JIRA",
        color: "4",
        percentage: "80",
    },
    {
        title: "AI",
        skillName: "PyTorch, Scikit, Spark, Keras, OpenCV",
        color: "5",
        percentage: "90",
    },
    {
        title: "Databases",
        skillName: "MongoDB, MySQL",
        color: "6",
        percentage: "90",
    },
    {
        title: "DevOps",
        skillName: "AWS, GCP, K8S, Docker",
        color: "7",
        percentage: "76",
    },
    {
        title: "Backend",
        skillName: "Flask, ExpressJS, Node.js, Django, PHP",
        color: "8",
        percentage: "85",
    },
];

export const projects = {
    tsProjects:[
        {
            projectName: "Electricity Consumption Study",
            image: "images/electricity_consumption.png",
            summary:
                "Examination of modern machine learning and deep learning algorithms  to solve time series classification problems,\
                 focusing on the domain of electricity consumption. In particular, to detect the presence and activation of appliances.",
            preview: "https://drive.google.com/file/d/1T4ZD7LmfdOHMKeYj9oslgBIUmVrqtkJT/view?usp=sharing",
            techStack: ["Time Series", "Spark", "XGBoost"],
        },
        {
            projectName: "Epileptic cases detection",
            image: "images/epileptic_detection.png",
            summary:
                "Comparison of three methods for detecting and distinguishing healthy cases \
                from epileptic cases, without the tedious manual feature extraction procedures. Integration of the three methods in a big data schema.",
            preview: "https://drive.google.com/file/d/1t952mfQdoTVARw7I7mD9eQY2nlRWv2fO/view?usp=sharing",
            techStack: ["BiLSTM", "EEG Signals", "Spark", "SQL", "Big Data"],
        },
    ],
    webProjects: [
        {
            projectName: "Textractor",
            image: "images/textractor.png",
            summary:
                "Web application where you can upload a handwritting image from a board or on paper, and it will extract the text within. \
                The app is backed by an LLM to help correct the extracted text.",
            preview: "https://drive.google.com/file/d/1adu1uC9bHqoXH1EKkWExEsa8n158QSA2/view?usp=sharing",
            techStack: ["Flask", "ReactJS", "C++", "OCR"],
        },
        {
            projectName: "MindMania",
            image: "images/mind_mania.svg",
            summary:
                "Online platform game created to have people playing at guessing others thoughts. Much more games will be added to this in the future.",
            preview: "",
            techStack: ["Django", "ReactJS", "SQL"],
        },
        {
            projectName: "Music Tracker",
            image: "images/music_tracker.png",
            summary:
                "Online web app tools to help you keep track of favorite musics while displaying the latest chart from Deezer API. Through this app\
                you can save your music preferences and download them.",
            preview: "https://github.com/tiserge2/music-tracking",
            techStack: ["ReactJS", "ExpressJS", "MongoDB", "JWT", "Deezer API", "Youtube API"],
        },
        {
            projectName: "ChatSOS",
            image: "images/llm_chat.png",
            summary:
                "RAG(Retrieval Augmented Generation) web application where you can upload your pdf and ask question about it. \
                You can either question your own source of data of exisiting database.",
            preview: "https://github.com/tiserge2/chat-sos",
            techStack: ["LLM", "LangChain", "Pinecone", "OpenAI"],
        },
        {
            projectName: "React Social Card",
            image: "images/social_card.png",
            summary:
                "Configurable web page created with React to showcase color change on card and background. Very nice to see how you \
                you can play with the colors, and make it how you feel.",
            preview: "https://react-social-card-1mtt9zykc-tiserge2.vercel.app",
            techStack: ["ReactJS", "JavaScript"],
        },
        {
            projectName: "HaiPlast Management App",
            image: "images/haiplast.png",
            summary:
                "Application created to handle the management of the process in plastic transformation company.\
                All the aspect of the company is centralized in a single application. Offering also forecasting on plastic collection.",
            preview: "",
            techStack: ["PHP", "HTML", "SQL", "CI/CD", "Bootstrap"],
        },
        
    ],
    softwareProjects: [
        {
            projectName: "Fancy Fencing",
            image: "images/game_playing.png",
            summary:
                "Two players CLI games, where you can play with your friends on a the same network. \
                Fencing has never been so simple and funny to play with track of your points.",
            preview: "https://github.com/tiserge2/fancy-fency",
            techStack: ["MultiThreading", "Python", "Networking"],
        },
        {
            projectName: "Birthday Reminder",
            image: "images/birthday.png",
            summary:
                "CLI-based application to manage birthday with notifications. This is the easiest way to save and remind \
                of your friends birthday, if you don't want to install a graphical app for that.",
            preview: "",
            techStack: ["Java", "Linux", "SpringBoot", "MultiThreading"],
        },
        {
            projectName: "LockDat",
            image: "images/lockdat.png",
            summary:
                "Desktop based application to lock your files on your PC using your face. It uses the AES encryption to encrypt \
                your files in a folder. Harness OpenCV libraries for face recognition.",
            preview: "https://github.com/tiserge2/facial_recognition_encrypter",
            techStack: ["AES", "Linux", "JavaFX", "SQL", "OpenCV", "Face Recognition"],
        }
    ],
    androidProjects: [
        {
            projectName: "PwofPam",
            image: "images/pwofpam.jpg",
            summary:
                "Application to connect tutees and tutors where they can setup mentorship. \
                The platform allows any student to search for tutors, discuss, plan and pay directly. \
                Ressources can also be shared and sold through it.",
            preview: "/#",
            techStack: ["JAVA", "XML", "Android", "Firebase", "Moncash API"],
        },
        {
            projectName: "PaypalSDK",
            image: "images/paypal_sdk.png",
            summary:
                "Implementation of the Paypal payment SDK in android platform. Allow the integration of Paypal payment \
                method easily in any android application to make easy money transaction.",
            preview: "https://github.com/tiserge2/paypalSDK",
            techStack: ["JAVA", "XML", "Android", "Paypal"],
        },
        {
            projectName: "ContactMe",
            image: "images/contact_me.png",
            summary:
                "This application helps to manage your contact on your phone. Easily creates, delete and edit your contact with \
                this simple application. It baked by the simple and light sql database SQLite",
            preview: "https://github.com/tiserge2/contactme",
            techStack: ["Kotlin", "XML", "Android", "SQL", "SQLite"],
        }
    ],
    cvProjects: [
        {
            projectName: "Text Line Extraction",
            image: "images/text_line_extraction.jpg",
            summary:
                "Board text extractor done with C++. The objective is, using image analysis techniques, to extract the board, then extract the line of text and to recognize the text using OCR.",
            preview: "",
            techStack: ["C++", "Hough Line Transform", "CNN"],
        },
        {
            projectName: "Object Spatial Relationship Study",
            image: "images/object_spat.png",
            summary: "The objective is to expand the concept of Histogram of forces to analyze the evolution of spatial configuration between objects over time (temporal strip), for example in a video.",
            preview:
                "https://docs.google.com/presentation/d/1R8JVILRTVa5mDhc0xkPg4ktOZsY_QvNq/edit?usp=sharing&ouid=114852330427597574830&rtpof=true&sd=true",
            techStack: ["Python", "TSNe", "K-Means", "PCA", "DBScan"],
        },
        {
            projectName: "Remote Sensing Image Caption Generation",
            image: "images/some_result.png",
            summary: "This project is an implementation of the paper Exploring Models and Data for Remote Sensing Image Caption Generation by Xiaoqiang Lu et al. It creates descriptive text for remote sensing images",
            preview:
                "https://github.com/tiserge2/image-caption-generation",
            techStack: ["Remote Sensing", "RNN", "LSTM", "Attention", "CNN"],
        },
        {
            projectName: "Fuzzy C-Mean Segmentation",
            image: "images/fuzzy_cmeans.png",
            summary: "This is a segmentation method based on the fuzzy clustering algorithm. Fuzzy cmeans (FCM) is a method of clustering which allows one piece of data to belong to two or more clusters. ",
            preview:
                "https://github.com/tiserge2/fuzzy-clustering",
            techStack: ["Fuzzy Logic", "Segmentation"],
        },
        {
            projectName: "Segmentation and Tracking of Cells",
            image: "images/seg_track_cells.png",
            summary: "This project aims at segmenting images of cells and track them overtime. It leverages the StarDist model CNN based and is fine-tuned over a selected dataset.",
            preview:
                "https://colab.research.google.com/drive/1P_oc3gezq8Cohf4YytpOEE8SE9u9oaHS?usp=sharing",
            techStack: ["StarDist", "TrackPy", "Segmentation", "CNN"],
        },
        {
            projectName: "Face comparison",
            image: "images/face_comparison.png",
            summary: "I was having too much people telling me I look like Serge Aurier. So I wanted to verify this using a face comparator app :-). \
                    With the use of pre-trained models and the cosine similarity score, it was achievable.",
            preview:
                "https://colab.research.google.com/drive/1FVfIiaHY-Em0sz1Kxlh1DuoLKle_zpQu?usp=sharing",
            techStack: ["Keras", "FaceNet", "Cosine Similarity"],
        }
    ]
};

export const experience = [
    {
        title: "Caerus Medical",
        duration: "Sep 2023 - Oct 2024",
        subtitle: "Apprentice Data Scientist",
        details: [
            "Used ITK‑SNAP to segment vertebrae in MRI images, gaining familiarity with spinal anatomy.",
            "Wrote scripts for data augmentation to balance datasets, using techniques like flipping and rotation.",
            "Applied deep learning models like AlexNet and ResNet to classify endplate degeneration in MRI images,\
             focusing on Sagittal T1 and Sagittal T2 modalities.",
            "Evaluated model metrics to measure accuracy, precision, recall, and F1‑score. \
            Compared results to earlier models and state‑of‑the‑art bench‑marks.",
            "Fine‑tuned hyperparameters and used methods like online data augmentation and L1/L2 regularization to enhance model performance.",
            "Developed unit tests to ensure code quality and reliability for key scripts and functions."
        ],
        tags: ["CNN", "Jira", "PyTorch", "Git"],
        icon: "heartbeat",
    },
    {
        title: "uTest/Applause",
        duration: "Sept 2018 - May 2022",
        subtitle: "Automation Engineer",
        details: [
            "Built web platform to collect various data types like images, text, voice, and video.",
            "Stored and managed collected data on AWS S3, creating automated scripts to clean, process, \
            and verify metadata before further processing.",
            "Developed scripts to process and validate collected data, then uploaded it to customer servers\
             for use in AI model training."
        ],
        tags: ["JavaScript", "Python", "VueJS", "Flask", "NextJS", "AWS", "S3", "Optimization", "ExpressJS"],
        icon: "cubes",
    }
];

export const education = [
    {
        title: "Université Bretagne Sud",
        duration: "2025-Now",
        subtitle: "PhD Student, Vannes",
        details: ["Working on Deep continual learning for satellite image time series."],
        tags: [],
        icon: "graduation-cap",
    },
    {
        title: "Université Paris Cité",
        duration: "2022-2024",
        subtitle: "MSc. in Computer Vision and Intelligent Machines, Paris",
        details: [],
        tags: [
            "Algorithmic Complexity",
            "Optimization and Algorithmics",
            "Big Data",
            "Machine Learning",
            "Algorithmic Geometry",
            "Image Analysis",
            "Vision and Perception",
            "Knowledge Engineering",
            "Data Science",
            "Pattern Recognition",
            "3D Imaging",
            "Biomedical Imaging",
            "Video Sequences",
            "Vision System Modeling",
            "Human-Robot Interaction"
        ],
        icon: "graduation-cap",
    },
    {
        title: "Bachelor's Degree in Computer Science",
        duration: "2016-2021",
        subtitle: "Ecole Supérieure d’Infotronique d’Haïti, Port-au-Prince",
        details: [],
        tags: ["Algorithmics", "Descriptive Statistics", "Statistical Inference", "Signal Analysis", "Numerical Analysis"],
        icon: "book",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Stackoverflow",
                link: "https://stackoverflow.com/users/7879903/tiserge2",
            },
            {
                text: "GitHub",
                link: "https://github.com/tiserge2",
            }
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/ossonsergio/",
            },
            {
                text: "Medium",
                link: "https://medium.com/@sergioosson",
            }
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            }
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Theme by Vinay Somawat.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];
