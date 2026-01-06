"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, BookOpen } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 px-4 py-12">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-700">
                        <BookOpen className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">ยินดีต้อนรับกลับ</h2>
                    <p className="mt-2 text-gray-600">เข้าสู่ระบบเพื่อเริ่มเรียนต่อ</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
                    <div className="mb-6 flex rounded-lg bg-gray-100 p-1">
                        <button
                            onClick={() => setActiveTab("login")}
                            className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${activeTab === "login"
                                ? "bg-white text-gray-900 shadow"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            เข้าสู่ระบบ
                        </button>
                        <button
                            onClick={() => setActiveTab("signup")}
                            className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${activeTab === "signup"
                                ? "bg-white text-gray-900 shadow"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            สมัครสมาชิก
                        </button>
                    </div>

                    {activeTab === "login" ? (
                        <form className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    อีเมล
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                    <Input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    รหัสผ่าน
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="pl-10 pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-600">จำฉันไว้</span>
                                </label>
                                <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                                    ลืมรหัสผ่าน?
                                </a>
                            </div>

                            <Link href="/courses">
                                <Button type="button" className="w-full">
                                    เข้าสู่ระบบ
                                </Button>
                            </Link>
                        </form>
                    ) : (
                        <form className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    ชื่อ-นามสกุล
                                </label>
                                <Input type="text" placeholder="John Doe" />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    อีเมล
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                    <Input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    รหัสผ่าน
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="pl-10 pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <Link href="/courses">
                                <Button type="button" className="w-full">
                                    สมัครสมาชิก
                                </Button>
                            </Link>
                        </form>
                    )}

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">หรือเข้าสู่ระบบด้วย</span>
                            </div>
                        </div>

                        <Button variant="outline" className="mt-4 w-full">
                            <svg className="mr-2 h-5 w-5" viewBox="00 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Google
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}