"use client";

import { topDaysOut } from "@/lib/daysOut";
import { DayOutCard } from "@/components/DayOutCard";
import { useState } from "react";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = Array.from(new Set(topDaysOut.map((item) => item.category)));

    const filteredDaysOut = selectedCategory
        ? topDaysOut.filter((item) => item.category === selectedCategory)
        : topDaysOut;

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Where Can I?</h1>
                    <p className="text-lg text-blue-100 max-w-2xl">
                        Discover the top 10 amazing days out in Surrey. From beautiful gardens and historic sites to thrilling adventures and scenic walks.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Category Filter */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Filter by Category</h2>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === null
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                }`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Days Out Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredDaysOut.map((dayOut) => (
                        <DayOutCard key={dayOut.id} dayOut={dayOut} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredDaysOut.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-500">
                            No results found for the selected category.
                        </p>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="mb-2">
                        © 2026 Where Can I? Discover amazing days out in Surrey.
                    </p>
                    <p className="text-sm text-gray-400">
                        Information for planning and inspiration purposes.
                    </p>
                </div>
            </footer>
        </main>
    );
}
