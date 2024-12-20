'use client';
import Loader from '@/Loader/loading';
import { useStoreState } from 'easy-peasy';
import React, { useEffect, useRef, useState } from 'react';
import { LuCode2 } from 'react-icons/lu';
import { LiveProvider, LivePreview } from 'react-live';
import 'prismjs/themes/prism-dark.css';

const OverviewRight = ({ typingCompleted, code }: any) => {
  const prompt = useStoreState((state: any) => state?.promptModel?.prompt);

  return (
    <div className="relative px-7 py-[21px] md:px-11">
      <div className="mb-2 flex items-center justify-center gap-4 pt-10 md:mb-0 md:justify-end md:pt-0">
        <a
          href={`/preview?project-id=${prompt?.template}`}
          style={{ pointerEvents: typingCompleted ? 'none' : 'auto' }}
        >
          <div className="flex h-10 w-12 items-center justify-center rounded bg-custom-gradient p-2">
            <span className="text-2xl text-white">
              <LuCode2 />
            </span>
          </div>
        </a>
      </div>

      {typingCompleted ? (
        <div className="flex size-full items-center justify-center">
          <div className="size-10">
            <Loader Color="#961CBE" />
          </div>
        </div>
      ) : (
        <div className="Scroller-Class relative mt-10 h-[80vh] overflow-y-auto bg-zinc-200">
          <LiveProvider
            language="jsx"
            code={code}
            noInline
            scope={{ React, useState, useEffect, useRef }}
          >
            <LivePreview />
          </LiveProvider>
        </div>
      )}
    </div>
  );
};

export default OverviewRight;
