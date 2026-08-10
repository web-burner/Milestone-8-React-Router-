
import { use } from 'react';
import {Line, LineChart, XAxis, YAxis} from 'recharts';
const ResultCart = ({usersPromise}) => {
const users = use(usersPromise).data
    const students = [
  {
    id: 1,
    name: "Aisha Rahman",
    english: 88,
    math: 95,
    science: 91,
  },
  {
    id: 2,
    name: "John Smith",
    english: 76,
    math: 82,
    science: 79,
  },
  {
    id: 3,
    name: "Sara Ahmed",
    english: 93,
    math: 89,
    science: 96,
  },
  {
    id: 4,
    name: "Michael Lee",
    english: 68,
    math: 74,
    science: 71,
  },
  {
    id: 5,
    name: "Emily Johnson",
    english: 85,
    math: 90,
    science: 87,
  },
  {
    id: 6,
    name: "David Wilson",
    english: 79,
    math: 84,
    science: 80,
  },
  {
    id: 7,
    name: "Fatima Noor",
    english: 91,
    math: 97,
    science: 94,
  },
  {
    id: 8,
    name: "Daniel Brown",
    english: 72,
    math: 69,
    science: 75,
  },
  {
    id: 9,
    name: "Olivia Martin",
    english: 87,
    math: 86,
    science: 89,
  },
  {
    id: 10,
    name: "James Anderson",
    english: 81,
    math: 78,
    science: 83,
  },
];
console.log(users)

    return (
        <div>
            <h2>Result Charts</h2>
            <div>
                <LineChart style={{width: '100%', height: '500px'}} data={students}>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Line dataKey={'math'}></Line>
                </LineChart>
            </div>
        </div>
    );
};

export default ResultCart;