"use client";

import {
  Card,
  CardBlock,
  Heading,
  Paragraph,
  Button
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      const response = await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <Card
        data-color="neutral"
        className="max-w-[650px] min-w-[650px] border-2 border-black mb-20 relative"
      >
        <div className="absolute top-2 right-2">
          <Button 
            type="submit"
            className="bg-red-500 max-w-[80px] min-w-[80px] border-2 border-black bg-blue-600 text-black m-2 py-2 px-3 rounded-md cursor-pointer hover:text-gray-200"
          >
            Delete
          </Button>
        </div>
        <div className="flex flex-row">
          <CardBlock className="relative min-w-[120px] max-w-[170px] h-[250px] p-0 overflow-hidden bg-gray-100 flex items-center justify-center">
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
