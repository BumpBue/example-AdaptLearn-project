import Link from "next/link";
import { ArrowRight, Sparkles, Brain, Users, Trophy } from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-800">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Powered Personalized Learning
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              เรียนรู้แบบ{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-700 bg-clip-text text-transparent">
                ปรับตัว
              </span>
              <br />
              ตามความสามารถของคุณ
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
              ระบบการเรียนรู้อัจฉริยะที่ปรับเนื้อหาและความยากให้เหมาะกับแต่ละคน
              พร้อม AI Tutor ช่วยตอบคำถาม 24/7
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/login">
                <Button size="lg">
                  เริ่มเรียนฟรี
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" size="lg">
                  ดูคอร์สเรียน
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-primary-200 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-secondary-200 opacity-20 blur-3xl"></div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              ทำไมต้อง AdaptLearn?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              เทคโนโลยี AI ที่ช่วยให้คุณเรียนรู้ได้เร็วขึ้นและมีประสิทธิภาพมากขึ้น
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                  <Brain className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  ปรับตัวอัตโนมัติ
                </h3>
                <p className="text-gray-600">
                  ระบบวิเคราะห์ความสามารถและปรับเส้นทางการเรียนให้เหมาะกับคุณ
                </p>
              </CardContent>
            </Card>

            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary-100">
                  <Sparkles className="h-7 w-7 text-secondary-700" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  AI Tutor 24/7
                </h3>
                <p className="text-gray-600">
                  ถามคำถามได้ทันทีไม่ต้องรอ AI จะอธิบายให้เข้าใจง่าย
                </p>
              </CardContent>
            </Card>

            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                  <Users className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  เรียนเป็นกลุ่ม
                </h3>
                <p className="text-gray-600">
                  สร้างกลุ่มเรียนกับเพื่อน แชท และช่วยเหลือกัน
                </p>
              </CardContent>
            </Card>

            <Card className="text-center transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary-100">
                  <Trophy className="h-7 w-7 text-secondary-700" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  ทบทวนอัจฉริยะ
                </h3>
                <p className="text-gray-600">
                  ระบบแจ้งเตือนให้ทบทวนก่อนที่จะลืม จำได้นานขึ้น 3 เท่า
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary-600 to-secondary-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">10,000+</div>
              <div className="text-primary-100">นักเรียนที่ไว้วางใจ</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">500+</div>
              <div className="text-primary-100">คอร์สเรียน</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">95%</div>
              <div className="text-primary-100">ความพึงพอใจ</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            พร้อมที่จะเริ่มเรียนรู้แล้วหรือยัง?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            เริ่มต้นฟรีวันนี้ ไม่ต้องใช้บัตรเครดิต
          </p>
          <Link href="/login">
            <Button size="lg">
              สมัครเลยตอนนี้
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}