import Link from "next/link";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
const lessons = [
  { id: 1, title: "Introduction to Python", duration: "10:30", completed: true },
  { id: 2, title: "Variables and Data Types", duration: "15:45", completed: true },
  {
    id: 3,
    title: "Control Flow - If Statements",
    duration: "12:20",
    completed: true,
    current: true,
  },
  { id: 4, title: "Loops in Python", duration: "18:30", completed: false },
  { id: 5, title: "Functions", duration: "20:15", completed: false },
  { id: 6, title: "Lists and Dictionaries", duration: "22:40", completed: false },
];
export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-500 to-secondary-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8">
            <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-white/20 text-7xl backdrop-blur-sm">
              🐍
            </div>
            <div className="flex-1">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  Programming
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  Beginner
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-bold">Python Programming Basics</h1>
              <p className="mb-6 text-lg text-primary-100">
                เรียนรู้พื้นฐาน Python ตั้งแต่ต้นจนสามารถเขียนโปรแกรมได้จริง พร้อม Projects จริง
              </p>
              <div className="flex items-center gap-6 text-sm">
                <span>⏱️ 12 hours</span>
                <span>👥 1,234 students</span>
                <span>⭐ 4.8 (523 reviews)</span>
                <span>📚 18 lessons</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="mb-8 p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">สิ่งที่คุณจะได้เรียนรู้</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "เข้าใจพื้นฐาน Python",
                  "ตัวแปรและ Data Types",
                  "Control Flow (if/else)",
                  "Loops และ Functions",
                  "Lists และ Dictionaries",
                  "Error Handling",
                  "File Operations",
                  "สร้าง Projects จริง",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="mb-8 p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">เนื้อหาในคอร์ส</h2>
              <div className="space-y-3">
                {lessons.map((lesson, i) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:border-primary-300 hover:bg-primary-50"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${lesson.completed
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-600"
                          }`}
                      >
                        {lesson.completed ? "✓" : i + 1}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{lesson.title}</div>
                        <div className="text-sm text-gray-500">{lesson.duration}</div>
                      </div>
                    </div>
                    {lesson.current && (
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                        กำลังเรียน
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">รายละเอียดคอร์ส</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  คอร์สนี้เหมาะสำหรับผู้เริ่มต้นที่ต้องการเรียนรู้ Python ตั้งแต่พื้นฐาน
                  เราจะพาคุณเรียนรู้ทีละขั้นตอน ด้วยตัวอย่างที่เข้าใจง่าย
                  พร้อมแบบฝึกหัดให้คุณได้ลองทำจริง
                </p>
                <p>
                  หลังจบคอร์สนี้ คุณจะสามารถเขียนโปรแกรม Python พื้นฐาน แก้ปัญหาต่างๆ
                  และพร้อมที่จะเรียนรู้หัวข้อที่ซับซ้อนมากขึ้นต่อไป
                </p>
              </div>
            </Card>
          </div>

          <div>
            <Card className="sticky top-20 p-6">
              <div className="mb-6 text-center">
                <div className="mb-2 text-4xl font-bold text-gray-900">ฟรี</div>
                <div className="text-gray-600">Lifetime Access</div>
              </div>

              <Link href={`/lesson/${params.id}`}>
                <Button className="mb-4 w-full">เริ่มเรียนเลย</Button>
              </Link>

              <div className="space-y-3 border-t border-gray-200 pt-4 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <span>✓</span>
                  <span>เข้าถึงได้ตลอดชีพ</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span>✓</span>
                  <span>ดูได้บนมือถือและคอมพิวเตอร์</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span>✓</span>
                  <span>AI Tutor ตอบคำถาม 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span>✓</span>
                  <span>Certificate of Completion</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}