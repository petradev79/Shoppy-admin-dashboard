import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from 'react-icons/ai';
import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from 'react-icons/fi';
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
// import product8 from './product8.jpg';

export const gridOrderImage = (props) => (
  <div>
    <img
      className='rounded-xl h-20 md:ml-3'
      src={props.ProductImage}
      alt='order-item'
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type='button'
    style={{ background: props.StatusBg }}
    className='text-white py-1 px-2 capitalize rounded-2xl text-md'
  >
    {props.Status}
  </button>
);

export const kanbanData = [
  {
    name: 'Backlog',
    items: [
      {
        id: '1',
        priority: 0,
        title: 'Company website redesign.',
        chat: 1,
        attachment: 2,
        assignees: [
          {
            avt: 'https://randomuser.me/api/portraits/men/75.jpg',
          },
        ],
      },
      {
        id: '2',
        priority: 2,
        title: 'Mobile app login process prototype.',
        chat: 10,
        attachment: 4,
        assignees: [
          {
            avt: 'https://randomuser.me/api/portraits/men/67.jpg',
          },
        ],
      },
    ],
  },
  {
    name: 'In Progress',
    items: [
      {
        id: '3',
        priority: 1,
        title: 'Research and strategy for upcoming project.',
        chat: 0,
        attachment: 3,
        assignees: [
          {
            avt: 'https://randomuser.me/api/portraits/men/79.jpg',
          },
        ],
      },
    ],
  },
  {
    name: 'In Review',
    items: [
      {
        id: '4',
        priority: 2,
        title: 'Dashboard layout redesign.',
        chat: 13,
        attachment: 2,
        assignees: [
          {
            avt: 'https://randomuser.me/api/portraits/men/75.jpg',
          },
        ],
      },
      {
        id: '5',
        priority: 0,
        title: 'Social media posts',
        chat: 0,
        attachment: 0,
        assignees: [
          {
            avt: 'https://randomuser.me/api/portraits/men/68.jpg',
          },
        ],
      },
    ],
  },
  {
    name: 'Completed',
    items: [
      {
        id: '6',
        priority: 0,
        title: 'Review client spec document and give feedback.',
        chat: 13,
        attachment: 2,
        assignees: [
          {
            avt: 'https://randomuser.me/api/portraits/men/75.jpg',
          },
        ],
      },
      {
        id: '7',
        priority: 1,
        title: 'Navigation designs',
        chat: 0,
        attachment: 0,
        assignees: [
          {
            avt: 'https://randomuser.me/api/portraits/men/68.jpg',
          },
        ],
      },
      {
        id: '8',
        priority: 2,
        title: 'Create style guide based on previous feedback',
        chat: 5,
        attachment: 2,
        assignees: [
          {
            avt: 'https://randomuser.me/api/portraits/men/64.jpg',
          },
        ],
      },
    ],
  },
];

// export const kanbanGrid = [
//   { headerText: 'To Do', keyField: 'Open', allowToggle: true },

//   { headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },

//   {
//     headerText: 'Testing',
//     keyField: 'Testing',
//     allowToggle: true,
//     isExpanded: false,
//   },

//   { headerText: 'Done', keyField: 'Close', allowToggle: true },
// ];
const gridEmployeeProfile = (props) => (
  <div className='flex items-center gap-2'>
    <img
      className='rounded-full w-10 h-10'
      src={props.EmployeeImage}
      alt='employee'
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className='flex items-center justify-center gap-2'>
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
export const EditorData = () => (
  <div>
    <h3>
      Try React React has been designed from the start for gradual adoption, and
      you can use as little or as much React as you need. Whether you want to
      get a taste of React, add some interactivity to a simple HTML page, or
      start a complex React-powered app, the links in this section will help you
      get started. Online Playgrounds If you’re interested in playing around
      with React, you can use an online code playground. Try a Hello World
      template on CodePen, CodeSandbox, or Stackblitz. If you prefer to use your
      own text editor, you can also download this HTML file, edit it, and open
      it from the local filesystem in your browser. It does a slow runtime code
      transformation, so we’d only recommend using this for simple demos. Add
      React to a Website You can add React to an HTML page in one minute. You
      can then either gradually expand its presence, or keep it contained to a
      few dynamic widgets. Create a New React App When starting a React project,
      a simple HTML page with script tags might still be the best option. It
      only takes a minute to set up! As your application grows, you might want
      to consider a more integrated setup. There are several JavaScript
      toolchains we recommend for larger applications. Each of them can work
      with little to no configuration and lets you take full advantage of the
      rich React ecosystem. Learn how. Learn React People come to React from
      different backgrounds and with different learning styles. Whether you
      prefer a more theoretical or a practical approach, we hope you’ll find
      this section helpful. If you prefer to learn by doing, start with our
      practical tutorial. If you prefer to learn concepts step by step, start
      with our guide to main concepts. Like any unfamiliar technology, React
      does have a learning curve. With practice and some patience, you will get
      the hang of it. First Examples The React homepage contains a few small
      React examples with a live editor. Even if you don’t know anything about
      React yet, try changing their code and see how it affects the result.
      React for Beginners If you feel that the React documentation goes at a
      faster pace than you’re comfortable with, check out this overview of React
      by Tania Rascia. It introduces the most important React concepts in a
      detailed, beginner-friendly way. Once you’re done, give the documentation
      another try! React for Designers If you’re coming from a design
      background, these resources are a great place to get started. JavaScript
      Resources The React documentation assumes some familiarity with
      programming in the JavaScript language. You don’t have to be an expert,
      but it’s harder to learn both React and JavaScript at the same time. We
      recommend going through this JavaScript overview to check your knowledge
      level. It will take you between 30 minutes and an hour but you will feel
      more confident learning React.
    </h3>
  </div>
);
const customerGridImage = (props) => (
  <div className='image flex gap-4'>
    <img
      className='rounded-full w-10 h-10'
      src={props.CustomerImage}
      alt='employee'
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className='flex gap-2 justify-center items-center text-gray-700 capitalize'>
    <p
      style={{ background: props.StatusBg }}
      className='rounded-full h-3 w-3'
    />
    <p>{props.Status}</p>
  </div>
);
// export const areaPrimaryXAxis = {
//   valueType: 'DateTime',
//   labelFormat: 'y',
//   majorGridLines: { width: 0 },
//   intervalType: 'Years',
//   edgeLabelPlacement: 'Shift',
//   labelStyle: { color: 'gray' },
// };

// export const areaPrimaryYAxis = {
//   labelFormat: '{value}%',
//   lineStyle: { width: 0 },
//   maximum: 4,
//   interval: 1,
//   majorTickLines: { width: 0 },
//   minorTickLines: { width: 0 },
//   labelStyle: { color: 'gray' },
// };
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};

export const areaChartData = [
  {
    label: '2002',
    USA: 2.2,
    France: 2,
    Germany: 0.8,
  },
  { label: '2003', USA: 3.4, France: 1.7, Germany: 1.3 },
  { label: '2004', USA: 2.8, France: 1.8, Germany: 1.1 },
  { label: '2005', USA: 1.6, France: 2.1, Germany: 1.6 },
  { label: '2006', USA: 2.3, France: 2.3, Germany: 2 },
  { label: '2007', USA: 2.5, France: 1.7, Germany: 1.7 },
  { label: '2008', USA: 2.9, France: 1.5, Germany: 2.3 },
  { label: '2009', USA: 3.8, France: 2.8, Germany: 2.7 },
  { label: '2010', USA: 1.4, France: 1.5, Germany: 1.1 },
  { label: '2011', USA: 3.1, France: 2.3, Germany: 2.3 },
];

// export const areaCustomSeries = [
//   {
//     dataSource: areaChartData[0],
//     xName: 'x',
//     yName: 'y',
//     name: 'USA',
//     opacity: '0.8',
//     type: 'SplineArea',
//     width: '2',
//   },
//   {
//     dataSource: areaChartData[1],
//     xName: 'x',
//     yName: 'y',
//     name: 'France',
//     opacity: '0.8',
//     type: 'SplineArea',
//     width: '2',
//   },
//   {
//     dataSource: areaChartData[2],
//     xName: 'x',
//     yName: 'y',
//     name: 'Germany',
//     opacity: '0.8',
//     type: 'SplineArea',
//     width: '2',
//   },
// ];

export const barChartData = [
  { name: 'USA', Gold: 46, Silver: 37, Bronze: 38 },
  { name: 'GBR', Gold: 27, Silver: 23, Bronze: 17 },
  { name: 'CHN', Gold: 26, Silver: 18, Bronze: 26 },
];

// export const barChartData = [
//   [
//     { name: 'USA', y: 46 },
//     { x: 'GBR', y: 27 },
//     { x: 'CHN', y: 26 },
//   ],
//   [
//     { x: 'USA', y: 37 },
//     { x: 'GBR', y: 23 },
//     { x: 'CHN', y: 18 },
//   ],
//   [
//     { x: 'USA', y: 38 },
//     { x: 'GBR', y: 17 },
//     { x: 'CHN', y: 26 },
//   ],
// ];

// export const barCustomSeries = [
//   {
//     dataSource: barChartData[0],
//     xName: 'x',
//     yName: 'y',
//     name: 'Gold',
//     type: 'Column',
//     marker: {
//       dataLabel: {
//         visible: true,
//         position: 'Top',
//         font: { fontWeight: '600', color: '#ffffff' },
//       },
//     },
//   },
//   {
//     dataSource: barChartData[1],
//     xName: 'x',
//     yName: 'y',
//     name: 'Silver',
//     type: 'Column',
//     marker: {
//       dataLabel: {
//         visible: true,
//         position: 'Top',
//         font: { fontWeight: '600', color: '#ffffff' },
//       },
//     },
//   },
//   {
//     dataSource: barChartData[2],
//     xName: 'x',
//     yName: 'y',
//     name: 'Bronze',
//     type: 'Column',
//     marker: {
//       dataLabel: {
//         visible: true,
//         position: 'Top',
//         font: { fontWeight: '600', color: '#ffffff' },
//       },
//     },
//   },
// ];
export const colorMappingData = [
  { name: 'Jan', Temperature: 6.96 },
  { name: 'Feb', Temperature: 8.9 },
  { name: 'Mar', Temperature: 12 },
  { name: 'Apr', Temperature: 17.5 },
  { name: 'May', Temperature: 22.1 },
  { name: 'June', Temperature: 25 },
  { name: 'July', Temperature: 29.4 },
  { name: 'Aug', Temperature: 29.6 },
  { name: 'Sep', Temperature: 25.8 },
  { name: 'Oct', Temperature: 21.1 },
  { name: 'Nov', Temperature: 15.5 },
  { name: 'Dec', Temperature: 9.9 },
];

// export const rangeColorMapping = [
//   { label: '1°C to 10°C', start: '1', end: '10', colors: colorMappingData[1] },

//   {
//     label: '11°C to 20°C',
//     start: '11',
//     end: '20',
//     colors: colorMappingData[2],
//   },

//   {
//     label: '21°C to 30°C',
//     start: '21',
//     end: '30',
//     colors: colorMappingData[3],
//   },
// ];

// export const ColorMappingPrimaryXAxis = {
//   valueType: 'Category',
//   majorGridLines: { width: 0 },
//   title: 'Months',
// };

// export const ColorMappingPrimaryYAxis = {
//   lineStyle: { width: 0 },
//   majorTickLines: { width: 0 },
//   minorTickLines: { width: 0 },
//   labelFormat: '{value}°C',
//   title: 'Temperature',
// };

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016, 12, 31'),
  maximum: new Date('2017, 9, 30'),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center',
  },
  {
    field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus,
  },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center',
  },
  {
    field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },

  {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },
];

export const employeesGrid = [
  {
    headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center',
  },
  { field: 'Name', headerText: '', width: '0', textAlign: 'Center' },
  {
    field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  {
    headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry,
  },

  {
    field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center',
  },

  {
    field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center',
  },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'color-picker',
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      {
        name: 'financial',
        icon: <RiStockLine />,
      },
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
      },
      {
        name: 'funnel',
        icon: <GiLouvrePyramid />,
      },
    ],
  },
];

export const cartData = [
  {
    image: product5,
    name: 'butterscotch ice-cream',
    category: 'Milk product',
    price: '$250',
  },
  {
    image: product6,
    name: 'Supreme fresh tomato',
    category: 'Vegetable Item',
    price: '$450',
  },
  {
    image: product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$190',
  },
];

export const chatData = [
  {
    image: avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image: avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image: avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image: avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: '+$350',
    title: 'Paypal Transfer',
    desc: 'Money Added',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsShield />,
    amount: '-$560',
    desc: 'Bill Payment',
    title: 'Wallet',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <FiCreditCard />,
    amount: '+$350',
    title: 'Credit Card',
    desc: 'Money reversed',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

    pcColor: 'green-600',
  },
  {
    icon: <TiTick />,
    amount: '+$350',
    title: 'Bank Transfer',
    desc: 'Money Added',

    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <BsCurrencyDollar />,
    amount: '-$50',
    percentage: '+38%',
    title: 'Refund',
    desc: 'Payment Sent',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: '-$560',
    title: 'Top Sales',
    desc: 'Johnathan Doe',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <FiStar />,
    amount: '-$560',
    title: 'Best Seller',
    desc: 'MaterialPro Admin',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '+$560',
    title: 'Most Commented',
    desc: 'Ample Admin',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];

export const productsPerformance = [
  {
    image: product5,
    title: 'Is it good butterscotch ice-cream?',
    desc: 'Ice-Cream, Milk, Powder',
    rating: 'Good',
    itemSold: '65%',
    earningAmount: '$546,000',
  },
  {
    image: product6,
    title: 'Supreme fresh tomato available',
    desc: 'Market, Mall',
    rating: 'Excellent',
    itemSold: '98%',
    earningAmount: '$780,000',
  },
  {
    image: product7,
    title: 'Red color candy from Gucci',
    desc: 'Chocolate, Yummy',
    rating: 'Average',
    itemSold: '46%',
    earningAmount: '$457,000',
  },
  {
    image: product4,
    title: 'Stylish night lamp for night',
    desc: 'Electric, Wire, Current',
    rating: 'Poor',
    itemSold: '23%',
    earningAmount: '$123,000',
  },
];

export const medicalproBranding = {
  data: [
    {
      title: 'Due Date',
      desc: 'Oct 23, 2021',
    },
    {
      title: 'Budget',
      desc: '$98,500',
    },
    {
      title: 'Expense',
      desc: '$63,000',
    },
  ],
  teams: [
    {
      name: 'Bootstrap',
      color: 'orange',
    },
    {
      name: 'Angular',
      color: '#FB9678',
    },
  ],
  leaders: [
    {
      image: avatar2,
    },
    {
      image: avatar3,
    },
    {
      image: avatar2,
    },
    {
      image: avatar4,
    },
    {
      image: avatar,
    },
  ],
};

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const ordersGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderItems',
    headerText: 'Item',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage: avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1002,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage: avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1003,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage: avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1004,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage: avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1005,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage: avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1006,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage: avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1007,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage: avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1008,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage: avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1009,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage: avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1010,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage: avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1011,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage: avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1012,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage: avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1013,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage: avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1014,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage: avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1015,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage: avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1016,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage: avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1017,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage: avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1018,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage: avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1019,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage: avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1020,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage: avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1021,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage: avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1022,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage: avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1023,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage: avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1024,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage: avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1025,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage: avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1026,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage: avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1027,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage: avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1028,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage: avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1029,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage: avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1030,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage: avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1031,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage: avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1032,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage: avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1033,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage: avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1034,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage: avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1035,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage: avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1036,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage: avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1037,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage: avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1038,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage: avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1039,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'Completed',
    CustomerImage: avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
  {
    CustomerID: 1040,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'Cancel',
    CustomerImage: avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Budget: '$16.5k',
    Location: 'USA',
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage: avatar2,
  },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage: product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage: product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage: product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage: product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage: product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage: product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage: product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage: product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',

    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage: product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage: product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage: product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage: product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: product4,
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];

export const lineChartData = [
  { label: '2005', Germany: 21, England: 28, India: 10 },
  { label: '2006', Germany: 24, England: 44, India: 20 },
  { label: '2007', Germany: 36, England: 48, India: 30 },
  { label: '2008', Germany: 38, England: 50, India: 39 },
  { label: '2009', Germany: 54, England: 66, India: 50 },
  { label: '2010', Germany: 57, England: 78, India: 70 },
  { label: '2011', Germany: 70, England: 84, India: 100 },
];
export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  },
  {
    Id: '3',
    Time: 'May 2021',
  },
];
export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

// export const lineCustomSeries = [
//   {
//     dataSource: lineChartData[0],
//     xName: 'x',
//     yName: 'y',
//     name: 'Germany',
//     width: '2',
//     marker: { visible: true, width: 10, height: 10 },
//     type: 'Line',
//   },

//   {
//     dataSource: lineChartData[1],
//     xName: 'x',
//     yName: 'y',
//     name: 'England',
//     width: '2',
//     marker: { visible: true, width: 10, height: 10 },
//     type: 'Line',
//   },

//   {
//     dataSource: lineChartData[2],
//     xName: 'x',
//     yName: 'y',
//     name: 'India',
//     width: '2',
//     marker: { visible: true, width: 10, height: 10 },
//     type: 'Line',
//   },
// ];

export const pieChartData = [
  { name: 'Labour', value: 18 },
  { name: 'Legal', value: 8 },
  { name: 'Production', value: 15 },
  { name: 'License', value: 11 },
  { name: 'Facilities', value: 18 },
  { name: 'Taxes', value: 14 },
  { name: 'Insurance', value: 16 },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ecomPieChartData = [
  { name: '2018', value: 400 },
  { name: '2019', value: 300 },
  { name: '2020', value: 300 },
  { name: '2021', value: 200 },
];

export const stackedChartData = [
  { label: 'Jan', Budget: 111.1, Expense: 11.1 },
  { label: 'Feb', Budget: 127.3, Expense: 127.3 },
  { label: 'Mar', Budget: 143.4, Expense: 143.4 },
  { label: 'Apr', Budget: 159.9, Expense: 119.9 },
  { label: 'May', Budget: 159.9, Expense: 159.9 },
  { label: 'Jun', Budget: 159.9, Expense: 119.9 },
  { label: 'July', Budget: 159.9, Expense: 151.9 },
];

// export const stackedCustomSeries = [
//   {
//     dataSource: stackedChartData[0],
//     xName: 'x',
//     yName: 'y',
//     name: 'Budget',
//     type: 'StackingColumn',
//     background: 'blue',
//   },

//   {
//     dataSource: stackedChartData[1],
//     xName: 'x',
//     yName: 'y',
//     name: 'Expense',
//     type: 'StackingColumn',
//     background: 'red',
//   },
// ];

// export const stackedPrimaryXAxis = {
//   majorGridLines: { width: 0 },
//   minorGridLines: { width: 0 },
//   majorTickLines: { width: 0 },
//   minorTickLines: { width: 0 },
//   interval: 1,
//   lineStyle: { width: 0 },
//   labelIntersectAction: 'Rotate45',
//   valueType: 'Category',
// };

// export const stackedPrimaryYAxis = {
//   lineStyle: { width: 0 },
//   minimum: 100,
//   maximum: 400,
//   interval: 100,
//   majorTickLines: { width: 0 },
//   majorGridLines: { width: 1 },
//   minorGridLines: { width: 1 },
//   minorTickLines: { width: 0 },
//   labelFormat: '{value}',
// };

// export const kanbanData = [
//   {
//     Id: 'Task 1',
//     Title: 'Task - 29001',
//     Status: 'Open',
//     Summary: 'Analyze the new requirements gathered from the customer.',
//     Type: 'Story',
//     Priority: 'Low',
//     Tags: 'Analyze,Customer',
//     Estimate: 3.5,
//     Assignee: 'Nancy Davloio',
//     RankId: 1,
//     Color: '#02897B',
//     ClassName: 'e-story, e-low, e-nancy-davloio',
//   },
//   {
//     Id: 'Task 2',
//     Title: 'Task - 29002',
//     Status: 'InProgress',
//     Summary: 'Improve application performance',
//     Type: 'Improvement',
//     Priority: 'Normal',
//     Tags: 'Improvement',
//     Estimate: 6,
//     Assignee: 'Andrew Fuller',
//     RankId: 1,
//     Color: '#673AB8',
//     ClassName: 'e-improvement, e-normal, e-andrew-fuller',
//   },
//   {
//     Id: 'Task 3',
//     Title: 'Task - 29003',
//     Status: 'Open',
//     Summary: 'Arrange a web meeting with the customer to get new requirements.',
//     Type: 'Others',
//     Priority: 'Critical',
//     Tags: 'Meeting',
//     Estimate: 5.5,
//     Assignee: 'Janet Leverling',
//     RankId: 2,
//     Color: '#1F88E5',
//     ClassName: 'e-others, e-critical, e-janet-leverling',
//   },
//   {
//     Id: 'Task 4',
//     Title: 'Task - 29004',
//     Status: 'InProgress',
//     Summary: 'Fix the issues reported in the IE browser.',
//     Type: 'Bug',
//     Priority: 'Critical',
//     Tags: 'IE',
//     Estimate: 2.5,
//     Assignee: 'Janet Leverling',
//     RankId: 2,
//     Color: '#E64A19',
//     ClassName: 'e-bug, e-release, e-janet-leverling',
//   },
//   {
//     Id: 'Task 5',
//     Title: 'Task - 29005',
//     Status: 'Review',
//     Summary: 'Fix the issues reported by the customer.',
//     Type: 'Bug',
//     Priority: 'Low',
//     Tags: 'Customer',
//     Estimate: '3.5',
//     Assignee: 'Steven walker',
//     RankId: 1,
//     Color: '#E64A19',
//     ClassName: 'e-bug, e-low, e-steven-walker',
//   },
//   {
//     Id: 'Task 6',
//     Title: 'Task - 29007',
//     Status: 'Validate',
//     Summary: 'Validate new requirements',
//     Type: 'Improvement',
//     Priority: 'Low',
//     Tags: 'Validation',
//     Estimate: 1.5,
//     Assignee: 'Robert King',
//     RankId: 1,
//     Color: '#673AB8',
//     ClassName: 'e-improvement, e-low, e-robert-king',
//   },
//   {
//     Id: 'Task 7',
//     Title: 'Task - 29009',
//     Status: 'Review',
//     Summary: 'Fix the issues reported in Safari browser.',
//     Type: 'Bug',
//     Priority: 'Critical',
//     Tags: 'Fix,Safari',
//     Estimate: 1.5,
//     Assignee: 'Nancy Davloio',
//     RankId: 2,
//     Color: '#E64A19',
//     ClassName: 'e-bug, e-release, e-nancy-davloio',
//   },
//   {
//     Id: 'Task 8',
//     Title: 'Task - 29010',
//     Status: 'Close',
//     Summary: 'Test the application in the IE browser.',
//     Type: 'Story',
//     Priority: 'Low',
//     Tags: 'Review,IE',
//     Estimate: 5.5,
//     Assignee: 'Margaret hamilt',
//     RankId: 3,
//     Color: '#02897B',
//     ClassName: 'e-story, e-low, e-margaret-hamilt',
//   },
//   {
//     Id: 'Task 9',
//     Title: 'Task - 29011',
//     Status: 'Validate',
//     Summary: 'Validate the issues reported by the customer.',
//     Type: 'Story',
//     Priority: 'High',
//     Tags: 'Validation,Fix',
//     Estimate: 1,
//     Assignee: 'Steven walker',
//     RankId: 1,
//     Color: '#02897B',
//     ClassName: 'e-story, e-high, e-steven-walker',
//   },
//   {
//     Id: 'Task 10',
//     Title: 'Task - 29015',
//     Status: 'Open',
//     Summary: 'Show the retrieved data from the server in grid control.',
//     Type: 'Story',
//     Priority: 'High',
//     Tags: 'Database,SQL',
//     Estimate: 5.5,
//     Assignee: 'Margaret hamilt',
//     RankId: 4,
//     Color: '#02897B',
//     ClassName: 'e-story, e-high, e-margaret-hamilt',
//   },
//   {
//     Id: 'Task 11',
//     Title: 'Task - 29016',
//     Status: 'InProgress',
//     Summary: 'Fix cannot open user’s default database SQL error.',
//     Priority: 'Critical',
//     Type: 'Bug',
//     Tags: 'Database,Sql2008',
//     Estimate: 2.5,
//     Assignee: 'Janet Leverling',
//     RankId: 4,
//     Color: '#E64A19',
//     ClassName: 'e-bug, e-critical, e-janet-leverling',
//   },
//   {
//     Id: 'Task 12',
//     Title: 'Task - 29017',
//     Status: 'Review',
//     Summary: 'Fix the issues reported in data binding.',
//     Type: 'Story',
//     Priority: 'Normal',
//     Tags: 'Databinding',
//     Estimate: '3.5',
//     Assignee: 'Janet Leverling',
//     RankId: 4,
//     Color: '#02897B',
//     ClassName: 'e-story, e-normal, e-janet-leverling',
//   },
//   {
//     Id: 'Task 13',
//     Title: 'Task - 29018',
//     Status: 'Close',
//     Summary: 'Analyze SQL server 2008 connection.',
//     Type: 'Story',
//     Priority: 'Critical',
//     Tags: 'Grid,Sql',
//     Estimate: 2,
//     Assignee: 'Andrew Fuller',
//     RankId: 4,
//     Color: '#02897B',
//     ClassName: 'e-story, e-release, e-andrew-fuller',
//   },
//   {
//     Id: 'Task 14',
//     Title: 'Task - 29019',
//     Status: 'Validate',
//     Summary: 'Validate databinding issues.',
//     Type: 'Story',
//     Priority: 'Low',
//     Tags: 'Validation',
//     Estimate: 1.5,
//     Assignee: 'Margaret hamilt',
//     RankId: 1,
//     Color: '#02897B',
//     ClassName: 'e-story, e-low, e-margaret-hamilt',
//   },
//   {
//     Id: 'Task 15',
//     Title: 'Task - 29020',
//     Status: 'Close',
//     Summary: 'Analyze grid control.',
//     Type: 'Story',
//     Priority: 'High',
//     Tags: 'Analyze',
//     Estimate: 2.5,
//     Assignee: 'Margaret hamilt',
//     RankId: 5,
//     Color: '#02897B',
//     ClassName: 'e-story, e-high, e-margaret-hamilt',
//   },
//   {
//     Id: 'Task 16',
//     Title: 'Task - 29021',
//     Status: 'Close',
//     Summary: 'Stored procedure for initial data binding of the grid.',
//     Type: 'Others',
//     Priority: 'Critical',
//     Tags: 'Databinding',
//     Estimate: 1.5,
//     Assignee: 'Steven walker',
//     RankId: 6,
//     Color: '#1F88E5',
//     ClassName: 'e-others, e-release, e-steven-walker',
//   },
//   {
//     Id: 'Task 17',
//     Title: 'Task - 29022',
//     Status: 'Close',
//     Summary: 'Analyze stored procedures.',
//     Type: 'Story',
//     Priority: 'Critical',
//     Tags: 'Procedures',
//     Estimate: 5.5,
//     Assignee: 'Janet Leverling',
//     RankId: 7,
//     Color: '#02897B',
//     ClassName: 'e-story, e-release, e-janet-leverling',
//   },
//   {
//     Id: 'Task 18',
//     Title: 'Task - 29023',
//     Status: 'Validate',
//     Summary: 'Validate editing issues.',
//     Type: 'Story',
//     Priority: 'Critical',
//     Tags: 'Editing',
//     Estimate: 1,
//     Assignee: 'Nancy Davloio',
//     RankId: 1,
//     Color: '#02897B',
//     ClassName: 'e-story, e-critical, e-nancy-davloio',
//   },
//   {
//     Id: 'Task 19',
//     Title: 'Task - 29024',
//     Status: 'Review',
//     Summary: 'Test editing functionality.',
//     Type: 'Story',
//     Priority: 'Normal',
//     Tags: 'Editing,Test',
//     Estimate: 0.5,
//     Assignee: 'Nancy Davloio',
//     RankId: 5,
//     Color: '#02897B',
//     ClassName: 'e-story, e-normal, e-nancy-davloio',
//   },
//   {
//     Id: 'Task 20',
//     Title: 'Task - 29025',
//     Status: 'Open',
//     Summary: 'Enhance editing functionality.',
//     Type: 'Improvement',
//     Priority: 'Low',
//     Tags: 'Editing',
//     Estimate: 3.5,
//     Assignee: 'Andrew Fuller',
//     RankId: 5,
//     Color: '#673AB8',
//     ClassName: 'e-improvement, e-low, e-andrew-fuller',
//   },
//   {
//     Id: 'Task 21',
//     Title: 'Task - 29026',
//     Status: 'InProgress',
//     Summary: 'Improve the performance of the editing functionality.',
//     Type: 'Epic',
//     Priority: 'High',
//     Tags: 'Performance',
//     Estimate: 6,
//     Assignee: 'Nancy Davloio',
//     RankId: 5,
//     Color: '#e91e64',
//     ClassName: 'e-epic, e-high, e-nancy-davloio',
//   },
//   {
//     Id: 'Task 22',
//     Title: 'Task - 29027',
//     Status: 'Open',
//     Summary: 'Arrange web meeting with the customer to show editing demo.',
//     Type: 'Others',
//     Priority: 'High',
//     Tags: 'Meeting,Editing',
//     Estimate: 5.5,
//     Assignee: 'Steven walker',
//     RankId: 6,
//     Color: '#1F88E5',
//     ClassName: 'e-others, e-high, e-steven-walker',
//   },
//   {
//     Id: 'Task 23',
//     Title: 'Task - 29029',
//     Status: 'Review',
//     Summary: 'Fix the editing issues reported by the customer.',
//     Type: 'Bug',
//     Priority: 'Low',
//     Tags: 'Editing,Fix',
//     Estimate: '3.5',
//     Assignee: 'Janet Leverling',
//     RankId: 6,
//     Color: '#E64A19',
//     ClassName: 'e-bug, e-low, e-janet-leverling',
//   },
//   {
//     Id: 'Task 24',
//     Title: 'Task - 29030',
//     Status: 'Testing',
//     Summary: 'Fix the issues reported by the customer.',
//     Type: 'Bug',
//     Priority: 'Critical',
//     Tags: 'Customer',
//     Estimate: '3.5',
//     Assignee: 'Steven walker',
//     RankId: 1,
//     Color: '#E64A19',
//     ClassName: 'e-bug, e-critical, e-steven-walker',
//   },
//   {
//     Id: 'Task 25',
//     Title: 'Task - 29031',
//     Status: 'Testing',
//     Summary: 'Fix the issues reported in Safari browser.',
//     Type: 'Bug',
//     Priority: 'Critical',
//     Tags: 'Fix,Safari',
//     Estimate: 1.5,
//     Assignee: 'Nancy Davloio',
//     RankId: 2,
//     Color: '#E64A19',
//     ClassName: 'e-bug, e-release, e-nancy-davloio',
//   },
// ];

export const financialChartData = [
  {
    name: '2017-01-09',
    open: 117.95,
    high: 119.93,
    low: 117.94,
    close: 119.04,
  },
  {
    name: '2017-01-16',
    open: 118.34,
    high: 120.5,
    low: 118.22,
    close: 120,
  },
  {
    name: '2017-01-23',
    open: 120,
    high: 122.44,
    low: 119.5,
    close: 121.95,
  },
  {
    name: '2017-01-30',
    open: 120.93,
    high: 130.49,
    low: 120.62,
    close: 129.08,
  },
  {
    name: '2017-02-06',
    open: 129.13,
    high: 132.94,
    low: 128.9,
    close: 132.12,
  },
  {
    name: '2017-02-13',
    open: 133.08,
    high: 136.27,
    low: 132.75,
    close: 135.72,
  },
  {
    name: '2017-02-20',
    open: 136.23,
    high: 137.48,
    low: 135.28,
    close: 136.66,
  },
  {
    name: '2017-02-27',
    open: 137.14,
    high: 140.2786,
    low: 136.28,
    close: 139.78,
  },
  {
    name: '2017-03-06',
    open: 139.365,
    high: 139.98,
    low: 137.05,
    close: 139.14,
  },
  {
    name: '2017-03-13',
    open: 138.85,
    high: 141.02,
    low: 138.82,
    close: 139.99,
  },
  {
    name: '2017-03-20',
    open: 140.4,
    high: 142.8,
    low: 139.73,
    close: 140.64,
  },
  {
    name: '2017-03-27',
    open: 139.39,
    high: 144.5,
    low: 138.62,
    close: 143.66,
  },
  {
    name: '2017-04-03',
    open: 143.71,
    high: 145.46,
    low: 143.05,
    close: 143.34,
  },
  {
    name: '2017-04-10',
    open: 143.6,
    high: 143.8792,
    low: 140.06,
    close: 141.05,
  },
  {
    name: '2017-04-17',
    open: 141.48,
    high: 142.92,
    low: 140.45,
    close: 142.27,
  },
  {
    name: '2017-04-24',
    open: 143.5,
    high: 144.9,
    low: 143.18,
    close: 143.65,
  },
  {
    name: '2017-05-01',
    open: 145.1,
    high: 148.98,
    low: 144.27,
    close: 148.96,
  },
  {
    name: '2017-05-08',
    open: 149.03,
    high: 156.42,
    low: 149.03,
    close: 156.1,
  },
  {
    name: '2017-05-15',
    open: 156.01,
    high: 156.65,
    low: 149.71,
    close: 153.06,
  },
  {
    name: '2017-05-22',
    open: 154,
    high: 154.9,
    low: 152.67,
    close: 153.61,
  },
  {
    name: '2017-05-29',
    open: 153.42,
    high: 155.45,
    low: 152.22,
    close: 155.45,
  },
  {
    name: '2017-06-05',
    open: 154.34,
    high: 155.98,
    low: 146.02,
    close: 148.98,
  },
  {
    name: '2017-06-12',
    open: 145.74,
    high: 147.5,
    low: 142.2,
    close: 142.27,
  },
  {
    name: '2017-06-19',
    open: 143.66,
    high: 147.16,
    low: 143.66,
    close: 146.28,
  },
  {
    name: '2017-06-26',
    open: 147.17,
    high: 148.28,
    low: 142.28,
    close: 144.02,
  },
  {
    name: '2017-07-03',
    open: 144.88,
    high: 145.3001,
    low: 142.41,
    close: 144.18,
  },
  {
    name: '2017-07-10',
    open: 144.11,
    high: 149.33,
    low: 143.37,
    close: 149.04,
  },
  {
    name: '2017-07-17',
    open: 148.82,
    high: 151.74,
    low: 148.57,
    close: 150.27,
  },
  {
    name: '2017-07-24',
    open: 150.58,
    high: 153.99,
    low: 147.3,
    close: 149.5,
  },
  {
    name: '2017-07-31',
    open: 149.9,
    high: 159.75,
    low: 148.13,
    close: 156.39,
  },
  {
    name: '2017-08-07',
    open: 157.06,
    high: 161.83,
    low: 154.63,
    close: 157.48,
  },
  {
    name: '2017-08-14',
    open: 159.32,
    high: 162.51,
    low: 156.72,
    close: 157.5,
  },
  {
    name: '2017-08-21',
    open: 157.5,
    high: 160.74,
    low: 155.1101,
    close: 159.86,
  },
  {
    name: '2017-08-28',
    open: 160.14,
    high: 164.94,
    low: 159.93,
    close: 164.05,
  },
  {
    name: '2017-09-04',
    open: 163.75,
    high: 164.25,
    low: 158.53,
    close: 158.63,
  },
  {
    name: '2017-09-11',
    open: 160.5,
    high: 163.96,
    low: 157.91,
    close: 159.88,
  },
  {
    name: '2017-09-18',
    open: 160.11,
    high: 160.5,
    low: 157.995,
    close: 158.67,
  },
];
export const FoodComparisonData = [
  { name: 'Sweet Treats', value: 120, fill: '#0088FE' },
  { name: 'Milk, Youghnut, Cheese', value: 435, fill: '#00C49F' },
  { name: 'Vegetables', value: 470, fill: '#FFBB28' },
  { name: 'Meat, Poultry, Fish', value: 475, fill: '#FF8042' },
  { name: 'Fruits', value: 520, fill: '#a300c4' },
  { name: 'Bread, Rice, Pasta', value: 930, fill: '#1b694f' },
];
