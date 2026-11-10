
/* ==============================
   TRANSLATIONS
============================== */

const translations = {

    fr: {
        greeting: "Salut, je suis",
        iam: "Je suis",

        home_description: "Je suis ingénieure en données, passionnée par la conception de solutions modernes, le développement d’architectures évolutives et la transformation des données brutes en informations pertinentes à forte valeur ajoutée.",

        download_cv: "Télécharger CV",

        nav_home: "Accueil",
        nav_about: "À propos",
        nav_education: "Formation",
        nav_experience: "Expériences",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_contact: "Me contacter",

        about_title: "À propos de moi",
        about_job: "Ingénieure des données et systèmes décisionnels",

        about_description: "Ingénieure en données, avec une expérience en architecture des données, conception de pipelines ETL, mise en place de solutions Data Lakehouse et analyse des données, acquise à travers mon parcours académique, mes projets et mes expériences professionnelles.",

        location: "Sfax, Tunisie",

        education_title: "Mon parcours académique",
        education_description: "Un parcours construit autour des sciences, de l'ingénierie et de la data.",

        engineering_degree: "Diplôme d'ingénieur",
        engineering_specialty: "Ingénierie des Données et Systèmes Décisionnels",
        engineering_school: "École Nationale d'Électronique et des Télécommunications de Sfax",

        preparatory_cycle: "Cycle préparatoire",
        preparatory_specialty: "Physique-Chimie",
        preparatory_school: "Institut Préparatoire aux Études d'Ingénieurs de Sfax",

        experience_title: "Expériences Professionnelles",
        pfe_title: "Stage de Projet de Fin d'Études",
        perfectionnement_title: "Stage de Perfectionnement",
        initiation_title: "Stage d'Initiation",
        read_more: "Voir plus",

        pfe_description: "Mise en place d'un pipeline ETL/ELT moderne pour l'intégration et l'analyse décisionnelle des données issues de Microsoft Dynamics AX 2012.",

        perfectsoft_description: "Développement d'une application web de prise de rendez-vous en ligne.",
        crns_description: "Développement d'une application REST pour la gestion des parcours de soins.",

        pfe_modal_category: "Stage de Projet de Fin d'Études · 2026",
        pfe_modal_title: "Modern Data Lakehouse – Dynamics AX 2012",

        pfe_modal_intro: "Mise en place d'un pipeline ETL/ELT moderne pour l'intégration et l'analyse décisionnelle des données issues de Microsoft Dynamics AX 2012. L'objectif était de remplacer un processus de reporting manuel et répétitif par une architecture de données automatisée et évolutive.",

        missions: "Missions et réalisations",
        results: "Résultats",
        technologies: "Environnement technique",

        pfe_mission_1: "Étude de l'existant et analyse des données de l'ERP Microsoft Dynamics AX 2012.",
        pfe_mission_2: "Mise en place de la réplication transactionnelle SQL Server pour extraire les données ERP.",
        pfe_mission_3: "Développement de flux d'intégration avec SSIS pour les fichiers Excel.",
        pfe_mission_4: "Conception d'une architecture Data Lakehouse basée sur l'architecture Médaillon.",
        pfe_mission_5: "Développement de pipelines de traitement et de transformation avec Apache Spark.",
        pfe_mission_6: "Orchestration des traitements avec Apache Airflow et conteneurisation avec Docker.",
        pfe_mission_7: "Création de tableaux de bord analytiques avec Streamlit.",
        pfe_mission_8: "Développement de modèles prédictifs pour anticiper les causes de rupture de stock et recommander des fournisseurs.",

        pfe_result_1: "Automatisation du processus d'intégration et de traitement des données.",
        pfe_result_2: "Réduction du temps de traitement, passant d'un délai pouvant atteindre deux jours à environ 17 minutes.",
        pfe_result_3: "Mise à disposition d'indicateurs analytiques et prédictifs pour faciliter la prise de décision.",

        perfectsoft_modal_category: "Stage de Perfectionnement · 2025",
        perfectsoft_modal_title: "Application Web de Prise de Rendez-vous",
        perfectsoft_intro: "Conception et développement d'une application web permettant de gérer les rendez-vous en ligne et de faciliter la coordination entre les clients, les employés et les administrateurs.",

        perfectsoft_mission_1: "Analyse des besoins fonctionnels et identification des différents profils utilisateurs.",
        perfectsoft_mission_2: "Modélisation UML de l'application et de ses fonctionnalités.",
        perfectsoft_mission_3: "Développement des interfaces web adaptées aux différents utilisateurs.",
        perfectsoft_mission_4: "Implémentation des fonctionnalités de gestion et de suivi des rendez-vous.",
        perfectsoft_mission_5: "Intégration d'un calendrier interactif pour visualiser et organiser les réservations.",
        perfectsoft_mission_6: "Connexion de l'application à une base de données MongoDB.",

        crns_modal_category: "Stage d'Initiation · 2024",
        crns_modal_title: "Application de Gestion des Parcours de Soins",
        crns_intro: "Participation au développement d'une application destinée à gérer les parcours de soins des patients, en s'appuyant sur des services web et la modélisation des processus métier.",

        crns_mission_1: "Étude et compréhension des processus métier liés au parcours de soins.",
        crns_mission_2: "Modélisation des processus avec BPMN.",
        crns_mission_3: "Intégration et gestion des processus avec jBPM.",
        crns_mission_4: "Développement de services web REST avec Java.",
        crns_mission_5: "Participation à la structuration des échanges entre les composants de l'application.",

        skills_title: "Mes compétences",
        big_data: "Big Data",
        data_engineering: "Data Engineering",
        mlops_devops: "MLOps & DevOps",
        databases: "Bases de Données",
        languages: "Langages",
        erp: "ERP",
        web_development: "Développement Web",

        projects_title: "Mes projets académiques",

        financial_project_description: "Pipeline de traitement de données financières en temps réel à partir de Binance.",
        warehouse_project_description: "Conception d'un entrepôt de données à partir de plusieurs sources hétérogènes.",
        fabric_project_description: "Intégration et modélisation de données dans un environnement Microsoft Fabric.",
        customer_project_description: "Analyse du comportement d'achat et développement de modèles prédictifs.",
        talend_project_description: "Extraction et intégration de données issues du Web dans une base de données.",

        financial_intro: "Conception d'un pipeline de données financières en temps réel permettant de collecter, transmettre, traiter et stocker des données de marché provenant de Binance.",
        objectives: "Objectifs et fonctionnalités",

        financial_task_1: "Collecter les données financières à partir de Binance WebSocket.",
        financial_task_2: "Assurer la transmission des flux de données avec Apache Kafka.",
        financial_task_3: "Traiter les données en streaming avec Spark Streaming.",
        financial_task_4: "Orchestrer les traitements avec Apache Airflow.",
        financial_task_5: "Stocker les données structurées dans PostgreSQL.",
        financial_task_6: "Conteneuriser les composants avec Docker.",

        architecture: "Architecture technique",

        warehouse_intro: "Conception d'un entrepôt de données intégrant plusieurs sources hétérogènes afin de centraliser les informations et de faciliter leur exploitation à des fins décisionnelles.",

        warehouse_task_1: "Extraction des données provenant de fichiers CSV et XML.",
        warehouse_task_2: "Conception et développement des flux ETL avec SSIS.",
        warehouse_task_3: "Nettoyage, transformation et chargement des données.",
        warehouse_task_4: "Modélisation dimensionnelle et création d'un cube OLAP.",
        warehouse_task_5: "Création de rapports pour l'analyse des données.",

        fabric_intro: "Mise en œuvre d'un processus d'intégration et de préparation des données dans l'environnement Microsoft Fabric, avec pour objectif de faciliter leur centralisation et leur analyse.",

        fabric_task_1: "Exploration et préparation des données sources.",
        fabric_task_2: "Création de pipelines de données.",
        fabric_task_3: "Intégration des données dans un environnement Lakehouse.",
        fabric_task_4: "Préparation des données pour leur exploitation analytique.",
        fabric_task_5: "Création de rapports interactifs avec Power BI.",

        customer_intro: "Analyse des comportements d'achat des clients à partir de données de consommation, en combinant des techniques de Big Data, de data mining et de machine learning.",

        customer_task_1: "Analyse exploratoire des données d'achat.",
        customer_task_2: "Développement d'un système de recommandation basé sur les règles d'association.",
        customer_task_3: "Utilisation de l'algorithme FP-Growth pour identifier les associations entre produits.",
        customer_task_4: "Étude et application de modèles prédictifs avec XGBoost et Random Forest.",
        customer_task_5: "Mise en place d'une architecture Lambda pour le traitement des données.",
        customer_task_6: "Visualisation des résultats à travers Power BI.",

        talend_intro: "Développement d'un processus d'intégration de données provenant du Web, depuis leur extraction jusqu'à leur chargement dans une base de données.",

        talend_task_1: "Collecte de données Web à l'aide de Facepager.",
        talend_task_2: "Préparation et organisation des données extraites.",
        talend_task_3: "Conception d'un processus ETL avec Talend Open Studio.",
        talend_task_4: "Chargement des données dans une base de données cible.",

        contact_title: "Me contacter",
        contact_description: "Vous souhaitez échanger avec moi à propos d'une opportunité, d'un projet ou d'une collaboration ? N'hésitez pas à me contacter.",

        contact_name: "Entrez votre nom",
        contact_email: "Entrez votre e-mail",
        contact_subject: "Sujet",
        contact_message: "Écrivez votre message...",
        send: "Envoyer"
    },

    en: {
        greeting: "Hi, I'm",
        iam: "I am",

        home_description: "I am a Data Engineer passionate about designing modern solutions, developing scalable architectures, and transforming raw data into meaningful, high-value insights.",

        download_cv: "Download CV",

        nav_home: "Home",
        nav_about: "About",
        nav_education: "Education",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact Me",

        about_title: "About Me",
        about_job: "Data Engineer specialized in Data Engineering and Decisional Systems",

        about_description: "Data Engineer with experience in data architecture, ETL pipeline design, Data Lakehouse implementation, and data analytics, gained through academic studies, projects, and professional experience.",

        location: "Sfax, Tunisia",

        education_title: "My Academic Journey",
        education_description: "An academic journey built around science, engineering, and data.",

        engineering_degree: "Engineering Degree",
        engineering_specialty: "Data Engineering and Decisional Systems",
        engineering_school: "National School of Electronics and Telecommunications of Sfax",

        preparatory_cycle: "Preparatory Cycle",
        preparatory_specialty: "Physics and Chemistry",
        preparatory_school: "Preparatory Institute for Engineering Studies of Sfax",

        experience_title: "Professional Experience",
        pfe_title: "Final-Year Engineering Internship",
        perfectionnement_title: "Advanced Internship",
        initiation_title: "Introductory Internship",
        read_more: "Read more",

        pfe_description: "Implementation of a modern ETL/ELT pipeline for integrating and analyzing data from Microsoft Dynamics AX 2012.",
        perfectsoft_description: "Development of a web application for online appointment scheduling.",
        crns_description: "Development of a REST application for managing patient care pathways.",

        pfe_modal_category: "Final-Year Engineering Internship · 2026",
        pfe_modal_title: "Modern Data Lakehouse – Dynamics AX 2012",

        pfe_modal_intro: "Implementation of a modern ETL/ELT pipeline to integrate and analyze data from Microsoft Dynamics AX 2012. The goal was to replace a manual and repetitive reporting process with an automated and scalable data architecture.",

        missions: "Responsibilities and Achievements",
        results: "Results",
        technologies: "Technical Environment",

        pfe_mission_1: "Studied the existing environment and analyzed data from the Microsoft Dynamics AX 2012 ERP system.",
        pfe_mission_2: "Implemented SQL Server transactional replication to extract ERP data.",
        pfe_mission_3: "Developed SSIS integration workflows for Excel files.",
        pfe_mission_4: "Designed a Data Lakehouse architecture based on the Medallion Architecture.",
        pfe_mission_5: "Developed data processing and transformation pipelines using Apache Spark.",
        pfe_mission_6: "Orchestrated workflows with Apache Airflow and containerized services using Docker.",
        pfe_mission_7: "Created analytical dashboards using Streamlit.",
        pfe_mission_8: "Developed predictive models to anticipate stockout causes and recommend suppliers.",

        pfe_result_1: "Automated the data integration and processing workflow.",
        pfe_result_2: "Reduced processing time from up to two days to approximately 17 minutes.",
        pfe_result_3: "Provided analytical and predictive indicators to support decision-making.",

        perfectsoft_modal_category: "Advanced Internship · 2025",
        perfectsoft_modal_title: "Online Appointment Booking Web Application",
        perfectsoft_intro: "Designed and developed a web application for managing online appointments and facilitating coordination between customers, employees, and administrators.",

        perfectsoft_mission_1: "Analyzed functional requirements and identified different user roles.",
        perfectsoft_mission_2: "Designed UML models for the application and its features.",
        perfectsoft_mission_3: "Developed web interfaces tailored to different user roles.",
        perfectsoft_mission_4: "Implemented appointment management and tracking features.",
        perfectsoft_mission_5: "Integrated an interactive calendar to display and organize bookings.",
        perfectsoft_mission_6: "Connected the application to a MongoDB database.",

        crns_modal_category: "Introductory Internship · 2024",
        crns_modal_title: "Patient Care Pathway Management Application",
        crns_intro: "Contributed to the development of an application designed to manage patient care pathways using web services and business process modeling.",

        crns_mission_1: "Studied and understood business processes related to patient care pathways.",
        crns_mission_2: "Modeled business processes using BPMN.",
        crns_mission_3: "Integrated and managed processes using jBPM.",
        crns_mission_4: "Developed REST web services using Java.",
        crns_mission_5: "Contributed to structuring communication between application components.",

        skills_title: "My Skills",
        big_data: "Big Data",
        data_engineering: "Data Engineering",
        mlops_devops: "MLOps & DevOps",
        databases: "Databases",
        languages: "Programming Languages",
        erp: "ERP",
        web_development: "Web Development",

        projects_title: "My Academic Projects",

        financial_project_description: "Real-time financial data processing pipeline using Binance data.",
        warehouse_project_description: "Design of a data warehouse integrating multiple heterogeneous data sources.",
        fabric_project_description: "Data integration and modeling in a Microsoft Fabric environment.",
        customer_project_description: "Customer purchasing behavior analysis and predictive modeling.",
        talend_project_description: "Extraction and integration of web data into a database.",

        financial_intro: "Designed a real-time financial data pipeline to collect, stream, process, and store market data from Binance.",
        objectives: "Objectives and Features",

        financial_task_1: "Collected financial data using Binance WebSocket.",
        financial_task_2: "Streamed data using Apache Kafka.",
        financial_task_3: "Processed streaming data using Spark Streaming.",
        financial_task_4: "Orchestrated workflows using Apache Airflow.",
        financial_task_5: "Stored structured data in PostgreSQL.",
        financial_task_6: "Containerized components using Docker.",

        architecture: "Technical Architecture",

        warehouse_intro: "Designed a data warehouse integrating multiple heterogeneous sources to centralize information and support decision-making.",

        warehouse_task_1: "Extracted data from CSV and XML files.",
        warehouse_task_2: "Designed and developed ETL workflows using SSIS.",
        warehouse_task_3: "Cleaned, transformed, and loaded data.",
        warehouse_task_4: "Designed a dimensional model and created an OLAP cube.",
        warehouse_task_5: "Created reports for data analysis.",

        fabric_intro: "Implemented a data integration and preparation process in Microsoft Fabric to facilitate data centralization and analysis.",

        fabric_task_1: "Explored and prepared source data.",
        fabric_task_2: "Created data pipelines.",
        fabric_task_3: "Integrated data into a Lakehouse environment.",
        fabric_task_4: "Prepared data for analytical use.",
        fabric_task_5: "Created interactive reports using Power BI.",

        customer_intro: "Analyzed customer purchasing behavior using consumption data and combining Big Data, data mining, and machine learning techniques.",

        customer_task_1: "Performed exploratory analysis of purchasing data.",
        customer_task_2: "Developed a recommendation system based on association rules.",
        customer_task_3: "Used the FP-Growth algorithm to identify product associations.",
        customer_task_4: "Studied and applied predictive models using XGBoost and Random Forest.",
        customer_task_5: "Implemented a Lambda Architecture for data processing.",
        customer_task_6: "Visualized results using Power BI.",

        talend_intro: "Developed a data integration process for web data, from extraction to loading into a database.",

        talend_task_1: "Collected web data using Facepager.",
        talend_task_2: "Prepared and organized extracted data.",
        talend_task_3: "Designed an ETL process using Talend Open Studio.",
        talend_task_4: "Loaded data into a target database.",

        contact_title: "Contact Me",
        contact_description: "Would you like to discuss a job opportunity, a project, or a potential collaboration? Feel free to get in touch.",

        contact_name: "Enter your name",
        contact_email: "Enter your email",
        contact_subject: "Subject",
        contact_message: "Write your message...",
        send: "Send"
    }

};


/* ==============================
   TYPED.JS
============================== */

let typedInstance = null;

function updateTyped(lang) {

    if (typedInstance) {
        typedInstance.destroy();
    }

    const texts = lang === "fr"
        ? [
            "Ingénieure Data",
            "Data Engineer",
            "Data Analyst",
            "Ingénieure BI"
        ]
        : [
            "Data Engineer",
            "Data Analyst",
            "BI Engineer"
        ];

    typedInstance = new Typed(".text", {

        strings: texts,

        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,

        loop: true,
        smartBackspace: true

    });

}


/* ==============================
   CHANGE LANGUAGE
============================== */

function changeLanguage(lang) {

    if (!translations[lang]) return;

    // HTML language
    document.documentElement.lang = lang;

    // Translate text
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[lang][key] !== undefined) {
            element.textContent = translations[lang][key];
        }

    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        if (translations[lang][key] !== undefined) {
            element.placeholder = translations[lang][key];
        }

    });

    // Translate input values (Send / Envoyer)
    document.querySelectorAll("[data-i18n-value]").forEach(element => {

        const key = element.dataset.i18nValue;

        if (translations[lang][key] !== undefined) {
            element.value = translations[lang][key];
        }

    });

    // Page title
    document.title = lang === "fr"
        ? "Mariem | Portfolio Ingénieure Data"
        : "Mariem | Data Engineer Portfolio";

    // Update language buttons
    document.querySelectorAll("[data-lang]").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.lang === lang
        );

    });

    // Save selected language
    localStorage.setItem("portfolio-language", lang);

    // Update animated text
    updateTyped(lang);

}


/* ==============================
   LANGUAGE BUTTONS
============================== */

document.querySelectorAll("[data-lang]").forEach(button => {

    button.addEventListener("click", () => {

        changeLanguage(button.dataset.lang);

    });

});


/* ==============================
   INITIALIZE
============================== */

document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage =
        localStorage.getItem("portfolio-language") || "fr";

    changeLanguage(savedLanguage);

});
