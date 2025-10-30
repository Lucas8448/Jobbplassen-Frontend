"use client";

import {
  Card,
  CardBlock,
  Heading,
  Paragraph,
} from "@digdir/designsystemet-react";
import { useState } from 'react';

interface JobbBoksProps {
  id: string;
  title: string;
  content: string;
  employer: string;
  dato: string;
}

export default function JobbBoks({ id, title, content, employer, dato }: JobbBoksProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const imageUrl = `/api/jobs/cover/${id}`;

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <Card
        data-color="neutral"
        className="max-w-[650px] border-2 border-black mb-20"
      >
        <div className="flex flex-row">
          <CardBlock className="relative w-[350px] h-[250px] p-0 overflow-hidden bg-gray-100 flex items-center justify-center">
            {imageError ? (
              <div className="text-gray-400 text-center">
                <p>Ingen bilde</p>
              </div>
            ) : (
              <img 
                src={imageUrl}
                alt="logo til bedrift" 
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ display: imageLoaded ? 'block' : 'none' }}
                crossOrigin="anonymous"
              />
            )}
            {!imageLoaded && !imageError && (
              <div className="text-gray-400">Laster bilde...</div>
            )}
          </CardBlock>
          <div className="flex flex-col pl-5">
            <Heading className="text-2xl mb-3">{title}</Heading>
            <Paragraph className="text-xl mb-4">{content}</Paragraph>
            <Paragraph className="text-xl">{dato}</Paragraph>
            <Paragraph className="text-xl">{employer}</Paragraph>
          </div>
        </div>
      </Card>
    </div>
  );
}
