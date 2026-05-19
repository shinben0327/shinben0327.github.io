// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-personal",
          title: "personal",
          description: "A few things outside of work that I enjoy.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "news-my-time-in-the-united-kingdom-ends-with-the-completion-of-my-bachelor-s-degree-in-engineering-science-at-the-university-of-oxford-i-have-received-a-first-class-degree-along-with-the-university-gibbs-prize-for-the-best-third-year-group-design-project-multiagent-autonomous-drone-system-for-landmine-detection",
          title: 'My time in the United Kingdom ends with the completion of my Bachelor’s...',
          description: "",
          section: "News",},{id: "news-i-have-started-my-msc-in-robotics-systems-and-control-at-eth-zurich",
          title: 'I have started my MSc in Robotics, Systems and Control at ETH Zurich....',
          description: "",
          section: "News",},{id: "projects-human-object-interaction-retargeting",
          title: 'Human-Object Interaction Retargeting',
          description: "Retargeting human-object interactions to robots using constrained optimisation and reinforcement learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hoi_retarget/";
            },},{id: "projects-nomadz-humanoid-soccer-team",
          title: 'NomadZ Humanoid Soccer Team',
          description: "Teaching robots to play soccer using motion imitation reinforcement learning to participate in the RoboCup competition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nomadz/";
            },},{id: "projects-control-interface-for-tendon-driven-hand",
          title: 'Control Interface for Tendon-driven Hand',
          description: "A control interface for managing the movements of a tendon-driven robotic hand.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ori_hand/";
            },},{id: "projects-qronk-3d-printed-quadruped-robot",
          title: 'Qronk 3D-printed Quadruped Robot',
          description: "Creating a 3D-printed quadruped robot as a student society.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qronk/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shinben0327", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shinben0327", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%73%68%69%6E@%73%74%75%64%65%6E%74.%65%74%68%7A.%63%68", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
