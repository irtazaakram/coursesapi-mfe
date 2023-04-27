import { Container } from '@edx/paragon';
import fetchCoursesApi from './data/fetchCoursesApi';

// react component that renders a list of courses using course data from fetch courses api used in src/courses_api/data/fetchCoursesApi.js. uses edx ui toolkit for styling
const CoursesApi = () => {
  const courses = fetchCoursesApi();
  return (
    <Container>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </Container>
  );
};

// // react component that renders a list of courses using fetch courses api and course card component. uses edx ui toolkit for styling
// const CoursesApi = () => {
//   const [courses, setCourses] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const response = await fetch('https://courses.edx.org/api/courses/v1/courses/');
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       const data = await response.json();
//       setCourses(data.results);
//       setIsLoading(false);
//     } catch (err) {
//       setError(err);
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error.message}</div>;
//   }

//   return (
//     <div className="container">
//       <div className="row">
//         {courses.map((course) => (
//           <div className="col-md-4" key={course.id}>
//             <CourseCard course={course} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
export default CoursesApi;