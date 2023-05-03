import { Container } from "@edx/paragon";
import fetchCoursesApi from "./data/fetchCoursesApi";

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

export default CoursesApi;
