import Link from "next/link";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
const courses = [
    {
        id: 1,
        title: "Python Programming Basics",
        category: "Programming",
        level: "Beginner",
        duration: "12 hours",
        students: 1234,
        rating: 4.8,
        emoji: "🐍",
        progress: 0,
    },
    {
        id: 2,
        title: "Web Development with React",
        category: "Web Dev",
        level: "Intermediate",
        duration: "20 hours",
        students: 856,
        rating: 4.9,
        emoji: "⚛️",
        progress: 0,
    },
    {
        id: 3,
        title: "English for Beginners",
        category: "Languages",
        level: "Beginner",
        duration: "15 hours",
        students: 2341,
        rating: 4.7,
        emoji: "🇬🇧",
        progress: 35,
    },
    {
        id: 4,
        title: "Data Science Introduction",
        category: "Data Science",
        level: "Intermediate",
        duration: "25 hours",
        students: 567,
        rating: 4.9,
        emoji: "📊",
        progress: 0,
    },
    {
        id: 5,
        title: "Algebra Fundamentals",
        category: "Mathematics",
        level: "Beginner",
        duration: "18 hours",
        students: 1456,
        rating: 4.6,
        emoji: "🔢",
        progress: 60,
    },
    {
        id: 6,
        title: "Machine Learning Basics",
        category: "AI/ML",
        level: "Advanced",
        duration: "30 hours",
        students: 423,
        rating: 4.8,
        emoji: "🤖",
        progress: 0,
    },
];
export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="mb-2 text-3xl font-bold text-gray-900">คอร์สเรียนทั้งหมด</h1>
                    <p className="text-gray-600">เลือกคอร์สที่คุณสนใจและเริ่มเรียนได้เลย</p>
                </div>
                <div className="mb-8 flex flex-wrap gap-2">
                    {["ทั้งหมด", "Programming", "Web Dev", "Languages", "Data Science", "Mathematics"].map(
                        (filter) => (
                            <button
                                key={filter}
                                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary-500 hover:text-primary-600"
                            >
                                {filter}
                            </button>
                        )
                    )}
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <Card key={course.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100 text-8xl">
                                {course.emoji}
                            </div>
                            <div className="p-6">
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                                        {course.category}
                                    </span>
                                    <span className="text-sm text-gray-500">{course.level}</span>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">{course.title}</h3>
                                <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                                    <span>⏱️ {course.duration}</span>
                                    <span>👥 {course.students.toLocaleString()}</span>
                                    <span>⭐ {course.rating}</span>
                                </div>
                                {course.progress > 0 ? (
                                    <div>
                                        <div className="mb-2 flex items-center justify-between text-sm">
                                            <span className="text-gray-600">ความคืบหน้า</span>
                                            <span className="font-medium text-primary-600">{course.progress}%</span>
                                        </div>
                                        <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-600"
                                                style={{ width: `${course.progress}%` }}
                                            ></div>
                                        </div>
                                        <Link href={`/lesson/${course.id}`}>
                                            <Button className="mt-4 w-full">เรียนต่อ</Button>
                                        </Link>
                                    </div>
                                ) : (
                                    <Link href={`/course/${course.id}`}>
                                        <Button variant="outline" className="w-full">
                                            ดูรายละเอียด
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}