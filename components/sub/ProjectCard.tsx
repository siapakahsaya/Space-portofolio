"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

interface Props {
    src: string;
    title: string;
    description: string;
    href: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const PlaceholderImage = () => (
        <div className="w-full h-[300px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center">
                <svg
                    className="mx-auto h-16 w-16 text-gray-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
                <p className="text-gray-400 text-sm">No Image Available</p>
            </div>
        </div>
    );

    return (
        <Link
            href={href}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer transition-transform hover:scale-105 block"
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
        >
            {/* Image dengan error handling */}
            {!imageError ? (
                <div className="relative">
                    {imageLoading && (
                        <div className="w-full h-[300px] bg-gray-800 flex items-center justify-center">
                            <div className="animate-pulse text-gray-400">Loading...</div>
                        </div>
                    )}
                    <Image
                        src={src}
                        alt={title}
                        width={1000}
                        height={1000}
                        className={`w-full object-contain transition-opacity duration-300 ${
                            imageLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                        onLoad={() => setImageLoading(false)}
                        onError={() => {
                            setImageError(true);
                            setImageLoading(false);
                        }}
                    />
                </div>
            ) : (
                <PlaceholderImage />
            )}

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </Link>
    );
};

export default ProjectCard;
