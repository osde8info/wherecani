"use client";

import { DayOut } from "@/lib/daysOut";
import { Star, MapPin, ExternalLink } from "lucide-react";

export function DayOutCard({ dayOut }: { dayOut: DayOut }) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
            {/* Header with emoji background */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 text-center text-5xl">
                {dayOut.image}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {dayOut.category}
                    </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-2">{dayOut.title}</h2>

                <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {dayOut.description}
                </p>

                {/* Location and Rating */}
                <div className="flex items-center justify-between mb-4 pt-4 border-t">
                    <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {dayOut.location}
                    </div>
                    <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900 ml-1">
                            {dayOut.rating}
                        </span>
                    </div>
                </div>

                {/* CTA Button */}
                {dayOut.url && (
                    <a
                        href={dayOut.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                )}
            </div>
        </div>
    );
}
