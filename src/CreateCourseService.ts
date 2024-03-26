
// name 
// duration
// educator
interface Course {
  name: string,
  duration?: number,
  educator: string
}

class CreateCourseService {
  execute(data: Course) {
    const { name, duration = 8, educator } = data
    console.log(name, duration, educator)
  }
}

export default new CreateCourseService()