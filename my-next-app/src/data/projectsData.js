import { v4 as uuidv4 } from 'uuid'


export const projectsData = [
  {
    id: 1,
    title: 'Hitta vikarie',
    url: 'https://hittavikarie.dongzhutan.com/',
    category: 'Web Application',
    img: '/images/hitta-vikarie.jpg',
    ProjectHeader: {
      title: 'Hitta vikarie',
      publishDate: 'December 1, 2023',
      tags: 'Web Application'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'Google Health Platform',
        img: '/images/hitta-vikarie-2.jpg'
      },
      {
        id: uuidv4(),
        title: 'Google Health Platform',
        img: '/images/hitta-vikarie-1.jpg'
      },
      {
        id: uuidv4(),
        title: 'Google Health Platform',
        img: '/images/hitta-vikarie-3.jpg'
      }
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Name',
          details: 'Dongzhu Tan'
        },
        {
          id: uuidv4(),
          title: 'Services',
          details: 'Web Development'
        },
        {
          id: uuidv4(),
          title: 'Website',
          details: 'https://hittavikarie.dongzhutan.com/',
          isLink: true
        }
      ],
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'JavaScript',
            'Node.js',
            'Express',
            'MongoDB',
            'React.js',
            'Git',
          ]
        }
      ],
      ProjectDetailsHeading: 'Overview',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
          '"hitta vikarie" aims to build an efficient and convenient communication platform for employers and job seekers to meet.'
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Hippo help',
    url: 'https://hippohelp.com/',
    category: 'Mobile Application',
    img: '/images/hippo-help.jpg',
    ProjectHeader: {
      title: 'Hippo help',
      publishDate: 'Jul 26, 2022',
      tags: 'Mobile Application'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'Phoenix Digital Agency',
        img: '/images/hippo-help.jpg'
      },
      {
        id: uuidv4(),
        title: 'Phoenix Digital Agency',
        img: '/images/hippo-help-1-new.jpg'
      },
      {
        id: uuidv4(),
        title: 'Phoenix Digital Agency',
        img: '/images/hippo-help-2-new.jpg'
      }
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Name',
          details: 'Leopold Huber'
        },
        {
          id: uuidv4(),
          title: 'Services',
          details: 'Backend & Frontend Development'
        },
        {
          id: uuidv4(),
          title: 'Website',
          details: 'https://hippohelp.com/',
          isLink: true
        }
      ],
     
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'Typescript',
            'JavaScript',
            'React.js',
            'TailwindCSS',
            'Node.js',
            'Express',
            'MySQL',
            'Ubuntu',
            'Nginx',
            'HTML',
            'Open AI API',
            'Git',
          ]
        }
      ],
      ProjectDetailsHeading: 'Overview',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
						'Hippohelp is a map-based work exchange platform connecting hosts from all over the world with travellers who are happy to work in exchange for free food and accommodation.'
        },
        {
          id: uuidv4(),
          details:
						'A side project I have been working on since 2017, Hippohelp.com, is a traveling community with over 80,000 members. The site is mainly free, but I have worked on it to get a lot of hands-on experience hosting and developing a live website for the Web, iOS and Android. It was initially built with Laravel (PHP), but I rebuilt all of it using React and React Native, on a Node backend consisting of 4 microservices.'
        },
      ]
    }
  },
  {
    id: 3,
    title: 'Cleaning company',
    url: 'https://cleaningcompany.dongzhutan.com/',
    category: 'UI/UX Design',
    img: '/images/cleaning-company.jpg',
    ProjectHeader: {
      title: 'Cleaning company',
      publishDate: 'March 26, 2021',
      tags: 'UI / Frontend'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'Kabul Project Management UI',
        img: '/images/cleaning-company-1.jpg'
      },
      {
        id: uuidv4(),
        title: 'Kabul Project Management UI',
        img: '/images/cleaning-company-2.jpg'
      },
      {
        id: uuidv4(),
        title: 'Kabul Project Management UI',
        img: '/images/cleaning-company-3.jpg'
      }
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Name',
          details: 'Dongzhu Tan'
        },
        {
          id: uuidv4(),
          title: 'Services',
          details: 'UI Design & Frontend Development'
        },
        {
          id: uuidv4(),
          title: 'Website',
          details: 'https://cleaningcompany.dongzhutan.com/',
          isLink: true
        }
      ],
      
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'HTML',
            'CSS',
          ]
        }
      ],
      ProjectDetailsHeading: 'Overview',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
						'This is a presentation assignment when I was studying. Through this project, you can see my interaction design and ideas on user interface.'
        }
      ],
    }
  }
]
