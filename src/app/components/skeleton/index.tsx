import React from 'react';

interface SkeletonProps {
  width: number | string;
  height: number | string;
}

export default function Skeleton({ width, height }: SkeletonProps) {
  return (
    <div
      className='animate-pulse bg-gray-500 border-2 border-gray-700  rounded-lg shadow-lg'
      style={{ width, height }}
    />
  );
}
