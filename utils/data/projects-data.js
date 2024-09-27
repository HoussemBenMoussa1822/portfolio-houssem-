import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Financial Assistance Project for the Homeless (SDF) with a Multi-Platform Approach',
        description: "Developed a multi-platform financial assistance application aimed at supporting the homeless (SDF). The project features a user-friendly interface built using Symfony for the backend and Java for the frontend, along with MySQL for database management. The application utilizes HTML, CSS, and Bootstrap to create a responsive and visually appealing design, ensuring seamless user experience across different devices.",
        tools: ['Symfony', 'Java', 'MySQL', 'SQL', 'HTML', 'CSS', 'Bootstrap'],
        role: 'Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Job Recommendation Platform',
        description: 'Developed a Job Recommendation Platform that utilizes web scraping techniques to gather data from LinkedIn. Implemented Machine Learning and Natural Language Processing (NLP) to extract skills and key information from resumes, enhancing the job matching process for users. Utilized various tools including Pandas and NumPy for data manipulation, Scikit-Learn and TensorFlow for machine learning models, and NLTK for NLP tasks. Flask was used to create a web interface for the application, and SQL was used for database management.',
        tools: [
            'Web Scraping',
            'Machine Learning',
            'Natural Language Processing (NLP)',
            'Python',
            'Beautiful Soup',
            'Scrapy',
            'Pandas',
            'NumPy',
            'Scikit-Learn',
            'TensorFlow',
            'NLTK',
            'Flask',
            'SQL'
          ],
        role: 'Data Scientist',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Social Media Data Extraction Platform',
        description: 'Developed a Social Media Data Extraction Platform that implements a backend using Django Rest Framework (DRF) for creating REST APIs. The APIs are designed to extract data from users’ Facebook and Instagram accounts. An interactive user interface was developed with ReactJS, allowing users to visualize and manage their extracted data effectively. The application leverages PostgreSQL for data storage and Docker for containerization, ensuring easy deployment and scalability.',
        tools: [
            'Django Rest Framework (DRF)',
            'REST API',
            'ReactJS',
            'Python',
            'JavaScript',
            'PostgreSQL',
            'Docker',
            'AWS',
            'Jest',
            'Redux'
          ],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Business Intelligence Project with Power BI',
        description: "Acquired expertise in using Power BI for business intelligence and data visualization. Implemented essential KPIs to monitor organizational performance and support strategic decision-making. Conducted analysis of the conceptual data model of the Cegid ERP system, ensuring data accuracy and integrity for effective reporting and insights.",
        tools:  [
            'Power BI',
            'SQL',
            'Data Modeling',
            'Cegid ERP',
            'Excel',
            'DAX',
            'Python',
            'Tableau'
          ],
        code: '',
        demo: '',
        image: ayla,
        role: 'Business Intelligence Analyst',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },